import Container from "./Container";
import { personalInfo } from "../../data";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer
      className="border-t border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-slate-950"
      role="contentinfo"
    >
      <Container>
        <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          <nav
            aria-label="Footer social links"
            className="flex justify-center gap-5 text-sm font-medium text-slate-600 dark:text-slate-400"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Derek Konadu's GitHub profile"
              className="rounded-md transition hover:text-slate-950 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:hover:text-white dark:focus:ring-offset-slate-950"
            >
              GitHub
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Derek Konadu's LinkedIn profile"
              className="rounded-md transition hover:text-slate-950 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:hover:text-white dark:focus:ring-offset-slate-950"
            >
              LinkedIn
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Derek Konadu an email"
              className="rounded-md transition hover:text-slate-950 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:hover:text-white dark:focus:ring-offset-slate-950"
            >
              Email
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
