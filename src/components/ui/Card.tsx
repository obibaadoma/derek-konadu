type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm shadow-slate-200/60 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-none ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;