import { useState } from "react";
import Container from "./Container";

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

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <a href="#home" className="text-lg font-bold text-slate-900">
            Derek Konadu
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </nav>

        {isOpen && (
          <div className="border-t border-slate-200 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
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