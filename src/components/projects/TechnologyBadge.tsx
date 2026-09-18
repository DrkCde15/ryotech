interface TechnologyBadgeProps {
  name: string;
  className?: string;
}

export function TechnologyBadge({ name, className = "" }: TechnologyBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-300 ${className}`}
    >
      {name}
    </span>
  );
}
