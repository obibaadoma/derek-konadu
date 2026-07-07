type TimelineItemProps = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  technologies: string[];
};

const TimelineItem = ({
  company,
  role,
  period,
  location,
  summary,
  achievements,
  technologies,
}: TimelineItemProps) => {
  return (
    <div className="relative border-l-2 border-blue-200 pl-8">
      <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-blue-600" />

      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
        {period}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-slate-900">
        {role}
      </h3>

      <p className="text-lg font-medium text-slate-700">
        {company} • {location}
      </p>

      <p className="mt-4 text-slate-600">
        {summary}
      </p>

      <ul className="mt-5 space-y-2">
        {achievements.map((achievement) => (
          <li key={achievement} className="flex gap-3 text-slate-600">
            <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TimelineItem;