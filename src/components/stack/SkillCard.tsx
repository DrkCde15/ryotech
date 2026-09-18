import { SkillCategory } from "@/types";

interface SkillCardProps {
  category: SkillCategory;
}

export function SkillCard({ category }: SkillCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
      <h3 className="text-lg font-semibold text-zinc-200">{category.name}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
