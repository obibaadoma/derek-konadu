import Container from "./Container";
import { personalInfo } from "../../data";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-slate-950">
      <Container>
        <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          <div className="flex justify-center gap-5 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-slate-950 dark:hover:text-white"
            >
              GitHub
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-slate-950 dark:hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="transition hover:text-slate-950 dark:hover:text-white"
            >
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;