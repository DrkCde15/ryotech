interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "accent" | "link";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:opacity-50";

  const variants = {
    primary:
      "bg-cyan-400 text-black hover:bg-cyan-300 shadow-lg shadow-cyan-400/10",
    ghost:
      "border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-zinc-100 hover:bg-zinc-900/50",
    accent:
      "border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/50",
    link:
      "text-zinc-400 underline-offset-4 hover:text-cyan-400 dark:text-zinc-500",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-14 px-8 text-base",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
