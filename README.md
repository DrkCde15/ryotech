# RyoTech

Site institucional da RyoTech: tecnologia especializada em inteligência artificial, automação, análise de dados e desenvolvimento de sites e aplicativos.

## Requisitos

- Node.js 20+
- npm

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev    # servidor de desenvolvimento
npm run build  # build de produção
npm run lint   # ESLint
npm run start  # servidor de produção
```

## Estrutura

- `src/app/`: rotas (App Router)
- `src/components/`: componentes de UI, layout, cases, serviços e visuais
- `src/data/`: conteúdo institucional (serviços, cases, tecnologias)
- `src/lib/config.ts`: dados da empresa, navegação e contato
- `src/types/`: tipos compartilhados

## Antes do deploy

Atualize os placeholders em `src/lib/config.ts`:

- `url`: domínio oficial
- `email`: e-mail de contato
- `location`: localização/atendimento

O formulário de contato abre o cliente de e-mail do visitante. Para envio server-side, conecte um provedor (ex.: Resend) em uma route handler.
