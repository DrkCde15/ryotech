import Image from "next/image";
import Link from "next/link";
import { companyConfig, footerLinks, socialLinks } from "@/lib/config";
import { services } from "@/data/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#050505]">
      <div className="mx-auto max-w-[1600px] px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5" aria-label={`${companyConfig.name} | Home`}>
              <Image
                src="/ryotech-mark.png"
                alt=""
                width={340}
                height={264}
                className="h-9 w-auto"
              />
              <span className="text-xl font-semibold tracking-tight text-zinc-50">
                {companyConfig.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              {companyConfig.shortDescription}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <a
                href={`mailto:${companyConfig.email}`}
                className="text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {companyConfig.email}
              </a>
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition-colors hover:text-zinc-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Serviços
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Empresa
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.08] pt-8 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {companyConfig.legalName}. Todos os direitos reservados.
          </p>
          <p>{companyConfig.location}</p>
        </div>
      </div>
    </footer>
  );
}
