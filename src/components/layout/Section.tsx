interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden ${className}`}
    >
      {children}
    </section>
  );
}

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  maxWidth?: "md" | "lg" | "xl" | "full";
}

const maxWidths = {
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-[1600px]",
};

export function Container({
  className = "",
  children,
  maxWidth = "xl",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-4 md:px-6 lg:px-8 ${maxWidths[maxWidth]} ${className}`}
    >
      {children}
    </div>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  tag?: string;
}

export function SectionHeader({ title, subtitle, tag }: SectionHeaderProps) {
  return (
    <div className="mb-16">
      {tag && (
        <span className="mb-4 block text-xs font-semibold tracking-widest uppercase text-cyan-400">
          {tag}
        </span>
      )}
      <h2 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-zinc-400 md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
