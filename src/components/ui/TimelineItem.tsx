type TimelineItemProps = {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  technologies: string[];
};

const TimelineItem = ({
  company,
  role,
  location,
  period,
  summary,
  achievements,
  technologies,
}: TimelineItemProps) => {
  return (
    <article className="relative border-l border-slate-200 pl-8 dark:border-slate-800">
      <span className="absolute top-2 -left-2 h-4 w-4 rounded-full border-4 border-white bg-blue-600 shadow dark:border-slate-950" />

      <p className="text-sm font-semibold tracking-[0.25em] text-blue-600 uppercase dark:text-blue-400">
        {period}
      </p>

      <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
        {role}
      </h3>

      <p className="mt-1 text-base font-medium text-slate-700 dark:text-slate-300">
        {company} · {location}
      </p>

      <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
        {summary}
      </p>

      <ul className="mt-5 space-y-3">
        {achievements.map((achievement) => (
          <li
            key={achievement}
            className="flex gap-3 text-slate-600 dark:text-slate-300"
          >
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
};

export default TimelineItem;
