import Container from "../layout/Container";
import Button from "../ui/Button";
import { personalInfo } from "../../data";

const stats = [
  { value: "4+", label: "Years in Software & IT" },
  { value: "5+", label: "Years with Transaction Systems" },
  { value: "Enterprise", label: "Systems & Integration Focus" },
];

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 py-28 text-white sm:py-36">
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

      <Container>
        <div className="relative">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              {personalInfo.role}
            </p>

            <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl">
              Building secure, scalable software for enterprise systems and modern businesses.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              I&apos;m {personalInfo.name}, a software engineer focused on full-stack applications,
              backend APIs, enterprise integrations, transaction-driven systems and reliable
              business software.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#projects" className="bg-white text-slate-950 hover:bg-slate-200">
                View Projects
              </Button>

              <Button href="#contact" className="border border-white/20 text-white hover:bg-white/10">
                Contact Me
              </Button>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;