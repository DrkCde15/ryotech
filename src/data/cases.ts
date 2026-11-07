import { CaseStudy } from "@/types";

export const cases: CaseStudy[] = [
  {
    slug: "autoassist",
    client: "AutoAssist",
    segment: "Automotivo",
    title: "AutoAssist: consultor automotivo com IA",
    shortDescription:
      "Plataforma web que usa inteligência artificial para analisar sintomas do carro por texto, foto ou áudio e orientar o motorista.",
    description:
      "O AutoAssist é um consultor automotivo inteligente. O usuário descreve o problema do veículo por texto, envia uma foto ou dita por voz, e a IA apresenta possíveis causas, nível de risco e o próximo passo, ajudando a conversar melhor com um profissional.",
    challenge:
      "Motoristas costumam ignorar sinais pequenos por não saberem o que significam e acabam descobrindo problemas graves apenas quando o reparo já ficou caro. Faltava uma ferramenta simples que traduzisse sintomas em hipóteses compreensíveis, sem substituir o mecânico.",
    solution:
      "Construímos uma plataforma completa com análise de sintomas por IA multimodal, histórico de diagnósticos, gestão do veículo, consulta à tabela FIPE, geração de laudo de revenda em PDF, alertas de manutenção e planos de assinatura. A IA atua como apoio: apresenta hipóteses e orienta o usuário, que confirma o diagnóstico com um profissional.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "IA multimodal", "Render"],
    categories: ["Inteligência Artificial", "Sites e Plataformas"],
    featured: true,
    demo: "https://autoassist-l9lr.onrender.com/",
    github: "https://github.com/DrkCde15/AutoAssist",
    results: [
      { label: "canais de análise", value: "Texto, foto e áudio" },
      { label: "consulta de valor", value: "Tabela FIPE" },
      { label: "planos de assinatura", value: "4" },
    ],
    architecture: {
      title: "Arquitetura da plataforma",
      description: "Aplicação web com IA multimodal, gestão do veículo e assinaturas.",
      steps: [
        "Interface web responsiva com cadastro, login e planos",
        "Análise de sintomas por IA a partir de texto, foto e áudio",
        "Dashboard com histórico, alertas e calendário preventivo",
        "Consulta à tabela FIPE e geração de laudo em PDF",
        "Vínculo com oficinas parceiras mediante consentimento",
      ],
    },
    pipeline: {
      title: "Fluxo de análise do veículo",
      steps: [
        { name: "Entrada", description: "Texto, foto ou áudio do sintoma" },
        { name: "Análise", description: "IA multimodal processa os sinais" },
        { name: "Hipóteses", description: "Possíveis causas e nível de risco" },
        { name: "Orientação", description: "Próximo passo e histórico do veículo" },
      ],
    },
  },
];

export const featuredCases = cases.filter((item) => item.featured);

export const caseCategories = Array.from(new Set(cases.flatMap((item) => item.categories)));

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((item) => item.slug === slug);
}
