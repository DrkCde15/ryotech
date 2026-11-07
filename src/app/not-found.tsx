import Link from "next/link";
import { buttonClasses } from "@/components/ui/Button";
import { company } from "@/data/company";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
          Erro 404
        </p>
        <h1 className="mt-3 text-6xl font-bold text-zinc-200">404</h1>
        <p className="mt-4 text-lg text-zinc-400">
          A página que você procura não existe.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className={buttonClasses("primary")}>
            Voltar para o início
          </Link>
          <a href={`mailto:${company.email}`} className={buttonClasses("accent")}>
            Falar com a RyoTech
          </a>
        </div>
      </div>
    </main>
  );
}
