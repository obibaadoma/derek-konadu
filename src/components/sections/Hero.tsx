import Container from "../layout/Container";
import Button from "../ui/Button";
import { FadeIn, SlideUp } from "../ui/animations";
import { personalInfo } from "../../data";

const stats = [
  { value: "8+", label: "Years in Software & IT" },
  { value: "Enterprise", label: "System Integration and ERP" },
  { value: "Backend", label: "APIs & Data Systems" },
  { value: "FinTech", label: "Reconciliation Focus" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 py-28 text-white sm:py-36"
    >
      <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-700/10 blur-3xl" />

      <Container>
        <div className="relative mx-auto max-w-5xl text-center">
          <FadeIn>
            <p className="text-sm font-semibold tracking-[0.35em] text-blue-300 uppercase">
              Hi, I&apos;m
            </p>
          </FadeIn>

          <SlideUp delay={0.1}>
            <h1 className="mt-5 text-5xl font-extrabold tracking-tight sm:text-7xl">
              {personalInfo.name}
            </h1>
          </SlideUp>

          <SlideUp delay={0.2}>
            <p className="mt-5 text-xl font-semibold text-blue-200">
              {personalInfo.role}
            </p>
          </SlideUp>

          <SlideUp delay={0.3}>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Building secure, scalable enterprise software, backend APIs,
              reconciliation systems, and modern business applications.
            </p>
          </SlideUp>

          <SlideUp delay={0.4}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                href="#projects"
                className="border border-white/20 text-white hover:bg-white/10"
              >
                View Projects
              </Button>

              <Button
                href="/Derek-Akrasi-Konadu-Resume.pdf"
                download
                className="border border-white/20 text-white hover:bg-white/10"
              >
                Download Resume
              </Button>

              <Button
                href="#contact"
                className="border border-white/20 text-white hover:bg-white/10"
              >
                Contact Me
              </Button>
            </div>
          </SlideUp>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <SlideUp key={stat.label} delay={0.1 * index}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur">
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
