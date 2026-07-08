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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-lg font-bold text-slate-900 dark:text-white"
          >
            Derek Konadu
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <ThemeToggle
              theme={theme}
              onToggle={toggleTheme}
            />
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle
              theme={theme}
              onToggle={toggleTheme}
            />

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200"
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-slate-200 py-4 dark:border-slate-800 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
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