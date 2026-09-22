import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail, MessageCircle } from "lucide-react";

import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { EMAIL, WHATSAPP_URL_GENERIC} from "@/lib/site";

const title = "Política de Privacidade | StudioCriandoWeb";
const description =
  "Saiba como a StudioCriandoWeb trata dados pessoais e protege sua privacidade conforme os princípios da LGPD.";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: PoliticaDePrivacidadePage,
});

function PoliticaDePrivacidadePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <header className="bg-soft-gradient">
          <div className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24">
            <p className="text-sm font-bold text-brand-cta">Privacidade e proteção de dados</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-brand-navy md:text-5xl">
              Política de Privacidade
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-navy-soft">
              Esta Política explica, de forma clara, como dados pessoais podem ser tratados durante
              sua interação com a StudioCriandoWeb e quais são os seus direitos.
            </p>
            <p className="mt-4 text-sm font-semibold text-brand-navy-soft">
              Última atualização: setembro de 2026
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24">
          <article className="space-y-12 text-base leading-8 text-brand-navy-soft">
            <section aria-labelledby="sobre-politica">
              <h2 id="sobre-politica" className="font-display text-2xl font-bold text-brand-navy">
                1. Sobre esta Política
              </h2>
              <p className="mt-4">
                A StudioCriandoWeb respeita sua privacidade e trata dados pessoais de acordo com a
                Lei Geral de Proteção de Dados Pessoais — LGPD (Lei nº 13.709/2018). Nossas práticas
                seguem princípios como transparência, finalidade, necessidade, segurança, prevenção
                e respeito aos direitos do titular.
              </p>
              <p className="mt-4">
                Esta Política se aplica às interações realizadas neste site e pelos canais de
                contato disponibilizados por ele.
              </p>
            </section>

            <section aria-labelledby="dados-coletados">
              <h2 id="dados-coletados" className="font-display text-2xl font-bold text-brand-navy">
                2. Quais dados podem ser coletados
              </h2>
              <p className="mt-4">Dependendo da forma de contato, podem ser tratados:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>nome e dados de contato informados pelo próprio visitante;</li>
                <li>informações sobre a empresa, os serviços e as necessidades do projeto;</li>
                <li>conteúdo de mensagens enviadas por e-mail, WhatsApp ou Instagram;</li>
                <li>
                  dados técnicos básicos gerados durante o acesso, quando necessários ao
                  funcionamento, à segurança e à estabilidade do site.
                </li>
              </ul>
              <p className="mt-4">
                O Quiz apresenta perguntas para indicar uma solução. As respostas orientam o
                resultado exibido e o direcionamento para a seção de soluções. Se o visitante
                decidir iniciar uma conversa pelo WhatsApp, os dados que fornecer nesse contato
                poderão ser utilizados para atendimento e continuidade da solicitação.
              </p>
            </section>

            <section aria-labelledby="uso-dados">
              <h2 id="uso-dados" className="font-display text-2xl font-bold text-brand-navy">
                3. Como os dados são utilizados
              </h2>
              <p className="mt-4">Os dados podem ser utilizados para:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>responder dúvidas e solicitações;</li>
                <li>realizar atendimento e contato pelos canais escolhidos pelo visitante;</li>
                <li>entender as necessidades do negócio;</li>
                <li>elaborar propostas e orçamentos conforme a finalidade informada;</li>
                <li>executar serviços contratados e cumprir obrigações relacionadas;</li>
                <li>proteger o site e prevenir usos indevidos.</li>
              </ul>
              <p className="mt-4">
                Os dados não devem ser usados para finalidades incompatíveis com aquelas informadas
                ao visitante.
              </p>
            </section>

            <section aria-labelledby="base-legal">
              <h2 id="base-legal" className="font-display text-2xl font-bold text-brand-navy">
                4. Base legal do tratamento
              </h2>
              <p className="mt-4">
                O tratamento pode ocorrer conforme as bases legais aplicáveis previstas na LGPD,
                como a execução de procedimentos preliminares solicitados pelo titular, a execução
                de contrato, o cumprimento de obrigação legal ou regulatória, o legítimo interesse e
                o consentimento, quando necessário. A base utilizada depende da finalidade e do
                contexto de cada tratamento.
              </p>
            </section>

            <section aria-labelledby="compartilhamento">
              <h2 id="compartilhamento" className="font-display text-2xl font-bold text-brand-navy">
                5. Compartilhamento de dados
              </h2>
              <p className="mt-4">
                Dados pessoais podem ser compartilhados apenas quando necessário para viabilizar o
                atendimento, a comunicação, a execução dos serviços, o funcionamento técnico do site
                ou o cumprimento de uma obrigação legal. Isso pode incluir plataformas escolhidas
                pelo próprio visitante, como WhatsApp, e prestadores que apoiem essas atividades.
              </p>
              <p className="mt-4">
                Também poderá haver compartilhamento com autoridades públicas quando exigido por lei
                ou por ordem válida. A StudioCriandoWeb não comercializa dados pessoais.
              </p>
            </section>

            <section aria-labelledby="cookies">
              <h2 id="cookies" className="font-display text-2xl font-bold text-brand-navy">
                6. Cookies e tecnologias semelhantes
              </h2>
              <p className="mt-4">
                Cookies e tecnologias semelhantes podem ser utilizados quando forem necessários ao
                funcionamento, à segurança ou à entrega adequada do site. A disponibilidade e a
                gestão desses recursos também podem depender do navegador, do dispositivo e da
                infraestrutura usada para acessar a página.
              </p>
              <p className="mt-4">
                O visitante pode consultar e ajustar as opções de cookies diretamente nas
                configurações do navegador. A restrição de recursos essenciais pode afetar o
                funcionamento de algumas partes do site.
              </p>
            </section>

            <section aria-labelledby="seguranca">
              <h2 id="seguranca" className="font-display text-2xl font-bold text-brand-navy">
                7. Armazenamento e segurança
              </h2>
              <p className="mt-4">
                São adotadas medidas técnicas e organizacionais adequadas para reduzir riscos de
                acesso não autorizado, perda, alteração, divulgação ou uso indevido de dados
                pessoais. Nenhum ambiente digital é totalmente livre de riscos, mas buscamos manter
                práticas de proteção compatíveis com a natureza das informações tratadas.
              </p>
            </section>

            <section aria-labelledby="retencao">
              <h2 id="retencao" className="font-display text-2xl font-bold text-brand-navy">
                8. Prazo de retenção
              </h2>
              <p className="mt-4">
                Os dados são mantidos pelo tempo necessário para cumprir a finalidade que justificou
                seu tratamento. Depois disso, podem ser eliminados ou anonimizados, salvo quando sua
                conservação for necessária para cumprir obrigação legal ou regulatória, exercer
                direitos em processos ou atender outra hipótese legítima prevista na LGPD.
              </p>
            </section>

            <section aria-labelledby="direitos">
              <h2 id="direitos" className="font-display text-2xl font-bold text-brand-navy">
                9. Direitos do titular
              </h2>
              <p className="mt-4">
                Nos termos da LGPD, o titular pode solicitar, quando aplicável:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>confirmação da existência de tratamento e acesso aos dados;</li>
                <li>correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>
                  anonimização, bloqueio ou eliminação de dados desnecessários ou irregulares;
                </li>
                <li>informações sobre compartilhamentos realizados;</li>
                <li>portabilidade, quando regulamentada e aplicável;</li>
                <li>revogação do consentimento e eliminação dos dados tratados com essa base;</li>
                <li>oposição ao tratamento realizado em desacordo com a LGPD;</li>
                <li>revisão de decisões tomadas unicamente com base em tratamento automatizado.</li>
              </ul>
              <p className="mt-4">
                Para proteger o próprio titular, poderá ser necessário confirmar sua identidade
                antes de atender a uma solicitação.
              </p>
            </section>

            <section aria-labelledby="contato-privacidade">
              <h2
                id="contato-privacidade"
                className="font-display text-2xl font-bold text-brand-navy"
              >
                10. Como entrar em contato
              </h2>
              <p className="mt-4">
                Para dúvidas sobre esta Política ou para exercer direitos relacionados a dados
                pessoais, utilize um dos canais já disponibilizados pela StudioCriandoWeb:
              </p>
              <div className="mt-6 flex flex-col items-start gap-4">
                <a
                  href={`mailto:${EMAIL}`}
                  aria-label={`Enviar e-mail sobre privacidade para ${EMAIL}`}
                  className="inline-flex items-center gap-3 font-semibold text-brand-cta transition-colors hover:text-brand-cta-hover"
                >
                  <Mail aria-hidden="true" className="h-5 w-5" />
                  {EMAIL}
                </a>
                <a
                  href={WHATSAPP_URL_GENERIC}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Falar sobre privacidade pelo primeiro WhatsApp"
                  className="inline-flex items-center gap-3 font-semibold text-brand-cta transition-colors hover:text-brand-cta-hover"
                >
                  <MessageCircle aria-hidden="true" className="h-5 w-5" />
                  WhatsApp: 65 9 9638-9833
                </a>
              </div>
            </section>

            <section aria-labelledby="alteracoes-politica">
              <h2
                id="alteracoes-politica"
                className="font-display text-2xl font-bold text-brand-navy"
              >
                11. Alterações desta Política
              </h2>
              <p className="mt-4">
                Esta Política poderá ser atualizada para refletir mudanças nas práticas do site, nos
                serviços ou na legislação. A versão vigente será sempre a publicada nesta página,
                com a respectiva data de atualização.
              </p>
            </section>
          </article>

          <div className="mt-16 border-t border-brand-sky-soft pt-8">
            <Link
              to="/"
              aria-label="Voltar para a página inicial da StudioCriandoWeb"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-cta px-6 py-3 font-bold text-white transition-colors hover:bg-brand-cta-hover"
            >
              <ArrowLeft aria-hidden="true" className="h-5 w-5" />
              Voltar ao site
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
