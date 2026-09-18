import { Container } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata = {
  title: "Sobre — Júlio César Santana",
  description: "Conheça Júlio César Santana, Data Engineer e Data Analyst.",
};

const specialties = [
  {
    title: "Data Engineering",
    desc: "Pipelines ETL/ELT, data warehouses, e orquestração de dados.",
  },
  {
    title: "Analytics",
    desc: "Análise de dados, dashboards e relatórios com ferramentas modernas.",
  },
  {
    title: "Cloud",
    desc: "Infraestrutura em nuvem, containers e automação escalável.",
  },
  {
    title: "Automation",
    desc: "Automação de workflows e processos de dados com Airflow e Python.",
  },
];

export default function SobrePage() {
  return (
    <main className="bg-[#050505]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.03),transparent_60%)]" />
        <div className="relative mx-auto max-w-[1600px] px-4 py-20 md:px-6 md:py-28 lg:px-8">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="mb-4 inline-block text-xs font-semibold tracking-widest uppercase text-cyan-400">
                  ABOUT
                </span>
                <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
                  Olá, sou Júlio César
                </h1>
                <p className="mt-6 text-lg text-zinc-400">
                  Data Engineer e Data Analyst com foco em construir sistemas de dados robustos e escaláveis.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                  Trabalho com pipelines de dados, data warehouses, orquestração de workflows e análise de dados. Meu objetivo é transformar dados brutos em insights confiáveis que impulsionam decisões.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contato">
                    <Button variant="primary">
                      Falar comigo
                    </Button>
                  </Link>
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-cyan-400/30 hover:text-cyan-400 hover:bg-cyan-400/5"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-sm font-semibold tracking-widest uppercase text-zinc-500">
                  Especialidades
                </h3>
                <div className="grid gap-3">
                  {specialties.map((spec) => (
                    <div
                      key={spec.title}
                      className="rounded-xl border border-white/[0.06] bg-zinc-900/30 p-5 transition-all hover:border-cyan-400/20"
                    >
                      <h4 className="text-sm font-semibold text-zinc-200">
                        {spec.title}
                      </h4>
                      <p className="mt-1 text-sm text-zinc-500">
                        {spec.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </main>
  );
}
