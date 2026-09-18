import { Container } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/Section";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { projects, featuredProjects } from "@/data/projects";

export const metadata = {
  title: "Projetos — Júlio César Santana",
  description: "Work selecionado em engenharia de dados, data warehouses e pipelines.",
};

export default function ProjetosPage() {
  return (
    <main className="bg-[#050505]">
      <section className="relative">
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
