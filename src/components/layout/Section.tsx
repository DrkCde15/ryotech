interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`relative w-full overflow-hidden ${className}`}>
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
  align?: "left" | "center";
  as?: "h1" | "h2";
}

export function SectionHeader({
  title,
  subtitle,
  tag,
  align = "left",
  as: Heading = "h2",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""}`}>
      {tag && (
        <span className="mb-4 block text-xs font-semibold tracking-widest uppercase text-zinc-400">
          {tag}
        </span>
      )}
      <Heading className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl md:text-5xl">
        {title}
      </Heading>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base text-zinc-400 md:text-lg ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
