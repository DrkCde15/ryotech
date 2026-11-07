import type { Metadata } from "next";
import { Container, SectionHeader } from "@/components/layout/Section";
import { ServiceCard } from "@/components/services/ServiceCard";
import { buttonClasses } from "@/components/ui/Button";
import { company } from "@/data/company";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Inteligência artificial, automação, análise de dados, sites e aplicativos. Conheça as soluções da RyoTech.",
  alternates: { canonical: "/servicos" },
};

export default function ServicosPage() {
  return (
    <main className="bg-[#050505]">
      <section className="relative border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]" />
        <Container className="relative py-20 md:py-28">
          <SectionHeader
            as="h1"
            title="Serviços"
            subtitle="Soluções conectadas entre si. Contrate uma frente ou o projeto completo, do dado ao aplicativo."
            tag="O QUE FAZEMOS"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-20 text-center md:py-24">
          <h2 className="text-2xl font-bold text-zinc-50 md:text-3xl">
            Não encontrou o que precisa?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-400">
            Cada projeto é diferente. Conte o seu desafio e desenhamos a solução sob medida.
          </p>
          <div className="mt-8">
            <a href={`mailto:${company.email}`} className={buttonClasses("primary", "lg")}>
              Falar com a RyoTech
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
