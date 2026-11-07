# RyoTech: Site Institucional

Site institucional da RyoTech, empresa de tecnologia especializada em inteligência artificial, automação, análise de dados e desenvolvimento de sites e aplicativos.

## Stack

- Next.js 16 (App Router, Turbopack, React Compiler)
- React 19 + TypeScript (strict)
- Tailwind CSS 4 (`@tailwindcss/postcss`)
- lucide-react 1.47.0 (apenas `Menu`/`X` sem sufixo; usar SVGs inline para novos ícones)
- Fontes Inter + Geist Mono
- ESLint 9

## Arquitetura

- Server Components por padrão; Client Components marcados com `"use client"`.
- Conteúdo data-driven em `src/data/` e tipos em `src/types/`.
- Componentes reutilizáveis em `src/components/`.
- Paleta institucional: preto (`#050505`), prata (`zinc`) e branco.

## Rotas

| Rota | Descrição |
| --- | --- |
| `/` | Home institucional |
| `/servicos` | Lista de serviços |
| `/servicos/[slug]` | Detalhe do serviço (SSG) |
| `/cases` | Lista de cases |
| `/cases/[slug]` | Detalhe do case (SSG) |
| `/tecnologias` | Stack de tecnologia |
| `/processo` | Processo de trabalho |
| `/sobre` | Sobre a empresa |
| `/contato` | Contato + formulário |
| `/privacidade` | Política de privacidade |
| `/termos` | Termos de uso |
| `/sitemap.xml` | Sitemap gerado por `src/app/sitemap.ts` |
| `/robots.txt` | Robots gerado por `src/app/robots.ts` |
| `/opengraph-image` | Imagem OpenGraph gerada dinamicamente |

## Dados

- `src/data/company.ts`: valores, processo, diferenciais
- `src/data/services.ts`: serviços (fonte das páginas `/servicos`)
- `src/data/cases.ts`: cases (fonte das páginas `/cases`)
- `src/data/technologies.ts`: categorias de tecnologia

## Configuração

- `src/lib/config.ts`: nome, e-mail, Instagram, URL e links de navegação.
- Placeholders a substituir antes do deploy: `url` e `location`.

## Comandos

```bash
npm run dev    # servidor de desenvolvimento
npm run build  # build de produção
npm run lint   # ESLint
npm run start  # servidor de produção
```
