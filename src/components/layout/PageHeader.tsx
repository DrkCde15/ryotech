import { SectionHeader } from "@/components/layout/Section";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      <SectionHeader title={title} subtitle={subtitle} />
    </div>
  );
}
