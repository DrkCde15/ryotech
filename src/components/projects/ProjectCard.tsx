import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "featured";
}

const techColors: Record<string, string> = {
  Python: "text-green-400",
  "SQL": "text-blue-400",
  PostgreSQL: "text-blue-400",
  Airflow: "text-orange-400",
  PySpark: "text-yellow-400",
  Databricks: "text-purple-400",
  Azure: "text-blue-400",
  "Apache Airflow": "text-orange-400",
  "Scrapy": "text-red-400",
  Pandas: "text-green-400",
  FastAPI: "text-green-400",
  Streamlit: "text-orange-400",
  "Data Lake": "text-cyan-400",
  Parquet: "text-cyan-400",
};

export function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  const displayTechs = project.technologies.slice(0, 5);
  const extraTechs = project.technologies.length - 5;

  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-xl border border-white/[0.06] bg-zinc-900/40 transition-all duration-300 hover:border-cyan-400/20 hover:bg-zinc-900/60 ${
        variant === "featured" ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex flex-grow flex-col p-6 md:p-8">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400">
            {project.category[0]}
          </span>
          {variant === "featured" && (
            <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400/60">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold tracking-tight text-zinc-100 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-zinc-400 line-clamp-3">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {displayTechs.map((tech) => (
            <span
              key={tech}
              className={`rounded-md border border-white/[0.06] px-2 py-0.5 text-xs ${
                techColors[tech] || "text-zinc-400"
              } bg-transparent`}
            >
              {tech}
            </span>
          ))}
          {extraTechs > 0 && (
            <span className="rounded-md border border-white/[0.06] px-2 py-0.5 text-xs text-zinc-500">
              +{extraTechs}
            </span>
          )}
        </div>

        <div className="mt-auto pt-6 flex items-center gap-3">
          <Link href={`/projetos/${project.slug}`}>
            <Button variant="primary" size="sm">
              Ver projeto
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-800 px-4 py-2 text-sm text-zinc-400 transition-colors hover:border-cyan-400/30 hover:text-cyan-400 hover:bg-cyan-400/5"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
