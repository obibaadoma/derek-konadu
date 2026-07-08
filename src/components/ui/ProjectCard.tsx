import { SlideUp, Stagger, StaggerItem } from "./animations";

type ProjectCardProps = {
  title: string;
  type: string;
  role: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  features: string[];
  technologies: string[];
  repositoryStatus?: "Public" | "Private";
  demoStatus?: "Live" | "Coming Soon";
};

const ProjectCard = ({
  title,
  type,
  role,
  description,
  challenge,
  solution,
  outcome,
  features,
  technologies,
  repositoryStatus = "Private",
  demoStatus = "Coming Soon",
}: ProjectCardProps) => {
  return (
    <SlideUp>
      <article className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-sm shadow-slate-200/60 transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-none">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.4fr]">
          <div className="flex min-h-80 flex-col justify-between bg-slate-950 p-8 text-white">
            <div>
              <p className="text-sm font-semibold tracking-[0.25em] text-blue-300 uppercase">
                {type}
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-tight">
                {title}
              </h3>

              <p className="mt-2 text-sm font-medium text-blue-200">
                Role: {role}
              </p>

              <p className="mt-5 leading-7 text-slate-300">{description}</p>
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
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h4 className="text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400">
                  Challenge
                </h4>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {challenge}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400">
                  Solution
                </h4>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {solution}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400">
                  Outcome
                </h4>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {outcome}
                </p>
              </div>
            </div>

            <h4 className="mt-8 text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400">
              Key Features
            </h4>

            <Stagger className="mt-4 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <StaggerItem
                  key={feature}
                  className="flex gap-3 text-sm text-slate-600 dark:text-slate-300"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                  <span>{feature}</span>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="mt-8 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-300">
                Repository: {repositoryStatus}
              </span>

              <span className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-300">
                Demo: {demoStatus}
              </span>
            </div>
          </div>
        </div>
      </article>
    </SlideUp>
  );
};

export default ProjectCard;
