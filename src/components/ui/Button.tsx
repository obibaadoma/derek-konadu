type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
};

const Button = ({ children, href, className = "" }: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2";

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
};

export default Button;