import Link from "next/link";
import { Service } from "@/types";
import { ServiceIcon } from "./ServiceIcon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-white/[0.08] bg-zinc-900/40 p-6 transition-all duration-300 hover:border-white/25 hover:bg-zinc-900/60 md:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] text-zinc-200">
          <ServiceIcon icon={service.icon} className="h-5 w-5" />
        </span>
        <h3 className="text-lg font-semibold text-zinc-100">{service.name}</h3>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-zinc-400">{service.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500">
        {service.description}
      </p>
      <Link
        href={`/servicos/${service.slug}`}
        className="mt-6 inline-flex items-center text-sm font-medium text-zinc-300 transition-colors group-hover:text-white"
      >
        Ver serviço
        <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-1">
          →
        </span>
      </Link>
    </article>
  );
}
