import { Container } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/Section";
import { skills } from "@/data/skills";

export const metadata = {
  title: "Stack — Júlio César Santana",
  description: "Tecnologias e ferramentas que utilizo profissionalmente.",
};

const categoryDescriptions: Record<string, string> = {
  "Data Engineering": "Pipelines, orquestração e modelagem de dados",
  "Data Analysis": "Análise, visualização e insights a partir de dados",
  "Development": "Ferramentas de desenvolvimento e versionamento",
  "Infrastructure": "Cloud, containers e infraestrutura escalável",
};

export default function StackPage() {
  return (
    <main className="bg-[#050505]">
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.02),transparent_60%)]" />
        <div className="relative mx-auto max-w-[1600px] px-4 py-20 md:px-6 md:py-28 lg:px-8">
          <Container>
            <SectionHeader
              title="Stack"
              subtitle="Tecnologias que utilizo profissionalmente para construir sistemas de dados."
              tag="TOOLS"
            />

            <div className="space-y-12">
              {skills.map((category) => (
                <div
                  key={category.name}
                  className="rounded-xl border border-white/[0.06] bg-zinc-900/30 p-6 md:p-8"
                >
                  <h3 className="text-lg font-semibold text-zinc-200">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    {categoryDescriptions[category.name] || ""}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/[0.06] bg-zinc-900/50 px-4 py-2.5 text-sm text-zinc-300 transition-all hover:border-cyan-400/20 hover:bg-cyan-400/5 hover:text-cyan-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>
    </main>
  );
}
