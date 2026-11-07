import type { Metadata } from "next";
import { Container } from "@/components/layout/Section";
import { companyConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do site da RyoTech.",
  alternates: { canonical: "/termos" },
  robots: { index: false, follow: true },
};

const sections = [
  {
    title: "1. Aceitação",
    body: "Ao acessar e utilizar este site, você concorda com os presentes Termos de Uso. Caso não concorde, recomendamos que não utilize o site.",
  },
  {
    title: "2. Finalidade do site",
    body: `Este site tem caráter informativo e comercial, apresentando os serviços da ${companyConfig.legalName}. As informações não constituem proposta comercial vinculante; propostas são formalizadas apenas por documento próprio.`,
  },
  {
    title: "3. Propriedade intelectual",
    body: "Textos, marcas, logotipos, layouts e demais conteúdos deste site pertencem à RyoTech ou são utilizados com autorização. É vedada a reprodução sem consentimento prévio.",
  },
  {
    title: "4. Uso adequado",
    body: "Você se compromete a não utilizar o site para fins ilícitos, para tentar obter acesso não autorizado a sistemas ou para prejudicar o funcionamento do serviço.",
  },
  {
    title: "5. Limitação de responsabilidade",
    body: "A RyoTech não se responsabiliza por indisponibilidades temporárias, falhas de terceiros ou por decisões tomadas exclusivamente com base no conteúdo informativo do site.",
  },
  {
    title: "6. Links externos",
    body: "O site pode conter links para páginas de terceiros. Não nos responsabilizamos pelo conteúdo ou pelas práticas de privacidade desses sites.",
  },
  {
    title: "7. Foro e legislação",
    body: "Estes termos são regidos pela legislação brasileira. Eventuais controvérsias serão resolvidas no foro da comarca da sede da empresa.",
  },
  {
    title: "8. Contato",
    body: `Dúvidas sobre estes termos podem ser enviadas para ${companyConfig.email}.`,
  },
];

export default function TermosPage() {
  return (
    <main className="bg-[#050505]">
      <Container className="max-w-3xl py-20 md:py-28">
        <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
          Legal
        </span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-50 md:text-5xl">
          Termos de Uso
        </h1>
        <p className="mt-4 text-sm text-zinc-500">
          Última atualização: novembro de 2026
        </p>
        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold text-zinc-100">
                {section.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
