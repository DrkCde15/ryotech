import type { Metadata } from "next";
import { Container, SectionHeader } from "@/components/layout/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { companyConfig, socialLinks } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a RyoTech. Respondemos em até 24 horas com os próximos passos do seu projeto.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <main className="bg-[#050505]">
      <section className="relative border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]" />
        <Container className="relative py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeader
                as="h1"
                title="Contato"
                subtitle="Conte o seu desafio. Respondemos em até 24 horas com um caminho claro."
                tag="FALE CONOSCO"
              />

              <div className="space-y-4">
                <a
                  href={`mailto:${companyConfig.email}`}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-zinc-900/30 px-6 py-5 transition-all hover:border-white/25 hover:bg-white/[0.03]"
                >
                  <div>
                    <p className="text-sm font-medium text-zinc-200">E-mail</p>
                    <p className="text-sm text-zinc-500">{companyConfig.email}</p>
                  </div>
                  <span aria-hidden="true" className="text-sm text-zinc-400 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>

                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-zinc-900/30 px-6 py-5 transition-all hover:border-white/25 hover:bg-white/[0.03]"
                  >
                    <div>
                      <p className="text-sm font-medium text-zinc-200">{link.label}</p>
                      <p className="text-sm text-zinc-500">@ryote.ch</p>
                    </div>
                    <span aria-hidden="true" className="text-sm text-zinc-400 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                ))}

                <div className="rounded-xl border border-white/[0.08] bg-zinc-900/30 px-6 py-5">
                  <p className="text-sm font-medium text-zinc-200">Localização</p>
                  <p className="text-sm text-zinc-500">{companyConfig.location}</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-zinc-900/30 p-6 md:p-8">
              <h2 className="text-lg font-semibold text-zinc-100">
                Envie sua mensagem
              </h2>
              <p className="mt-1 text-sm text-zinc-500">
                Preencha os campos e retornaremos o quanto antes.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
