type ProjectCardProps = {
  title: string;
  type: string;
  description: string;
  problem: string;
  features: string[];
  technologies: string[];
  repositoryStatus?: "Public" | "Private";
  demoStatus?: "Live" | "Coming Soon";
};

const ProjectCard = ({
  title,
  type,
  description,
  problem,
  features,
  technologies,
  repositoryStatus = "Private",
  demoStatus = "Coming Soon",
}: ProjectCardProps) => {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-sm shadow-slate-200/60 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.4fr]">
        <div className="flex min-h-72 flex-col justify-between bg-slate-950 p-8 text-white">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              {type}
            </p>

            <h3 className="mt-4 text-3xl font-bold tracking-tight">{title}</h3>

            <p className="mt-4 text-slate-300">{description}</p>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="h-3 w-24 rounded-full bg-blue-400/70" />
            <div className="mt-5 space-y-3">
              <div className="h-3 rounded-full bg-white/20" />
              <div className="h-3 w-5/6 rounded-full bg-white/20" />
              <div className="h-3 w-2/3 rounded-full bg-white/20" />
            </div>
          </div>
        </div>

        <div className="p-8">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Problem Solved
          </h4>

          <p className="mt-3 text-slate-600">{problem}</p>

          <h4 className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Key Features
          </h4>

          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <li key={feature} className="flex gap-3 text-sm text-slate-600">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">
              Repository: {repositoryStatus}
            </span>

            <span className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">
              Demo: {demoStatus}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;