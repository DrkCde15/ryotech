import { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "inteligencia-artificial",
    name: "Inteligência Artificial",
    tagline: "IA aplicada ao seu negócio, não ao laboratório.",
    description:
      "Desenvolvemos soluções de inteligência artificial sob medida, de previsão de demanda a agentes conversacionais, integradas aos sistemas que sua empresa já usa.",
    icon: "ai",
    highlighted: true,
    features: [
      {
        title: "Agentes e assistentes",
        description:
          "Chatbots e copilotos treinados na base de conhecimento da sua empresa.",
      },
      {
        title: "Previsão e classificação",
        description:
          "Modelos de demanda, churn, crédito e triagem com métricas de negócio.",
      },
      {
        title: "Visão computacional",
        description:
          "Leitura de documentos, OCR inteligente e inspeção automatizada.",
      },
      {
        title: "IA generativa",
        description:
          "Geração e sumarização de conteúdo com controle de qualidade e custo.",
      },
    ],
    deliverables: [
      "Diagnóstico de casos de uso",
      "Prova de conceito em 2 a 4 semanas",
      "Modelo em produção com monitoramento",
      "Painel de métricas e custos",
    ],
    technologies: ["Python", "OpenAI", "LangChain", "PyTorch", "FastAPI", "PostgreSQL"],
  },
  {
    slug: "automacao",
    name: "Automação de Processos",
    tagline: "Menos trabalho manual, mais tempo para o que importa.",
    description:
      "Mapeamos tarefas repetitivas e criamos automações confiáveis que conectam sistemas, eliminam retrabalho e reduzem erros operacionais.",
    icon: "automation",
    features: [
      {
        title: "Integração de sistemas",
        description:
          "Conectamos ERPs, CRMs, planilhas e APIs sem depender de trabalho manual.",
      },
      {
        title: "Robôs de processo (RPA)",
        description:
          "Automação de rotinas em sistemas legados e portais sem API.",
      },
      {
        title: "Workflows agendados",
        description:
          "Rotinas que rodam sozinhas, com logs, alertas e reprocessamento.",
      },
      {
        title: "Automação com IA",
        description:
          "Triagem de e-mails, classificação de documentos e respostas assistidas.",
      },
    ],
    deliverables: [
      "Mapa de processos automatizáveis",
      "Fluxos implantados e monitorados",
      "Alertas de falha e painel de execução",
      "Treinamento do time operacional",
    ],
    technologies: ["Python", "n8n", "Playwright", "APIs REST", "Airflow", "Docker"],
  },
  {
    slug: "analise-de-dados",
    name: "Análise de Dados",
    tagline: "Dados organizados para decisões que geram resultado.",
    description:
      "Estruturamos os dados da sua empresa em pipelines confiáveis e dashboards claros, transformando planilhas dispersas em informação para decidir.",
    icon: "data",
    highlighted: true,
    features: [
      {
        title: "Pipelines de dados",
        description:
          "Coleta, limpeza e carga automatizada de dados com qualidade garantida.",
      },
      {
        title: "Dashboards e indicadores",
        description:
          "Painéis executivos e operacionais com métricas que importam.",
      },
      {
        title: "Data warehouse",
        description:
          "Modelagem dimensional para consolidar dados de várias fontes.",
      },
      {
        title: "Analytics avançado",
        description:
          "Coortes, funis, previsões e análises exploratórias sob demanda.",
      },
    ],
    deliverables: [
      "Diagnóstico de maturidade de dados",
      "Pipeline e data warehouse funcionando",
      "Dashboard publicado para o time",
      "Documentação e dicionário de dados",
    ],
    technologies: ["Python", "SQL", "dbt", "Airflow", "PostgreSQL", "Databricks", "Power BI", "Looker Studio"],
  },
  {
    slug: "sites-e-plataformas",
    name: "Sites e Plataformas",
    tagline: "Presença digital rápida, bonita e feita para converter.",
    description:
      "Criamos sites institucionais, landing pages e plataformas web com foco em performance, SEO e experiência do usuário, do design ao deploy.",
    icon: "web",
    features: [
      {
        title: "Sites institucionais",
        description:
          "Presença digital profissional com conteúdo, SEO e velocidade.",
      },
      {
        title: "Landing pages",
        description:
          "Páginas de campanha com integração a CRM e rastreamento de conversão.",
      },
      {
        title: "Plataformas sob medida",
        description:
          "Portais, áreas de membros e painéis administrativos seguros.",
      },
      {
        title: "E-commerce e integrações",
        description:
          "Lojas e catálogos conectados a pagamento, estoque e logística.",
      },
    ],
    deliverables: [
      "Design responsivo e identidade aplicada",
      "Site publicado com domínio e SSL",
      "SEO técnico e analytics configurados",
      "Treinamento para gestão de conteúdo",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Vercel"],
  },
  {
    slug: "aplicativos",
    name: "Aplicativos",
    tagline: "Seu negócio no bolso do cliente.",
    description:
      "Desenvolvemos aplicativos móveis para iOS e Android com foco em usabilidade, integração com o seu backend e publicação nas lojas.",
    icon: "mobile",
    features: [
      {
        title: "Apps iOS e Android",
        description:
          "Aplicativos nativos ou multiplataforma com uma única base de código.",
      },
      {
        title: "Integração com backend",
        description:
          "APIs seguras, autenticação, notificações e sincronização offline.",
      },
      {
        title: "Publicação nas lojas",
        description:
          "Processo completo de build, revisão e publicação na App Store e Play Store.",
      },
      {
        title: "Evolução e suporte",
        description:
          "Atualizações contínuas, correções e novas funcionalidades.",
      },
    ],
    deliverables: [
      "App publicado nas lojas",
      "Backend e API documentados",
      "Notificações e analytics",
      "Plano de evolução e suporte",
    ],
    technologies: ["React Native", "Expo", "Flutter", "Firebase", "FastAPI", "TypeScript"],
  },
];

export const featuredServices = services.filter((service) => service.highlighted);

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
