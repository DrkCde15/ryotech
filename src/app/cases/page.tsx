import type { Metadata } from "next";
import Link from "next/link";
import { Container, SectionHeader } from "@/components/layout/Section";
import { CaseGrid } from "@/components/cases/CaseGrid";
import { buttonClasses } from "@/components/ui/Button";
import { cases } from "@/data/cases";

export const metadata: Metadata = {
  title: "Cases",
  description:
    "Projetos de IA, automação, dados e desenvolvimento entregues pela RyoTech, com resultados mensuráveis.",
  alternates: { canonical: "/cases" },
};

export default function CasesPage() {
  return (
    <main className="bg-[#050505]">
      <section className="relative border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]" />
        <Container className="relative py-20 md:py-28">
          <SectionHeader
            as="h1"
            title="Cases"
            subtitle="Problemas reais, soluções sob medida e resultados que o cliente consegue medir."
            tag="CASES"
          />
          <CaseGrid cases={cases} />
        </Container>
      </section>

      <section>
        <Container className="py-20 text-center md:py-24">
          <h2 className="text-2xl font-bold text-zinc-50 md:text-3xl">
            O próximo case pode ser o seu
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-400">
            Conte o desafio da sua empresa e receba um diagnóstico inicial sem compromisso.
          </p>
          <div className="mt-8">
            <Link href="/contato" className={buttonClasses("primary", "lg")}>
              Solicitar diagnóstico
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
