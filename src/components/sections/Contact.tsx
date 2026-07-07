import Container from "../layout/Container";
import Button from "../ui/Button";
import { personalInfo } from "../../data";

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-950 py-24 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              Contact
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s build something reliable, secure, and useful.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              I&apos;m open to full-stack, backend, platform, and enterprise
              software engineering opportunities where I can help build scalable
              applications, secure APIs, and reliable business systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                href={`mailto:${personalInfo.email}`}
                className="bg-white text-slate-950 hover:bg-slate-200"
              >
                Email Me
              </Button>

              <Button
                href={personalInfo.linkedin}
                className="border border-white/20 text-white hover:bg-white/10"
              >
                LinkedIn
              </Button>

              <Button
                href={personalInfo.github}
                className="border border-white/20 text-white hover:bg-white/10"
              >
                GitHub
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-bold">Available for</h3>

            <ul className="mt-5 space-y-4 text-slate-300">
              <li>Full-Stack Software Engineering roles</li>
              <li>Backend API and platform engineering roles</li>
              <li>Enterprise integration and systems roles</li>
              <li>Remote and hybrid opportunities</li>
            </ul>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm text-slate-400">Location</p>
              <p className="mt-1 font-semibold">{personalInfo.location}</p>

              <p className="mt-5 text-sm text-slate-400">Email</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="mt-1 block font-semibold text-blue-300 hover:text-blue-200"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;