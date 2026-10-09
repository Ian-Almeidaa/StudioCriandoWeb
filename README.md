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
- `/demo/elite` — MVP demonstrativo de aviação executiva, com navegação, frota e simulação de cotação
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

## Demonstração Elite

O projeto Elite substitui o modelo personalizado na página inicial e no portfólio completo. A demonstração foi adaptada de [Edudsprado/Elite](https://github.com/Edudsprado/Elite), preservando o visual e o vídeo de abertura. O formulário apenas simula uma cotação, sem enviar ou armazenar pedidos. As imagens `img-elite.jpg` e `preview-elite.jpg` são capturas da própria demonstração.

Os botões do portfólio abrem o [site completo do Elite](https://elite-studiocriandoweb.pages.dev/) em uma nova aba. Ele é hospedado separadamente no Cloudflare Pages, com publicação automática a partir da branch `main` de `Edudsprado/Elite`. A versão interna em `/demo/elite` permanece disponível.

## Demonstração P3TS

O P3TS substitui o template anterior de petshop na página inicial e no portfólio completo. Os botões abrem a [demonstração completa](https://p3ts-studiocriandoweb.pages.dev/) em uma nova aba, seguindo o padrão do Elite. As imagens `img-p3ts.jpg` e `preview-p3ts.jpg` são capturas da versão publicada.

A demonstração é hospedada separadamente no Cloudflare Pages, com publicação automática a partir da branch `main` de [Edudsprado/P3TS](https://github.com/Edudsprado/P3TS). Carrinho, finalização de compra, agendamento e inscrição na newsletter são simulações de interface; não processam compras nem enviam os dados preenchidos.
