import { NavLink } from "react-router-dom";

const tabs = [
  { to: "/", label: "Library", icon: "📚" },
  { to: "/lessons", label: "Lessons", icon: "🎓" },
  { to: "/words", label: "My words", icon: "⭐" },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-20 bg-white border-t border-gray-200 pb-[env(safe-area-inset-bottom)]">
      <div className="max-w-md mx-auto grid grid-cols-3">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            end
            className={({ isActive }) =>
              `flex flex-col items-center py-2 text-xs font-bold ${
                isActive ? "text-duo-blue" : "text-gray-400"
              }`
            }
          >
            <span className="text-xl leading-none mb-0.5">{tab.icon}</span>
            {tab.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
