import type { Metadata } from "next";
import { Container } from "@/components/layout/Section";
import { companyConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como a RyoTech coleta, usa e protege os seus dados.",
  alternates: { canonical: "/privacidade" },
  robots: { index: false, follow: true },
};

const sections = [
  {
    title: "1. Quais dados coletamos",
    body: "Coletamos apenas os dados fornecidos voluntariamente por você ao entrar em contato: nome, e-mail, empresa, serviço de interesse e o conteúdo da mensagem. Também podemos receber dados técnicos anônimos de navegação, como páginas visitadas e tipo de dispositivo.",
  },
  {
    title: "2. Como usamos os dados",
    body: "Utilizamos os dados para responder à sua solicitação, elaborar propostas comerciais, manter contato sobre o projeto e melhorar o nosso site. Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing.",
  },
  {
    title: "3. Base legal e LGPD",
    body: "O tratamento de dados segue a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). A base legal é o seu consentimento ou o legítimo interesse da RyoTech em responder a solicitações comerciais.",
  },
  {
    title: "4. Armazenamento e segurança",
    body: "Adotamos medidas técnicas e administrativas para proteger seus dados contra acesso não autorizado, perda ou alteração. Os dados são mantidos apenas pelo tempo necessário à finalidade para a qual foram coletados.",
  },
  {
    title: "5. Seus direitos",
    body: "Você pode solicitar a confirmação, o acesso, a correção, a portabilidade ou a exclusão dos seus dados. Para exercer qualquer direito, envie um e-mail para o endereço de contato indicado nesta página.",
  },
  {
    title: "6. Cookies",
    body: "O site pode utilizar cookies essenciais para funcionamento e cookies de análise para entender o uso das páginas. Você pode bloquear cookies nas configurações do seu navegador.",
  },
  {
    title: "7. Contato do responsável",
    body: `Para dúvidas sobre esta política ou sobre o tratamento de dados, escreva para ${companyConfig.email}.`,
  },
];

export default function PrivacidadePage() {
  return (
    <main className="bg-[#050505]">
      <Container className="max-w-3xl py-20 md:py-28">
        <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
          Legal
        </span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-50 md:text-5xl">
          Política de Privacidade
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
