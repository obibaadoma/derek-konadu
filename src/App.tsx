function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Backend & Full Stack Software Engineer
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Hi, I&apos;m Derek Konadu.
          <span className="block text-slate-400">
            I build enterprise-grade software systems.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I specialize in building scalable APIs, SaaS platforms, reconciliation
          systems, and business applications using FastAPI, Node.js, React,
          TypeScript, and PostgreSQL.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;