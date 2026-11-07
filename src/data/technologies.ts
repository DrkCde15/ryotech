import { TechnologyCategory } from "@/types";

export const technologies: TechnologyCategory[] = [
  {
    name: "Inteligência Artificial",
    description: "Modelos, agentes e automação inteligente.",
    items: ["Python", "OpenAI", "LangChain", "PyTorch", "Scikit-learn", "Hugging Face", "RAG", "Computer Vision"],
  },
  {
    name: "Dados",
    description: "Pipelines, modelagem e analytics.",
    items: ["SQL", "PostgreSQL", "BigQuery", "Databricks", "dbt", "Airflow", "Spark", "Power BI", "Looker Studio"],
  },
  {
    name: "Desenvolvimento",
    description: "Web, APIs e aplicativos.",
    items: ["Next.js", "React", "TypeScript", "Node.js", "FastAPI", "React Native", "Flutter", "Tailwind CSS"],
  },
  {
    name: "Automação",
    description: "Integração e robôs de processo.",
    items: ["n8n", "Make", "Playwright", "Selenium", "APIs REST", "Webhooks"],
  },
  {
    name: "Infraestrutura",
    description: "Cloud, containers e entrega contínua.",
    items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Vercel", "CI/CD", "Linux"],
  },
];

export const allTechnologies = Array.from(
  new Set(technologies.flatMap((category) => category.items))
);
