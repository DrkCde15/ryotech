interface TechStackItem {
  name: string;
  description?: string;
}

interface TechStackProps {
  title: string;
  items: TechStackItem[];
}

export function TechStack({ title, items }: TechStackProps) {
  return (
    <div className="w-full">
      <h3 className="mb-6 text-sm font-semibold tracking-widest uppercase text-zinc-500">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="group relative flex items-center gap-2 rounded-lg border border-white/[0.06] bg-zinc-900/50 px-4 py-3 transition-all hover:border-cyan-400/20 hover:bg-zinc-900"
          >
            <span className="text-sm font-semibold text-zinc-200 group-hover:text-cyan-400 transition-colors">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
