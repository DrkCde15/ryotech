import { ProjectCard } from "./ProjectCard";
import { Project } from "@/types";

interface ProjectGridProps {
  projects: Project[];
  featuredProject?: Project;
}

export function ProjectGrid({ projects, featuredProject }: ProjectGridProps) {
  const realProjects = projects.filter((p) => p.github);
  const nonFeatured = featuredProject
    ? realProjects.filter((p) => p.slug !== featuredProject.slug)
    : realProjects;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {featuredProject && (
        <div className="md:col-span-2">
          <ProjectCard project={featuredProject} variant="featured" />
        </div>
      )}
      {nonFeatured.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
