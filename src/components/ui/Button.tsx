interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "accent" | "link";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const variants = {
  primary:
    "bg-zinc-100 text-black hover:bg-white shadow-lg shadow-white/10",
  ghost:
    "border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-zinc-100 hover:bg-zinc-900/50",
  accent:
    "border border-white/20 text-zinc-100 hover:bg-white/5 hover:border-white/40",
  link: "text-zinc-400 underline-offset-4 hover:text-zinc-100",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-8 text-base",
};

const base =
  "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 disabled:opacity-50";

export function buttonClasses(
  variant: keyof typeof variants = "primary",
  size: keyof typeof sizes = "md",
  className = ""
) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonClasses(variant, size, className ?? "")} {...props}>
      {children}
    </button>
  );
}
