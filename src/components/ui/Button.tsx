type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
};

const Button = ({ children, href, className = "" }: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition";

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        {children}
      </a>
    );
  }

  return <button className={`${baseClasses} ${className}`}>{children}</button>;
};

export default Button;