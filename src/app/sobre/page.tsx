import type { Metadata } from "next";
import Link from "next/link";
import { Container, SectionHeader } from "@/components/layout/Section";
import { buttonClasses } from "@/components/ui/Button";
import { CaseCard } from "@/components/cases/CaseCard";
import { company, companyValues, differentiators, processSteps } from "@/data/company";
import { cases } from "@/data/cases";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a RyoTech: uma empresa de tecnologia focada em IA, automação, dados e desenvolvimento de software.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  const featured = cases.filter((item) => item.featured).slice(0, 2);

  return (
    <main className="bg-[#050505]">
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]" />
        <Container className="relative py-20 md:py-28">
          <div className="max-w-3xl">
            <div>
              <SectionHeader
                as="h1"
                title="Tecnologia com propósito"
                subtitle="A RyoTech nasceu para resolver problemas reais com tecnologia bem feita."
                tag="SOBRE"
              />
              <div className="space-y-4 text-sm leading-relaxed text-zinc-400 md:text-base">
                <p>
                  Somos uma empresa de tecnologia especializada em inteligência artificial,
                  automação, análise de dados e desenvolvimento de sites e aplicativos.
                  Atuamos do diagnóstico à entrega, com um time enxuto e técnico.
                </p>
                <p>
                  Fundada em 2026, a RyoTech veio para ajudar a transformar processos manuais em sistemas
                  confiáveis e mensuráveis.
                </p>
                <p>
                  Acreditamos que tecnologia só faz sentido quando gera resultado. Por isso,
                  cada projeto começa com uma pergunta simples: qual problema estamos resolvendo?
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${company.email}`} className={buttonClasses("primary", "lg")}>
                  Falar com a RyoTech
                </a>
                <Link href="/cases" className={buttonClasses("accent", "lg")}>
                  Ver cases
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/[0.08] bg-[#070707]">
        <Container className="py-20 md:py-28">
          <SectionHeader
            title="Nossos valores"
            subtitle="O que guia cada decisão e cada linha de código."
            tag="PRINCÍPIOS"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {companyValues.map((value, index) => (
              <div
                key={value.title}
                className={`rounded-xl border border-white/[0.08] bg-zinc-900/30 p-6 ${
                  index === companyValues.length - 1 && companyValues.length % 2 === 1
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <h3 className="text-sm font-semibold text-zinc-100">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-white/[0.08]">
        <Container className="py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader title="Por que escolher a RyoTech" tag="DIFERENCIAIS" />
              <div className="space-y-4">
                {differentiators.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/[0.08] bg-zinc-900/30 p-5"
                  >
                    <h3 className="text-sm font-semibold text-zinc-100">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader title="Como trabalhamos" tag="PROCESSO" />
              <ol className="space-y-4">
                {processSteps.map((step, index) => (
                  <li
                    key={step.title}
                    className="rounded-xl border border-white/[0.08] bg-zinc-900/30 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-xs font-bold text-zinc-300">
                        {index + 1}
                      </span>
                      <h3 className="text-sm font-semibold text-zinc-100">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm text-zinc-400">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#070707]">
        <Container className="py-20 md:py-28">
          <SectionHeader
            title="Cases em destaque"
            subtitle="Alguns dos problemas que já resolvemos."
            tag="RESULTADOS"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((item) => (
              <CaseCard key={item.slug} item={item} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
