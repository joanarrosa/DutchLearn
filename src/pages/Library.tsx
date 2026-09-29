import { useState } from "react";
import { Link } from "react-router-dom";
import { LEVEL_INFO, STORIES, THEME_INFO } from "../data/stories";
import { isLessonComplete, loadProgress, storyProgressId } from "../lib/storage";
import type { StoryLevel, StoryTheme } from "../types";
import AppHeader from "../components/AppHeader";
import BottomNav from "../components/BottomNav";

const LEVELS = Object.keys(LEVEL_INFO) as StoryLevel[];
const THEMES = Object.keys(THEME_INFO) as StoryTheme[];

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 px-3 py-1.5 rounded-full text-sm font-bold border transition ${
        active ? "bg-duo-blue text-white border-duo-blue" : "bg-white text-gray-500 border-gray-200"
      }`}
    >
      {children}
    </button>
  );
}

export default function Library() {
  const [progress] = useState(loadProgress);
  const [level, setLevel] = useState<StoryLevel | null>(null);
  const [theme, setTheme] = useState<StoryTheme | null>(null);

  const shownLevels = level ? [level] : LEVELS;

  return (
    <div className="min-h-screen pb-24">
      <AppHeader subtitle="Short Dutch stories with audio and translation" progress={progress} />

      <main className="max-w-md mx-auto px-4 pt-4">
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
          <Chip active={level === null} onClick={() => setLevel(null)}>
            All levels
          </Chip>
          {LEVELS.map((l) => (
            <Chip key={l} active={level === l} onClick={() => setLevel(level === l ? null : l)}>
              {l}
            </Chip>
          ))}
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 mb-2">
          <Chip active={theme === null} onClick={() => setTheme(null)}>
            All topics
          </Chip>
          {THEMES.map((t) => (
            <Chip key={t} active={theme === t} onClick={() => setTheme(theme === t ? null : t)}>
              {`${THEME_INFO[t].emoji} ${THEME_INFO[t].label}`}
            </Chip>
          ))}
        </div>

        {shownLevels.map((l) => {
          const stories = STORIES.filter((s) => s.level === l && (!theme || s.theme === theme));
          if (stories.length === 0) return null;
          return (
            <section key={l} className="mb-6">
              <h2 className="font-extrabold text-gray-700">{LEVEL_INFO[l].label}</h2>
              <p className="text-xs text-gray-400 mb-3">{LEVEL_INFO[l].description}</p>
              <div className="flex flex-col gap-3">
                {stories.map((story) => {
                  const read = isLessonComplete(progress, storyProgressId(story.id));
                  return (
                    <Link
                      key={story.id}
                      to={`/story/${story.id}`}
                      className="flex gap-4 items-center bg-white rounded-2xl shadow-sm border border-gray-100 p-4 active:scale-[0.99] transition"
                    >
                      <div className="w-14 h-14 shrink-0 rounded-xl bg-sky-50 flex items-center justify-center text-3xl">
                        {story.emoji}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-extrabold text-gray-800 truncate">{story.title}</p>
                        <p className="text-sm text-gray-500 truncate">{story.titleEn}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {THEME_INFO[story.theme].emoji} {THEME_INFO[story.theme].label} ·{" "}
                          {story.sentences.length} sentences
                        </p>
                      </div>
                      {read && (
                        <span className="text-duo-green font-extrabold text-xl" aria-label="Read">
                          ✓
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </main>
      <BottomNav />
    </div>
  );
}
