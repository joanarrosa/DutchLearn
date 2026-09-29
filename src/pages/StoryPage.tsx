import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { findStory, LEVEL_INFO, STORIES } from "../data/stories";
import { DICTIONARY, NAMES } from "../data/dictionary";
import { normalizeWord, tokenize } from "../lib/tokenize";
import { isSpeechAvailable, loadSlowMode, saveSlowMode, speakDutch, stopSpeaking } from "../lib/tts";
import { loadProgress, recordLessonComplete, storyProgressId } from "../lib/storage";
import { isWordSaved, loadSavedWords, toggleSavedWord } from "../lib/savedWords";
import type { Progress, SavedWord, Story, StorySentence } from "../types";
import Speaker from "../components/Speaker";

const STORY_COMPLETION_XP = 30;

interface SelectedWord {
  word: string;
  sentence: string;
}

function WordSheet({
  selected,
  storyId,
  savedWords,
  onSavedChange,
  onClose,
}: {
  selected: SelectedWord;
  storyId: string;
  savedWords: SavedWord[];
  onSavedChange: (words: SavedWord[]) => void;
  onClose: () => void;
}) {
  const meaning = DICTIONARY[normalizeWord(selected.word)] ?? "No translation yet — see the full sentence.";
  // Names ("Emma", "Utrecht") keep their capital; a capital from starting a sentence doesn't.
  const key = normalizeWord(selected.word);
  const nl = key in NAMES ? selected.word : key;
  const saved = isWordSaved(savedWords, nl);

  return (
    <div className="fixed inset-0 z-30 flex items-end justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-black/30" />
      <div
        className="relative w-full max-w-md bg-white rounded-t-3xl shadow-xl p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-3xl font-extrabold text-gray-800">{nl}</h2>
          <Speaker text={nl} size="md" />
        </div>
        <p className="text-lg text-duo-blue font-bold mb-5">{meaning}</p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() =>
              onSavedChange(toggleSavedWord({ nl, en: meaning, sentence: selected.sentence, storyId }))
            }
            className={`flex-1 py-3 rounded-xl font-extrabold border-2 transition ${
              saved ? "bg-yellow-50 border-duo-gold text-yellow-600" : "border-gray-200 text-gray-600"
            }`}
          >
            {saved ? "★ Saved" : "☆ Save word"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 rounded-xl font-extrabold bg-duo-blue text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function SentenceBlock({
  sentence,
  playing,
  showTranslation,
  onToggleTranslation,
  onPlay,
  onWord,
}: {
  sentence: StorySentence;
  playing: boolean;
  showTranslation: boolean;
  onToggleTranslation: () => void;
  onPlay: () => void;
  onWord: (word: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (playing) ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [playing]);

  return (
    <div
      ref={ref}
      className={`rounded-2xl p-4 border transition ${
        playing ? "bg-yellow-50 border-duo-gold" : "bg-white border-gray-100"
      }`}
    >
      <div className="flex gap-3 items-start">
        <p className="flex-1 text-xl leading-relaxed text-gray-800">
          {tokenize(sentence.nl).map((token, i) =>
            token.isWord ? (
              <button
                key={i}
                type="button"
                onClick={() => onWord(token.text)}
                className="rounded px-0.5 -mx-0.5 hover:bg-sky-100 active:bg-sky-200 underline decoration-dotted decoration-gray-300 underline-offset-4"
              >
                {token.text}
              </button>
            ) : (
              <span key={i}>{token.text}</span>
            )
          )}
        </p>
        <button
          type="button"
          aria-label="Listen to this sentence"
          onClick={onPlay}
          className="shrink-0 w-10 h-10 rounded-full bg-sky-100 text-sky-600 active:scale-95 transition"
        >
          🔊
        </button>
      </div>
      {showTranslation ? (
        <button type="button" onClick={onToggleTranslation} className="block text-left w-full mt-2">
          <span className="text-duo-blue font-semibold">{sentence.en}</span>
          {sentence.note && (
            <span className="block text-sm text-gray-500 bg-purple-50 border border-purple-100 rounded-lg px-3 py-2 mt-2">
              💡 {sentence.note}
            </span>
          )}
        </button>
      ) : (
        <button
          type="button"
          onClick={onToggleTranslation}
          className="mt-2 text-sm font-bold text-gray-400"
        >
          Show translation{sentence.note ? " · 💡" : ""}
        </button>
      )}
    </div>
  );
}

function FinishedCard({ story, progress }: { story: Story; progress: Progress }) {
  const index = STORIES.findIndex((s) => s.id === story.id);
  const next = STORIES.slice(index + 1).find((s) => s.level === story.level) ?? STORIES[index + 1];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
      <div className="text-5xl mb-2">🎉</div>
      <h2 className="text-xl font-extrabold text-gray-800">Goed gedaan! (Well done!)</h2>
      <p className="text-gray-500 mb-4">
        +{STORY_COMPLETION_XP} XP · 🔥 {progress.streak} day streak
      </p>
      <div className="flex flex-col gap-3">
        {next && (
          <Link
            to={`/story/${next.id}`}
            className="bg-duo-green text-white font-extrabold py-3 rounded-xl border-b-4 border-duo-green-dark"
          >
            Next story: {next.title} {next.emoji}
          </Link>
        )}
        <Link to="/" className="font-extrabold text-duo-blue py-2">
          Back to the library
        </Link>
      </div>
    </div>
  );
}

export default function StoryPage() {
  const { storyId } = useParams<{ storyId: string }>();
  const navigate = useNavigate();
  const story = storyId ? findStory(storyId) : undefined;

  const [shown, setShown] = useState<Set<number>>(new Set());
  const [showAll, setShowAll] = useState(false);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [autoPlay, setAutoPlay] = useState(false);
  const [slow, setSlow] = useState(loadSlowMode);
  const [selected, setSelected] = useState<SelectedWord | null>(null);
  const [savedWords, setSavedWords] = useState(loadSavedWords);
  const [finished, setFinished] = useState<Progress | null>(null);
  // Bumped on every play/stop so callbacks from an older playback run are ignored.
  const runRef = useRef(0);

  // Reset when moving to another story (the page component is reused).
  useEffect(() => {
    setShown(new Set());
    setPlayingIndex(null);
    setAutoPlay(false);
    setFinished(null);
    window.scrollTo(0, 0);
    return () => {
      runRef.current++;
      stopSpeaking();
    };
  }, [storyId]);

  if (!story) {
    return (
      <div className="max-w-md mx-auto px-4 py-10 text-center">
        <p className="text-gray-600">Story not found.</p>
        <button className="mt-4 text-duo-blue font-bold" onClick={() => navigate("/")}>
          Back to the library
        </button>
      </div>
    );
  }

  const sentences = story.sentences;

  function play(index: number, continueAfter: boolean) {
    speakFrom(index, continueAfter, ++runRef.current);
  }

  function speakFrom(index: number, continueAfter: boolean, run: number) {
    setPlayingIndex(index);
    setAutoPlay(continueAfter);
    speakDutch(sentences[index].nl, {
      onEnd: () => {
        if (run !== runRef.current) return;
        if (continueAfter && index + 1 < sentences.length) {
          // A short pause between sentences, like a narrator.
          window.setTimeout(() => {
            if (run === runRef.current) speakFrom(index + 1, true, run);
          }, 400);
        } else {
          setPlayingIndex(null);
          setAutoPlay(false);
        }
      },
    });
  }

  function stop() {
    runRef.current++;
    stopSpeaking();
    setPlayingIndex(null);
    setAutoPlay(false);
  }

  function toggleTranslation(index: number) {
    setShown((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  function finish() {
    stop();
    setFinished(recordLessonComplete(loadProgress(), storyProgressId(story!.id), STORY_COMPLETION_XP));
  }

  return (
    <div className="min-h-screen pb-10">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate("/")}
              aria-label="Back to the library"
              className="text-gray-400 font-bold text-2xl leading-none"
            >
              ←
            </button>
            <div className="min-w-0 flex-1">
              <h1 className="font-extrabold text-gray-800 truncate">
                {story.emoji} {story.title}
              </h1>
              <p className="text-xs text-gray-400">
                {story.titleEn} · {LEVEL_INFO[story.level].label}
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            {isSpeechAvailable() && (
              <button
                type="button"
                onClick={() => (autoPlay ? stop() : play(playingIndex ?? 0, true))}
                className={`flex-1 py-2 rounded-xl text-sm font-extrabold text-white ${
                  autoPlay ? "bg-duo-red" : "bg-duo-green"
                }`}
              >
                {autoPlay ? "■ Stop" : "▶ Listen to all"}
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                saveSlowMode(!slow);
                setSlow(!slow);
              }}
              className={`px-3 py-2 rounded-xl text-sm font-extrabold border-2 ${
                slow ? "border-duo-blue text-duo-blue bg-sky-50" : "border-gray-200 text-gray-500"
              }`}
            >
              🐢 Slow
            </button>
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className={`px-3 py-2 rounded-xl text-sm font-extrabold border-2 ${
                showAll ? "border-duo-blue text-duo-blue bg-sky-50" : "border-gray-200 text-gray-500"
              }`}
            >
              🇬🇧 All
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pt-4 flex flex-col gap-3">
        <p className="text-sm text-gray-500 bg-white rounded-2xl border border-gray-100 p-4">
          {story.summary}
          <span className="block mt-2 text-gray-400">
            Tip: tap any word to see what it means. Tap 🔊 to hear a sentence.
          </span>
        </p>

        {sentences.map((sentence, i) => (
          <SentenceBlock
            key={i}
            sentence={sentence}
            playing={playingIndex === i}
            showTranslation={showAll || shown.has(i)}
            onToggleTranslation={() => toggleTranslation(i)}
            onPlay={() => play(i, false)}
            onWord={(word) => {
              stop();
              setSelected({ word, sentence: sentence.nl });
            }}
          />
        ))}

        <div className="mt-4">
          {finished ? (
            <FinishedCard story={story} progress={finished} />
          ) : (
            <button
              type="button"
              onClick={finish}
              className="w-full bg-duo-green hover:bg-duo-green-dark text-white font-extrabold py-4 rounded-xl border-b-4 border-duo-green-dark active:border-b-0 active:translate-y-1 transition"
            >
              ✓ I've read this story
            </button>
          )}
        </div>
      </main>

      {selected && (
        <WordSheet
          selected={selected}
          storyId={story.id}
          savedWords={savedWords}
          onSavedChange={setSavedWords}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
