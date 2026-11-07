import type { Metadata } from "next";
import Link from "next/link";
import { Container, SectionHeader } from "@/components/layout/Section";
import { buttonClasses } from "@/components/ui/Button";
import { technologies } from "@/data/technologies";

export const metadata: Metadata = {
  title: "Tecnologias",
  description:
    "Stack de tecnologia da RyoTech: IA, dados, desenvolvimento, automação e infraestrutura.",
  alternates: { canonical: "/tecnologias" },
};

export default function TecnologiasPage() {
  return (
    <main className="bg-[#050505]">
      <section className="relative border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]" />
        <Container className="relative py-20 md:py-28">
          <SectionHeader
            as="h1"
            title="Tecnologias"
            subtitle="Escolhemos a ferramenta pelo problema, não pela moda. Esta é a stack que dominamos."
            tag="STACK"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {technologies.map((category) => (
              <div
                key={category.name}
                className="rounded-xl border border-white/[0.08] bg-zinc-900/30 p-6 md:p-8"
              >
                <h2 className="text-lg font-semibold text-zinc-100">
                  {category.name}
                </h2>
                <p className="mt-1 text-sm text-zinc-500">{category.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/[0.08] bg-zinc-900/50 px-3 py-2 text-sm text-zinc-300 transition-colors hover:border-white/25 hover:text-zinc-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-20 text-center md:py-24">
          <h2 className="text-2xl font-bold text-zinc-50 md:text-3xl">
            Precisa de uma stack específica?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-400">
            Avaliamos seu ambiente atual e indicamos a melhor combinação de ferramentas.
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
