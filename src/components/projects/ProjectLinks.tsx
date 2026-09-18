interface ProjectLinksProps {
  github?: string;
  demo?: string;
  projectTitle: string;
}

export function ProjectLinks({ github, demo, projectTitle }: ProjectLinksProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 px-4 py-2 text-sm text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-200"
          aria-label={`Código-fonte de ${projectTitle}`}
        >
          GitHub
        </a>
      )}
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 px-4 py-2 text-sm text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-200"
          aria-label={`Demonstração de ${projectTitle}`}
        >
          Demonstração
        </a>
      )}
    </div>
  );
}
