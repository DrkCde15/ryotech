import { Experience } from "@/types";
import { TechnologyBadge } from "@/components/projects/TechnologyBadge";

interface ExperienceTimelineProps {
  experience: Experience[];
}

export function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  return (
    <div className="relative space-y-8">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-800 md:left-1/2 md:-translate-x-px" />
      {experience.map((exp, index) => (
        <div
          key={exp.id}
          className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
        >
          <div className="md:w-1/2">
            <article className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-100">
                    {exp.role.role}
                  </h3>
                  <p className="text-sm text-zinc-400">{exp.role.company}</p>
                </div>
                <span className="text-sm font-medium text-zinc-500">
                  {exp.role.period}
                </span>
              </div>
              <p className="mt-4 text-sm text-zinc-400">
                {exp.role.description}
              </p>
              {exp.role.technologies.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.role.technologies.map((tech) => (
                    <TechnologyBadge key={tech} name={tech} />
                  ))}
                </div>
              )}
              {exp.role.responsibilities.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {exp.role.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-600" />
                      {resp}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </div>
          <div className="hidden md:flex md:w-1/2 items-center justify-center">
            <div className="h-4 w-4 rounded-full bg-zinc-950 border-2 border-zinc-600" />
          </div>
        </div>
      ))}
    </div>
  );
}
