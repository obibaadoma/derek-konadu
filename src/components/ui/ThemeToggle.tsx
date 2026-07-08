type ThemeToggleProps = {
  theme: "light" | "dark";
  onToggle: () => void;
};

const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle dark mode"
      className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-900 shadow-sm transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-blue-400 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-400 dark:focus:ring-offset-slate-950"
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
};

export default ThemeToggle;