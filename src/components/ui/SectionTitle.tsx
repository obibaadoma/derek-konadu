type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="mb-6 max-w-3xl">
      <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-blue-600 uppercase dark:text-blue-400">
        Portfolio
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
