import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, SectionHeader } from "@/components/layout/Section";
import { buttonClasses } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import { CaseCard } from "@/components/cases/CaseCard";
import { services, getServiceBySlug } from "@/data/services";
import { cases } from "@/data/cases";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Serviço não encontrado" };
  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: `/servicos/${service.slug}` },
    openGraph: {
      title: `${service.name} | RyoTech`,
      description: service.description,
      url: `/servicos/${service.slug}`,
    },
  };
}

export default async function ServicoDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedCases = cases
    .filter((item) => item.categories.includes(service.name))
    .slice(0, 2);

  return (
    <main className="bg-[#050505]">
      <div className="border-b border-white/[0.08] bg-[#070707]">
        <div className="mx-auto max-w-[1600px] px-4 py-4 md:px-6 lg:px-8">
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
          >
            <span aria-hidden="true">←</span>
            Todos os serviços
          </Link>
        </div>
      </div>

      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]" />
        <Container className="relative py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] text-zinc-200">
              <ServiceIcon icon={service.icon} className="h-6 w-6" />
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
              {service.name}
            </h1>
            <p className="mt-4 text-lg text-zinc-300">{service.tagline}</p>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              {service.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contato" className={buttonClasses("primary", "lg")}>
                Solicitar proposta
              </Link>
              <Link href="/cases" className={buttonClasses("accent", "lg")}>
                Ver cases
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/[0.08]">
        <Container className="py-16 md:py-20">
          <SectionHeader title="O que está incluído" tag="ENTREGAS" />
          <div className="grid gap-6 md:grid-cols-2">
            {service.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-white/[0.08] bg-zinc-900/30 p-6"
              >
                <h3 className="text-sm font-semibold text-zinc-100">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-white/[0.08] bg-[#070707]">
        <Container className="py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader title="Entregáveis" tag="RESULTADO" />
              <ul className="space-y-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span
                      aria-hidden="true"
                      className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border border-white/20 text-[9px] text-zinc-200"
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader title="Tecnologias" tag="STACK" />
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/[0.08] bg-zinc-900/50 px-3 py-2 text-sm text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {relatedCases.length > 0 && (
        <section className="border-b border-white/[0.08]">
          <Container className="py-16 md:py-20">
            <SectionHeader title="Cases relacionados" tag="PROVA" />
            <div className="grid gap-6 md:grid-cols-2">
              {relatedCases.map((item) => (
                <CaseCard key={item.slug} item={item} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section>
        <Container className="py-20 text-center md:py-24">
          <h2 className="text-2xl font-bold text-zinc-50 md:text-3xl">
            Vamos conversar sobre {service.name.toLowerCase()}?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-400">
            Respondemos em até 24 horas com os próximos passos.
          </p>
          <div className="mt-8">
            <Link href="/contato" className={buttonClasses("primary", "lg")}>
              Falar com especialista
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
