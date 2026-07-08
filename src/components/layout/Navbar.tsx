import { useState } from "react";

import Container from "./Container";
import ThemeToggle from "../ui/ThemeToggle";
import { useTheme } from "../../hooks/useTheme";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const linkClasses =
  "rounded-md px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-white dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-offset-slate-950";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm backdrop-blur dark:border-blue-900 dark:bg-slate-950 dark:shadow-lg dark:shadow-black/40">
      <Container>
        <nav
          className="flex h-16 items-center justify-between"
          aria-label="Main navigation"
        >
          <a
            href="#home"
            className="rounded-md px-2 py-1 text-lg font-extrabold text-slate-950 transition hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-white dark:hover:text-blue-300 dark:focus:ring-offset-slate-950"
          >
            Derek Konadu
          </a>

          <div className="hidden items-center gap-4 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={linkClasses}>
                {link.label}
              </a>
            ))}

            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />

            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-bold text-slate-800 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-slate-600 dark:text-white dark:hover:bg-blue-500/20 dark:focus:ring-offset-slate-950"
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </nav>

        {isOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-slate-200 py-4 dark:border-slate-700"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={linkClasses}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;