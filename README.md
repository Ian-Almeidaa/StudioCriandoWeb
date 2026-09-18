# StudioCriandoWeb
 
Landing page institucional da StudioCriandoWeb, agência de criação de sites para pequenos negócios.
 
## Stack
 
- [TanStack Start](https://tanstack.com/start) (React SSR)
- React 19 + TypeScript
- Tailwind CSS v4
- Deploy alvo: Cloudflare (via preset `cloudflare` do Nitro)
## Estrutura de páginas
 
- `/` — página inicial (hero, como funciona, portfólio resumido, planos, FAQ)
- `/portfolio` — portfólio completo de projetos
- `/quem-somos` — página institucional sobre a agência
- `/politica-de-privacidade` — política de privacidade (LGPD)
## Rodando localmente
 
Requer Node.js e npm instalados.
 
```sh
git clone <url-deste-repositorio>
cd <nome-da-pasta>
npm install
npm run dev
```
 
## Scripts disponíveis
 
| Comando | O que faz |
|---|---|
| `npm run dev` | Sobe o servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run build:dev` | Build em modo desenvolvimento |
| `npm run preview` | Pré-visualiza o build de produção |
| `npm run lint` | Roda o ESLint |
| `npm run format` | Formata o código com Prettier |