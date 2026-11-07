import { CaseStudy } from "@/types";
import { CaseCard } from "./CaseCard";

export function CaseGrid({ cases }: { cases: CaseStudy[] }) {
  const hasFeatured = cases.some((item) => item.featured);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {cases.map((item) => (
        <div
          key={item.slug}
          className={hasFeatured && item.featured ? "md:col-span-2" : ""}
        >
          <CaseCard item={item} variant={item.featured ? "featured" : "default"} />
        </div>
      ))}
    </div>
  );
}
