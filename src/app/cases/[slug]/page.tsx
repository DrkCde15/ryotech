import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, SectionHeader } from "@/components/layout/Section";
import { ArchitectureDiagram } from "@/components/visual/ArchitectureDiagram";
import { PipelineDiagram } from "@/components/visual/PipelineDiagram";
import { buttonClasses } from "@/components/ui/Button";
import { cases, getCaseBySlug } from "@/data/cases";
import { companyConfig } from "@/lib/config";

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) return { title: "Case não encontrado" };
  return {
    title: item.title,
    description: item.shortDescription,
    alternates: { canonical: `/cases/${item.slug}` },
    openGraph: {
      title: `${item.title} | RyoTech`,
      description: item.shortDescription,
      url: `/cases/${item.slug}`,
    },
  };
}

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) notFound();

  return (
    <main className="bg-[#050505]">
      <div className="border-b border-white/[0.08] bg-[#070707]">
        <div className="mx-auto max-w-[1600px] px-4 py-4 md:px-6 lg:px-8">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
          >
            <span aria-hidden="true">←</span>
            Todos os cases
          </Link>
        </div>
      </div>

      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]" />
        <Container className="relative py-16 md:py-24">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              {item.segment} · {item.client}
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
              {item.title}
            </h1>
            <p className="mt-4 text-lg text-zinc-300 md:text-xl">
              {item.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {item.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-md border border-white/[0.08] px-3 py-1.5 text-xs text-zinc-300"
                >
                  {category}
                </span>
              ))}
            </div>

            {(item.demo || item.github) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {item.demo && (
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses("primary", "lg")}
                  >
                    Ver demonstração
                  </a>
                )}
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses("accent", "lg")}
                  >
                    Código fonte
                  </a>
                )}
              </div>
            )}
          </div>
        </Container>
      </section>

      <section className="border-b border-white/[0.08] bg-[#070707]">
        <Container className="py-12 md:py-16">
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {item.results.map((result) => (
              <div
                key={result.label}
                className="rounded-xl border border-white/[0.08] bg-zinc-900/30 p-6 text-center"
              >
                <dd className="text-3xl font-bold text-zinc-100">{result.value}</dd>
                <dt className="mt-1 text-xs text-zinc-500">{result.label}</dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {item.pipeline && (
        <section className="border-b border-white/[0.08]">
          <Container className="py-16 md:py-20">
            <SectionHeader title={item.pipeline.title} tag="PIPELINE" />
            <div className="rounded-xl border border-white/[0.08] bg-zinc-900/30 p-4 md:p-8">
              <PipelineDiagram steps={item.pipeline.steps} />
            </div>
          </Container>
        </section>
      )}

      <section className="border-b border-white/[0.08]">
        <Container className="py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-white/[0.08] bg-zinc-900/30 p-6 md:p-8">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                Desafio
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                {item.challenge}
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-zinc-900/30 p-6 md:p-8">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                Solução
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                {item.solution}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {item.architecture && (
        <section className="border-b border-white/[0.08] bg-[#070707]">
          <Container className="py-16 md:py-20">
            <ArchitectureDiagram
              title={item.architecture.title}
              description={item.architecture.description}
              steps={item.architecture.steps}
            />
          </Container>
        </section>
      )}

      {item.quote && (
        <section className="border-b border-white/[0.08]">
          <Container className="py-16 md:py-20">
            <blockquote className="mx-auto max-w-3xl text-center">
              <p className="text-xl font-medium leading-relaxed text-zinc-200 md:text-2xl">
                “{item.quote.text}”
              </p>
              <footer className="mt-6 text-sm text-zinc-500">
                <span className="font-semibold text-zinc-300">
                  {item.quote.author}
                </span>
                {" · "}
                {item.quote.role}
              </footer>
            </blockquote>
          </Container>
        </section>
      )}

      <section className="border-b border-white/[0.08] bg-[#070707]">
        <Container className="py-16 md:py-20">
          <SectionHeader title="Tecnologias utilizadas" tag="STACK" />
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/[0.08] bg-zinc-900/50 px-3 py-2 text-sm text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-20 text-center md:py-24">
          <h2 className="text-2xl font-bold text-zinc-50 md:text-3xl">
            Quer um resultado parecido?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-400">
            Fale com a RyoTech e descubra o que é possível no seu contexto.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contato"
              className={buttonClasses("primary", "lg")}
            >
              Falar com especialista
            </Link>
            <a
              href={`mailto:${companyConfig.email}`}
              className={buttonClasses("accent", "lg")}
            >
              {companyConfig.email}
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
