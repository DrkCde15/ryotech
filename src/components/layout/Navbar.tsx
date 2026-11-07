"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { companyConfig, navLinks } from "@/lib/config";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#050505]/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 md:px-6 lg:px-8"
        aria-label="Navegação principal"
      >
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${companyConfig.name} | Home`}>
          <Image
            src="/ryotech-mark.png"
            alt=""
            width={340}
            height={264}
            className="h-9 w-auto"
            priority
          />
          <span className="text-xl font-semibold tracking-tight text-zinc-50">
            {companyConfig.name}
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`rounded-md px-3 py-2 text-sm transition-colors ${
                isActive(link.href)
                  ? "bg-white/[0.06] text-zinc-100"
                  : "text-zinc-400 hover:bg-white/[0.03] hover:text-zinc-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contato"
            className="hidden rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-white md:inline-flex"
          >
            Fale conosco
          </Link>

          <button
            type="button"
            className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/[0.03] hover:text-zinc-200 md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="menu-mobile"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          id="menu-mobile"
          className="border-t border-white/[0.08] bg-[#050505]/95 backdrop-blur-xl md:hidden"
        >
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`block rounded-lg px-3 py-2.5 text-base ${
                  isActive(link.href)
                    ? "bg-white/[0.06] text-zinc-100"
                    : "text-zinc-400 hover:bg-white/[0.03] hover:text-zinc-100"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 space-y-2 border-t border-white/[0.08] pt-3">
              <Link
                href="/contato"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg bg-zinc-100 px-3 py-2.5 text-center text-base font-medium text-black"
              >
                Fale conosco
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
