import { Container } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/Section";
import { siteConfig } from "@/lib/config";

export const metadata = {
  title: "Contato — Júlio César Santana",
  description: "Entre em contato com Júlio César Santana.",
};

export default function ContatoPage() {
  return (
    <main className="bg-[#050505]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.03),transparent_60%)]" />
        <div className="relative mx-auto max-w-[1600px] px-4 py-20 md:px-6 md:py-28 lg:px-8">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <SectionHeader
                title="Contato"
                subtitle="Tem um projeto de dados? Vamos construir juntos."
                tag="CONTACT"
              />

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex w-full items-center justify-between gap-4 rounded-xl border border-white/[0.06] bg-zinc-900/30 px-6 py-5 text-left transition-all hover:border-cyan-400/20 hover:bg-cyan-400/5"
                >
                  <div>
                    <p className="text-sm font-medium text-zinc-200">
                      Email
                    </p>
                    <p className="text-sm text-zinc-500">
                      {siteConfig.email}
                    </p>
                  </div>
                  <span className="text-sm text-cyan-400 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>

                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-between gap-4 rounded-xl border border-white/[0.06] bg-zinc-900/30 px-6 py-5 text-left transition-all hover:border-cyan-400/20 hover:bg-cyan-400/5"
                >
                  <div>
                    <p className="text-sm font-medium text-zinc-200">
                      GitHub
                    </p>
                    <p className="text-sm text-zinc-500">
                      github.com/DrkCde15
                    </p>
                  </div>
                  <span className="text-sm text-cyan-400 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-between gap-4 rounded-xl border border-white/[0.06] bg-zinc-900/30 px-6 py-5 text-left transition-all hover:border-cyan-400/20 hover:bg-cyan-400/5"
                >
                  <div>
                    <p className="text-sm font-medium text-zinc-200">
                      LinkedIn
                    </p>
                    <p className="text-sm text-zinc-500">
                      linkedin.com/in/julio-santana-ads
                    </p>
                  </div>
                  <span className="text-sm text-cyan-400 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </main>
  );
}
