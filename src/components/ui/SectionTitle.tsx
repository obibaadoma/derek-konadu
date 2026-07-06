type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>

      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;