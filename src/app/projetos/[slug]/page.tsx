import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/Section";
import { ArchitectureDiagram } from "@/components/visual/ArchitectureDiagram";
import { PipelineDiagram as PipelineDiagramVisual } from "@/components/visual/PipelineDiagram";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Projeto não encontrado" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    notFound();
  }

  const displayTechs = project.technologies.slice(0, 6);

  return (
    <main className="bg-[#050505]">
      {/* Back to projects */}
      <div className="border-b border-white/[0.06] bg-[#070707]">
        <div className="mx-auto max-w-[1600px] px-4 py-4 md:px-6 lg:px-8">
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-cyan-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar aos projetos
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.05),transparent_60%)]" />
        <div className="relative mx-auto max-w-[1600px] px-4 py-16 md:px-6 md:py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <span className="mb-4 inline-block text-xs font-semibold tracking-widest uppercase text-cyan-400">
              {project.category[0]}
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl md:text-6xl lg:text-7xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-zinc-400 md:text-xl">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {displayTechs.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/[0.06] px-3 py-1.5 text-xs text-zinc-300"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 6 && (
                <span className="rounded-md border border-white/[0.06] px-3 py-1.5 text-xs text-zinc-500">
                  +{project.technologies.length - 6}
                </span>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-cyan-300"
                >
                  Código fonte
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Visualization */}
      {project.pipeline && (
        <section className="border-t border-white/[0.06] bg-[#0a0a0a]">
          <Container className="py-16 md:py-20">
            <SectionHeader title={project.pipeline.title} tag="PIPELINE" />
            <div className="rounded-xl border border-white/[0.06] bg-zinc-900/30 p-4 md:p-8">
              <PipelineDiagramVisual steps={project.pipeline.steps} />
            </div>
          </Container>
        </section>
      )}

      <div className="grid grid-cols-1 gap-12 border-t border-white/[0.06] bg-[#050505] lg:grid-cols-5">
        {/* Main content */}
        <div className="lg:col-span-3 space-y-16">
          {/* Overview */}
          <Container>
            <SectionHeader title="Overview" tag="CASE" />
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-white/[0.06] bg-zinc-900/30 p-6">
                <h3 className="text-sm font-semibold text-zinc-400">Problema</h3>
                <p className="mt-3 text-sm text-zinc-400">{project.problem}</p>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-zinc-900/30 p-6">
                <h3 className="text-sm font-semibold text-zinc-400">Solução</h3>
                <p className="mt-3 text-sm text-zinc-400">{project.solution}</p>
              </div>
            </div>
          </Container>

          {/* Architecture */}
          {project.architecture && (
            <Container>
              <ArchitectureDiagram
                title={project.architecture.title}
                description={project.architecture.description}
                steps={project.architecture.steps}
              />
            </Container>
          )}

          {/* Implementation */}
          {project.implementation && (
            <Container>
              <SectionHeader title="Implementação" tag="CODE" />
              <div className="rounded-xl border border-white/[0.06] bg-zinc-900/30 p-6">
                <p className="text-sm leading-relaxed text-zinc-300">
                  {project.implementation}
                </p>
              </div>
            </Container>
          )}

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <Container>
              <SectionHeader title="Desafios" tag="CHALLENGES" />
              <div className="space-y-4">
                {project.challenges.map((challenge, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-zinc-900/30 p-6"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-xs font-bold text-cyan-400">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-200">
                        {challenge.title}
                      </h4>
                      <p className="mt-1 text-sm text-zinc-500">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6 lg:col-span-2">
          {/* Technologies */}
          <Container>
            <SectionHeader title="Tecnologias" tag="STACK" />
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/[0.06] bg-zinc-900/50 px-3 py-2 text-sm text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Container>

          {/* Results */}
          {project.results && project.results.length > 0 && (
            <Container>
              <SectionHeader title="Resultados" tag="RESULTS" />
              <div className="grid grid-cols-2 gap-3">
                {project.results.map((result, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/[0.06] bg-zinc-900/30 p-5 text-center"
                  >
                    <div className="text-2xl font-bold text-cyan-400">
                      {result.value}
                    </div>
                    <div className="mt-1 text-xs text-zinc-500">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          )}

          {/* CTA */}
          <Container>
            <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-6 text-center">
              <p className="text-sm text-zinc-300">
                Tem um projeto de dados?
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                Vamos construir juntos.
              </p>
              <div className="mt-4">
                <a
                  href={`mailto:${"jcesarsantana215@gmail.com"}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-cyan-300"
                >
                  Contato
                </a>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </main>
  );
}
