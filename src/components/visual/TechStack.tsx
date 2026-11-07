interface TechStackProps {
  title?: string;
  items: { name: string }[];
}

export function TechStack({ title, items }: TechStackProps) {
  return (
    <div className="w-full">
      {title && (
        <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-zinc-500">
          {title}
        </h3>
      )}
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="group flex items-center gap-2 rounded-lg border border-white/[0.08] bg-zinc-900/50 px-4 py-3 transition-all hover:border-white/25 hover:bg-zinc-900"
          >
            <span className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-zinc-100">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
