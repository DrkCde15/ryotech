"use client";

import { useState } from "react";
import { buttonClasses } from "@/components/ui/Button";
import { companyConfig } from "@/lib/config";
import { services } from "@/data/services";

const inputClasses =
  "w-full rounded-lg border border-white/[0.12] bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/20";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Contato pelo site: ${name || "Novo contato"}`);
    const body = encodeURIComponent(
      [
        `Nome: ${name}`,
        `E-mail: ${email}`,
        `Empresa: ${company || "Não informado"}`,
        `Serviço de interesse: ${service || "Não informado"}`,
        "",
        "Mensagem:",
        message,
      ].join("\n")
    );

    window.location.href = `mailto:${companyConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-zinc-400">
            Nome *
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Seu nome"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-zinc-400">
            E-mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="voce@empresa.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1.5 block text-xs font-medium text-zinc-400">
            Empresa
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            placeholder="Nome da empresa"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-xs font-medium text-zinc-400">
            Serviço de interesse
          </label>
          <select id="service" name="service" className={inputClasses} defaultValue="">
            <option value="">Selecione um serviço</option>
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
            <option value="Outro">Outro</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-zinc-400">
          Mensagem *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Conte brevemente o seu desafio ou projeto."
          className={`${inputClasses} resize-y`}
        />
      </div>

      <button type="submit" className={buttonClasses("primary", "lg", "w-full")}>
        Enviar mensagem
      </button>

      <p className="text-xs text-zinc-500">
        Ao enviar, seu cliente de e-mail será aberto com a mensagem preenchida.
        {sent && " Se nada abrir, escreva para "}
        {sent && (
          <a href={`mailto:${companyConfig.email}`} className="text-zinc-300 underline">
            {companyConfig.email}
          </a>
        )}
        {sent && "."}
      </p>
    </form>
  );
}
