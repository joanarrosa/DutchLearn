import { useEffect, useState } from "react";
import { UNITS } from "../data";
import { loadProgress } from "../lib/storage";
import type { Progress } from "../types";
import ProgressBar from "../components/ProgressBar";
import UnitSection from "../components/UnitSection";
import AppHeader from "../components/AppHeader";
import BottomNav from "../components/BottomNav";

export default function Home() {
  const [progress, setProgress] = useState<Progress | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  if (!progress) return null;

  return (
    <div className="min-h-screen pb-24">
      <AppHeader subtitle="Words, verbs and grammar, one lesson at a time" progress={progress}>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
          <span>Daily goal</span>
          <span>
            {Math.min(progress.todayXp, progress.dailyGoal)} / {progress.dailyGoal} XP
          </span>
        </div>
        <ProgressBar value={progress.todayXp} max={progress.dailyGoal} />
      </AppHeader>

      <main className="max-w-md mx-auto px-4 pt-8">
        {UNITS.map((unit, i) => (
          <UnitSection key={unit.id} unit={unit} unitIndex={i} progress={progress} />
        ))}
        <p className="text-center text-gray-400 text-sm mt-4">
          🎉 That's the whole course for now — more units coming soon!
        </p>
      </main>
      <BottomNav />
    </div>
  );
}
