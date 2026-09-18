import { HeroPipeline } from "@/components/visual/HeroPipeline";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { TechStack } from "@/components/visual/TechStack";
import { Container } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { projects, featuredProjects } from "@/data/projects";
import { skills } from "@/data/skills";

const allTechNames = Array.from(
  new Set(skills.flatMap((s) => s.skills))
);

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.02] blur-3xl" />

        <div className="relative mx-auto max-w-[1600px] px-4 py-24 md:px-6 md:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              <span className="text-xs font-semibold tracking-wide text-cyan-400">
                Disponível para projetos
              </span>
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-zinc-50 sm:text-6xl md:text-7xl lg:text-8xl">
              Júlio César
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Santana
              </span>
            </h1>

            <p className="mt-6 text-lg font-medium text-zinc-400 sm:text-xl md:text-2xl">
              Data Engineer · Data Analyst
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-base text-zinc-500 md:text-lg">
              Transformo dados brutos em pipelines, sistemas e análises confiáveis.
              Especialista em engenharia de dados, ELT e arquiteturas de dados escaláveis.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/projetos">
                <Button variant="primary" size="lg">
                  Explorar projetos
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
              <a
                href="https://github.com/DrkCde15"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-cyan-400/30 hover:text-cyan-400 hover:bg-cyan-400/5"
              >
                GitHub
              </a>
            </div>

            <div className="mt-16">
              <HeroPipeline />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="border-t border-white/[0.06] bg-[#070707]">
        <Container className="py-20 md:py-28">
          <SectionHeader
            title="Data Stack"
            subtitle="Tecnologias que utilizo para construir sistemas de dados confiáveis."
            tag="TOOLS"
          />
          <TechStack title="Tecnologias Principais" items={allTechNames.map((name) => ({ name }))} />
        </Container>
      </section>

      {/* Featured + Projects Section */}
      <section className="border-t border-white/[0.06] bg-[#050505]">
        <Container className="py-20 md:py-28">
          <SectionHeader
            title="Projetos"
            subtitle="Work selecionado — pipelines, data warehouses e sistemas de dados."
            tag="WORK"
          />
          <ProjectGrid projects={projects} featuredProject={featuredProjects[0]} />
        </Container>
      </section>
    </main>
  );
}
