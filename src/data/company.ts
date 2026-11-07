import { CompanyValue, ProcessStep } from "@/types";
import { companyConfig } from "@/lib/config";

export const company = companyConfig;

export const companyValues: CompanyValue[] = [
  {
    title: "Engenharia de verdade",
    description:
      "Nada de soluções frágeis. Construímos sistemas testados, documentados e prontos para escalar.",
  },
  {
    title: "Segurança desde a base",
    description:
      "Dados protegidos, acessos controlados e conformidade com a LGPD desde o primeiro commit. Segurança não é etapa final, é fundação.",
  },
  {
    title: "Clareza acima de tudo",
    description:
      "Escopo, prazos e decisões técnicas explicados sem jargão. Você acompanha cada etapa.",
  },
  {
    title: "Impacto mensurável",
    description:
      "Cada projeto nasce com métricas de sucesso. Se não gera resultado, não está pronto.",
  },
  {
    title: "Parceria de longo prazo",
    description:
      "Entregamos, medimos e evoluímos. Tecnologia vira ativo, não um projeto esquecido.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Diagnóstico",
    description:
      "Entendemos o problema, os dados e o objetivo do negócio antes de escrever qualquer linha de código.",
    deliverables: ["Reunião de descoberta", "Mapeamento de processos", "Escopo e estimativa"],
  },
  {
    title: "Arquitetura",
    description:
      "Desenhamos a solução com as ferramentas certas, priorizando segurança, custo e manutenção.",
    deliverables: ["Proposta técnica", "Protótipo navegável", "Plano de execução"],
  },
  {
    title: "Execução",
    description:
      "Sprints curtas com entregas visíveis, revisões contínuas, testes automatizados e revisões de segurança.",
    deliverables: ["Entregas semanais", "Ambiente de testes", "Revisões de segurança", "Documentação"],
  },
  {
    title: "Evolução",
    description:
      "Monitoramos resultados, ajustamos o que for necessário e evoluímos a solução com o negócio, mantendo segurança e conformidade.",
    deliverables: ["Métricas e relatórios", "Suporte contínuo", "Roadmap de melhorias"],
  },
];

export const differentiators = [
  {
    title: "Time multidisciplinar",
    description:
      "Especialistas em IA, dados, automação e produto trabalhando no mesmo projeto.",
  },
  {
    title: "Entrega ponta a ponta",
    description:
      "Da estratégia ao deploy: você não precisa coordenar vários fornecedores.",
  },
  {
    title: "Código que fica",
    description:
      "Repositório, documentação e treinamento para o seu time continuar sem dependência.",
  },
  {
    title: "Segurança em cada etapa",
    description:
      "Criptografia, controle de acesso e conformidade com a LGPD aplicados do primeiro commit ao deploy.",
  },
];
