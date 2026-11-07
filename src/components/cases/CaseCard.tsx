import Link from "next/link";
import { CaseStudy } from "@/types";

export function CaseCard({
  item,
  variant = "default",
}: {
  item: CaseStudy;
  variant?: "default" | "featured";
}) {
  const highlighted = item.featured;

  return (
    <article className="group flex h-full flex-col rounded-xl border border-white/[0.08] bg-zinc-900/40 transition-all duration-300 hover:border-white/25 hover:bg-zinc-900/60">
      <div className="flex flex-grow flex-col p-6 md:p-8">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            {item.segment}
          </span>
          {highlighted && variant === "featured" && (
            <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-300">
              Destaque
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold tracking-tight text-zinc-100 transition-colors group-hover:text-white">
          {item.title}
        </h3>
        <p className="mt-1 text-sm text-zinc-500">{item.client}</p>

        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          {item.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/[0.08] px-2 py-0.5 text-xs text-zinc-400"
            >
              {tech}
            </span>
          ))}
          {item.technologies.length > 4 && (
            <span className="rounded-md border border-white/[0.08] px-2 py-0.5 text-xs text-zinc-500">
              +{item.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="mt-auto flex flex-wrap gap-4 pt-6 text-xs">
          {item.results.slice(0, 2).map((result) => (
            <div key={result.label}>
              <span className="block text-base font-bold text-zinc-100">
                {result.value}
              </span>
              <span className="text-zinc-500">{result.label}</span>
            </div>
          ))}
        </div>

        <Link
          href={`/cases/${item.slug}`}
          className="mt-6 inline-flex items-center text-sm font-medium text-zinc-300 transition-colors group-hover:text-white"
        >
          Ver case completo
          <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
