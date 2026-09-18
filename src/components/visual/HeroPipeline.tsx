"use client";

export function HeroPipeline() {
  const nodes = [
    { label: "Ingestão", desc: "Coleta de dados", color: "#f59e0b" },
    { label: "Transformação", desc: "Limpeza e processamento", color: "#22d3ee" },
    { label: "Carregamento", desc: "Armazenamento", color: "#8b5cf6" },
    { label: "Data Warehouse", desc: "Modelagem e estrutura", color: "#3b82f6" },
    { label: "Analytics", desc: "BI e relatórios", color: "#22c55e" },
  ];

  return (
    <div className="relative w-full py-8">
      <div className="mx-auto flex max-w-md flex-col items-center gap-0">
        {nodes.map((node, index) => (
          <div key={node.label} className="flex w-full flex-col items-center">
            <div
              className="flex h-16 w-full max-w-[240px] items-center justify-center rounded-xl border bg-zinc-900/80 text-center transition-all duration-300 hover:scale-[1.02] hover:border-opacity-50"
              style={{
                borderColor: `${node.color}40`,
                boxShadow: `0 0 30px ${node.color}10`,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: node.color }}
                />
                <span
                  className="text-sm font-bold"
                  style={{ color: node.color }}
                >
                  {node.label}
                </span>
              </div>
            </div>
            <p className="mt-2 text-center text-xs text-zinc-500">
              {node.desc}
            </p>
            {index < nodes.length - 1 && (
              <div className="relative flex h-8 w-full flex-col items-center">
                <div className="h-full w-px bg-gradient-to-b from-zinc-700 to-transparent" />
                <div className="relative flex h-6 w-6 items-center justify-center">
                  <div className="h-3 w-3 rotate-45 border-r border-b border-zinc-600" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
