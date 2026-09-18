import { Container } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/Section";
import { experience } from "@/data/experience";

export const metadata = {
  title: "Experiência — Júlio César Santana",
  description: "Trajetória profissional em engenharia e análise de dados.",
};

export default function ExperienciaPage() {
  return (
    <main className="bg-[#050505]">
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.02),transparent_60%)]" />
        <div className="relative mx-auto max-w-[1600px] px-4 py-20 md:px-6 md:py-28 lg:px-8">
          <Container>
            <SectionHeader
              title="Experiência"
              subtitle="Minha trajetória profissional em engenharia e análise de dados."
              tag="CAREER"
            />

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-800 md:left-1/2 md:-translate-x-px" />

              <div className="space-y-12">
                {experience.map((item) => (
                  <div
                    key={item.id}
                    className="relative flex flex-col md:flex-row"
                  >
                    <div className="md:w-1/2 md:pr-12 md:text-right">
                      <div className="inline-flex items-center gap-2 rounded-lg bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400 md:ml-auto">
                        {item.role.period}
                      </div>
                      <h3 className="mt-3 text-xl font-bold text-zinc-50">
                        {item.role.role}
                      </h3>
                      <p className="mt-1 text-sm text-cyan-400">
                        {item.role.company}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                        {item.role.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2 md:justify-end">
                        {item.role.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-white/[0.06] px-2 py-1 text-xs text-zinc-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="hidden md:flex md:w-1/2 md:pl-12">
                      <div className="relative">
                        <div className="absolute -left-[22px] top-2 h-4 w-4 rounded-full border-2 border-cyan-400 bg-[#050505]" />
                        <ul className="space-y-3 pl-6">
                          {item.role.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-cyan-400" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </section>
    </main>
  );
}
