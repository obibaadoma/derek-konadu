type ThemeToggleProps = {
  theme: "light" | "dark";
  onToggle: () => void;
};

const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-white/20 dark:text-slate-200 dark:hover:bg-white/10"
      aria-label="Toggle dark mode"
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
};

export default ThemeToggle;