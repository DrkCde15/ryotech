import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
  description: "A página solicitada não foi encontrada.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-1 items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-zinc-700">404</h1>
        <p className="mt-4 text-lg text-zinc-500">
          Página não encontrada.
        </p>
      </div>
    </main>
  );
}
