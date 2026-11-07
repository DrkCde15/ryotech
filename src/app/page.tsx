import Link from "next/link";
import { HeroFlow } from "@/components/visual/HeroFlow";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CaseGrid } from "@/components/cases/CaseGrid";
import { Container, SectionHeader } from "@/components/layout/Section";
import { TechStack } from "@/components/visual/TechStack";
import { buttonClasses } from "@/components/ui/Button";
import { services } from "@/data/services";
import { featuredCases } from "@/data/cases";
import { differentiators, processSteps } from "@/data/company";
import { technologies } from "@/data/technologies";

const flowSteps = [
  { title: "Diagnóstico", description: "Entendemos o problema e os dados" },
  { title: "IA e automação", description: "Desenhamos a solução certa" },
  { title: "Software", description: "Sites, apps e integrações" },
  { title: "Resultado", description: "Métricas e evolução contínua" },
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-3xl" />

        <div className="relative mx-auto max-w-[1600px] px-4 py-20 md:px-6 md:py-28 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-zinc-300" />
              <span className="text-xs font-semibold tracking-wide text-zinc-300">
                Tecnologia sob medida para o seu negócio
              </span>
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-zinc-50 sm:text-6xl md:text-7xl lg:text-8xl">
              Tecnologia que
              <br />
              <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
                gera resultado
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base text-zinc-400 md:text-lg">
              IA, automação, análise de dados e desenvolvimento de sites e aplicativos.
              A RyoTech transforma problemas de negócio em soluções digitais que funcionam.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/servicos" className={buttonClasses("primary", "lg")}>
                Conhecer serviços
              </Link>
              <Link href="/contato" className={buttonClasses("accent", "lg")}>
                Falar com especialista
              </Link>
            </div>

            <div className="mt-16">
              <HeroFlow steps={flowSteps} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.08] bg-[#070707]">
        <Container className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Nossa visão
            </p>
            <p className="mt-5 text-2xl font-medium leading-relaxed text-zinc-200 md:text-3xl">
              Tecnologia só faz sentido quando resolve um problema real, é simples de
              usar e continua funcionando depois da entrega.
            </p>
            <Link
              href="/sobre"
              className="mt-8 inline-flex items-center text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
            >
              Conheça a RyoTech
              <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/[0.08] bg-[#050505]">
        <Container className="py-20 md:py-28">
          <SectionHeader
            title="O que fazemos"
            subtitle="Cinco frentes que se conectam para resolver o seu problema de ponta a ponta."
            tag="SERVIÇOS"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
            <div className="flex flex-col justify-center rounded-xl border border-dashed border-white/15 bg-transparent p-6 md:p-8">
              <p className="text-lg font-semibold text-zinc-200">
                Não sabe por onde começar?
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                Fazemos um diagnóstico gratuito e indicamos o caminho com maior impacto.
              </p>
              <Link
                href="/contato"
                className="mt-4 inline-flex items-center text-sm font-medium text-zinc-300 transition-colors hover:text-white"
              >
                Solicitar diagnóstico
                <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/[0.08] bg-[#070707]">
        <Container className="py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              title="Cases"
              subtitle="Projetos entregues com impacto mensurável."
              tag="RESULTADOS"
            />
            <Link
              href="/cases"
              className="mb-12 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100 md:mb-16"
            >
              Ver todos os cases →
            </Link>
          </div>
          <CaseGrid cases={featuredCases} />
        </Container>
      </section>

      <section className="border-b border-white/[0.08] bg-[#050505]">
        <Container className="py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeader
                title="Por que a RyoTech"
                subtitle="Um time enxuto, técnico e comprometido com o resultado do seu negócio."
                tag="DIFERENCIAIS"
              />
              <div className="space-y-4">
                {differentiators.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/[0.08] bg-zinc-900/30 p-5"
                  >
                    <h3 className="text-sm font-semibold text-zinc-100">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader
                title="Como trabalhamos"
                subtitle="Um processo claro, do diagnóstico à evolução."
                tag="PROCESSO"
              />
              <ol className="space-y-4">
                {processSteps.map((step, index) => (
                  <li
                    key={step.title}
                    className="flex gap-4 rounded-xl border border-white/[0.08] bg-zinc-900/30 p-5"
                  >
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-xs font-bold text-zinc-300">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-100">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-zinc-400">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/[0.08] bg-[#070707]">
        <Container className="py-20 md:py-28">
          <SectionHeader
            title="Tecnologias"
            subtitle="Ferramentas modernas, escolhidas pelo problema, não pela moda."
            tag="STACK"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {technologies.slice(0, 4).map((category) => (
              <div
                key={category.name}
                className="rounded-xl border border-white/[0.08] bg-zinc-900/30 p-6"
              >
                <h3 className="text-sm font-semibold text-zinc-200">
                  {category.name}
                </h3>
                <p className="mt-1 text-xs text-zinc-500">{category.description}</p>
                <div className="mt-4">
                  <TechStack items={category.items.map((name) => ({ name }))} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/tecnologias"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
            >
              Ver stack completa →
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-[#070707]">
        <Container className="py-20 md:py-28">
          <div className="rounded-2xl border border-white/[0.12] bg-gradient-to-b from-white/[0.05] to-transparent p-8 text-center md:p-14">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-50 md:text-4xl">
              Pronto para tirar a ideia do papel?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400 md:text-base">
              Conte o que você precisa. Respondemos em até 24 horas com um caminho claro
              para o seu projeto.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contato" className={buttonClasses("primary", "lg")}>
                Iniciar conversa
              </Link>
              <Link href="/cases" className={buttonClasses("accent", "lg")}>
                Ver cases
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
