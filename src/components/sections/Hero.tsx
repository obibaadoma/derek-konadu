import Container from "../layout/Container";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section id="home" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
            Full-Stack Software Engineer
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Hi, I'm Derek Konadu. I build scalable web applications.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            I specialize in building modern frontend and backend applications
            using React, TypeScript, Node.js, FastAPI, PostgreSQL, and
            cloud-ready development practices.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              href="#projects"
              className="bg-slate-900 text-white hover:bg-slate-700"
            >
              View Projects
            </Button>

            <Button
              href="#contact"
              className="border border-slate-300 text-slate-700 hover:bg-slate-100"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;