interface HeroFlowProps {
  steps: { title: string; description: string }[];
}

export function HeroFlow({ steps }: HeroFlowProps) {
  return (
    <div className="relative w-full py-6" aria-hidden="true">
      <div className="mx-auto flex max-w-md flex-col items-center">
        {steps.map((step, index) => (
          <div key={step.title} className="flex w-full flex-col items-center">
            <div className="flex h-16 w-full max-w-[260px] items-center justify-center rounded-xl border border-white/[0.12] bg-zinc-900/70 px-4 text-center backdrop-blur-sm transition-all duration-300 hover:border-white/30">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-[10px] font-semibold text-zinc-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-zinc-100">
                  {step.title}
                </span>
              </div>
            </div>
            <p className="mt-2 text-center text-xs text-zinc-500">
              {step.description}
            </p>
            {index < steps.length - 1 && (
              <div className="relative flex h-8 w-full flex-col items-center">
                <div className="h-full w-px bg-gradient-to-b from-zinc-500/50 to-transparent" />
                <div className="h-2 w-2 rotate-45 border-b border-r border-zinc-500/60" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
