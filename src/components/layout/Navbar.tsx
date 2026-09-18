"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, socialLinks } from "@/lib/config";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050505]/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 md:px-6 lg:px-8"
        aria-label="Navegação principal"
      >
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 border border-cyan-400/20">
            <span className="text-sm font-bold text-cyan-400">
              ⟁
            </span>
          </div>
          <span className="text-xl font-bold tracking-tight text-zinc-50">
            JCS
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100 hover:bg-white/[0.03]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 md:flex">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="rounded-md px-3 py-1.5 text-xs text-zinc-500 transition-colors hover:text-cyan-400 hover:bg-white/[0.03]"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-current opacity-50" />
                <span className="ml-1.5">{link.label}</span>
              </a>
            ))}
          </div>

          <button
            className="rounded-lg p-2 text-zinc-500 transition-colors hover:text-zinc-200 hover:bg-white/[0.03] md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-white/[0.06] bg-[#050505]/95 backdrop-blur-xl md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2.5 text-base text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.03]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-white/[0.06] pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-base text-zinc-400 hover:text-cyan-400 hover:bg-white/[0.03]"
                >
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#050505]">
      <div className="mx-auto max-w-[1600px] px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 border border-cyan-400/20">
                <span className="text-sm font-bold text-cyan-400">⟁</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-zinc-50">
                JCS
              </span>
            </div>
            <p className="mt-4 text-sm text-zinc-500">
              Data Engineer · Data Analyst
            </p>
            <p className="mt-2 text-sm text-zinc-600">
              Building reliable data systems.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 px-5 py-2.5 text-sm text-zinc-400 transition-all hover:border-cyan-400/30 hover:text-cyan-400 hover:bg-cyan-400/5"
                >
                  <span className="h-2 w-2 rounded-full bg-current opacity-60" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/[0.06] pt-8 text-center">
          <p className="text-xs text-zinc-700">
            © 2026 Júlio César Santana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
