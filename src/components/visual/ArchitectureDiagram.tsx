interface ArchitectureDiagramProps {
  title: string;
  description: string;
  steps: string[];
}

export function ArchitectureDiagram({ title, description, steps }: ArchitectureDiagramProps) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-zinc-900/40 p-6 md:p-8">
      <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
      <p className="mt-2 text-sm text-zinc-400">{description}</p>
      <div className="mt-6 space-y-4">
        {steps.map((step, index) => (
          <div key={step} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-xs font-bold text-zinc-200">
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className="h-full w-px bg-gradient-to-b from-white/20 to-transparent" />
              )}
            </div>
            <p className="pb-4 text-sm font-medium text-zinc-300">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
