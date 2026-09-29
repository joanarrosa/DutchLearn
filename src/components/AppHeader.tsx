import type { ReactNode } from "react";
import type { Progress } from "../types";

interface AppHeaderProps {
  subtitle: string;
  progress: Progress;
  children?: ReactNode;
}

export default function AppHeader({ subtitle, progress, children }: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-xl font-extrabold text-duo-green">Leer Nederlands</h1>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
        <div className="flex items-center gap-3 text-sm font-bold">
          <span className="flex items-center gap-1 text-orange-500">🔥 {progress.streak}</span>
          <span className="flex items-center gap-1 text-yellow-500">⭐ {progress.xp}</span>
        </div>
      </div>
      {children && <div className="max-w-md mx-auto mt-2">{children}</div>}
    </header>
  );
}
