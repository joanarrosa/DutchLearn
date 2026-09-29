import { useState } from "react";
import { Link } from "react-router-dom";
import { findStory } from "../data/stories";
import { loadSavedWords, removeSavedWord } from "../lib/savedWords";
import BottomNav from "../components/BottomNav";
import Speaker from "../components/Speaker";

export default function MyWords() {
  const [words, setWords] = useState(loadSavedWords);
  const [hideMeanings, setHideMeanings] = useState(false);
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  function reveal(nl: string) {
    setRevealed((prev) => new Set(prev).add(nl));
  }

  return (
    <div className="min-h-screen pb-24">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-extrabold text-duo-green">My words</h1>
            <p className="text-xs text-gray-500">
              {words.length} saved {words.length === 1 ? "word" : "words"}
            </p>
          </div>
          {words.length > 0 && (
            <button
              type="button"
              onClick={() => {
                setHideMeanings(!hideMeanings);
                setRevealed(new Set());
              }}
              className={`px-3 py-2 rounded-xl text-sm font-extrabold border-2 ${
                hideMeanings ? "border-duo-blue text-duo-blue bg-sky-50" : "border-gray-200 text-gray-500"
              }`}
            >
              {hideMeanings ? "Show meanings" : "Hide meanings"}
            </button>
          )}
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pt-4 flex flex-col gap-3">
        {words.length === 0 && (
          <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center text-gray-500">
            <div className="text-4xl mb-2">⭐</div>
            <p className="font-bold text-gray-700 mb-1">No saved words yet</p>
            <p className="text-sm mb-4">
              While reading a story, tap any word and press “Save word”. It will appear here so you can review it.
            </p>
            <Link to="/" className="text-duo-blue font-extrabold">
              Go to the library
            </Link>
          </div>
        )}

        {hideMeanings && words.length > 0 && (
          <p className="text-xs text-gray-400 text-center">Try to remember the meaning, then tap a word to check.</p>
        )}

        {words.map((word) => {
          const story = findStory(word.storyId);
          const showMeaning = !hideMeanings || revealed.has(word.nl);
          return (
            <div
              key={word.nl}
              onClick={() => reveal(word.nl)}
              className="bg-white rounded-2xl border border-gray-100 p-4"
            >
              <div className="flex items-center gap-3">
                <p className="flex-1 text-xl font-extrabold text-gray-800">{word.nl}</p>
                <Speaker text={word.nl} size="sm" />
                <button
                  type="button"
                  aria-label={`Remove ${word.nl}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setWords(removeSavedWord(word.nl));
                  }}
                  className="w-8 h-8 rounded-full text-gray-300 hover:text-duo-red"
                >
                  ✕
                </button>
              </div>
              <p className={`font-semibold ${showMeaning ? "text-duo-blue" : "text-gray-300"}`}>
                {showMeaning ? word.en : "Tap to show the meaning"}
              </p>
              <p className="text-sm text-gray-500 mt-2 italic">{word.sentence}</p>
              {story && (
                <Link
                  to={`/story/${story.id}`}
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs text-gray-400 font-bold"
                >
                  {story.emoji} {story.title}
                </Link>
              )}
            </div>
          );
        })}
      </main>
      <BottomNav />
    </div>
  );
}
