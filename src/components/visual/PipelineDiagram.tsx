interface PipelineStep {
  name: string;
  description: string;
}

interface PipelineDiagramProps {
  steps: PipelineStep[];
}

const silver = "#d4d4d8";

export function PipelineDiagram({ steps }: PipelineDiagramProps) {
  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="flex items-start gap-0 overflow-x-auto pb-4">
        {steps.map((step, index) => (
          <div key={step.name} className="flex items-start">
            <div className="relative flex w-44 flex-col items-center">
              <div className="flex h-16 w-36 items-center justify-center rounded-lg border border-white/15 bg-zinc-900/80 px-3 py-2 text-center backdrop-blur-sm transition-all hover:border-white/35 hover:bg-zinc-900">
                <span className="text-xs font-semibold text-zinc-200">{step.name}</span>
              </div>
              <p className="mt-3 max-w-[140px] text-center text-xs text-zinc-500">
                {step.description}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div className="relative flex h-12 w-12 items-center justify-center text-zinc-600">
                <svg width="48" height="20" viewBox="0 0 48 20" fill="none" aria-hidden="true">
                  <line
                    x1="0"
                    y1="10"
                    x2="36"
                    y2="10"
                    stroke={silver}
                    strokeWidth="1.5"
                    className="animate-dash"
                  />
                  <polygon points="38,5 48,10 38,15" fill={silver} opacity="0.6" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
