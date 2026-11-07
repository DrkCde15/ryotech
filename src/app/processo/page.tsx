import type { Metadata } from "next";
import Link from "next/link";
import { Container, SectionHeader } from "@/components/layout/Section";
import { buttonClasses } from "@/components/ui/Button";
import { processSteps } from "@/data/company";

export const metadata: Metadata = {
  title: "Processo",
  description:
    "Do diagnóstico à evolução: conheça o processo de trabalho da RyoTech.",
  alternates: { canonical: "/processo" },
};

export default function ProcessoPage() {
  return (
    <main className="bg-[#050505]">
      <section className="relative border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]" />
        <Container className="relative py-20 md:py-28">
          <SectionHeader
            as="h1"
            title="Processo"
            subtitle="Transparência em cada etapa. Você sabe o que está sendo feito, por quê e quando."
            tag="COMO TRABALHAMOS"
          />
          <ol className="relative space-y-6 before:absolute before:left-[19px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-white/10 md:before:left-[23px]">
            {processSteps.map((step, index) => (
              <li key={step.title} className="relative flex gap-5">
                <span className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#050505] text-sm font-bold text-zinc-200 md:h-12 md:w-12">
                  {index + 1}
                </span>
                <div className="flex-1 rounded-xl border border-white/[0.08] bg-zinc-900/30 p-6">
                  <h2 className="text-lg font-semibold text-zinc-100">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {step.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {step.deliverables.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-white/[0.08] px-2.5 py-1 text-xs text-zinc-400"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section>
        <Container className="py-20 text-center md:py-24">
          <h2 className="text-2xl font-bold text-zinc-50 md:text-3xl">
            Comece pelo diagnóstico
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-400">
            A primeira conversa é gratuita e sem compromisso.
          </p>
          <div className="mt-8">
            <Link href="/contato" className={buttonClasses("primary", "lg")}>
              Agendar conversa
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
