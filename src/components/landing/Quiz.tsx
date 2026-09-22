import { useEffect, useState } from "react";

import { Reveal } from "@/components/motion/Reveal";

type TipoServico = "Landing Page" | "Site Institucional";
type SituacaoSite = "apresentar" | "divulgar";
type Necessidade = "varias-informacoes" | "informacao-principal";
type Prazo = "empresa-completa" | "pagina-direta";

type RespostasQuiz = {
  site: SituacaoSite | null;
  necessidade: Necessidade | null;
  prazo: Prazo | null;
};

type ResultadoQuiz = {
  tipoServico: TipoServico;
};

type Opcao<T> = { label: string; value: T };

const WHATSAPP_NUMBER = "65996389833";

const perguntaSite: { id: "site"; pergunta: string; opcoes: Opcao<SituacaoSite>[] } = {
  id: "site",
  pergunta: "O que você quer que seu site faça?",
  opcoes: [
    { label: "🏢 Mostrar minha empresa, meus serviços e passar confiança", value: "apresentar" },
    { label: "🎯 Divulgar um serviço ou produto específico e trazer clientes", value: "divulgar" },
  ],
};

const perguntaNecessidade: { id: "necessidade"; pergunta: string; opcoes: Opcao<Necessidade>[] } = {
  id: "necessidade",
  pergunta: "Quando alguém entrar no seu site, o que você gostaria que ela encontrasse?",
  opcoes: [
    {
      label: "📋 Várias informações sobre minha empresa e meus serviços",
      value: "varias-informacoes",
    },
    {
      label: "👉 Uma informação principal e um botão para chamar no WhatsApp",
      value: "informacao-principal",
    },
  ],
};

const perguntaPrazo: { id: "prazo"; pergunta: string; opcoes: Opcao<Prazo>[] } = {
  id: "prazo",
  pergunta: "Qual dessas opções parece mais com o que você precisa hoje?",
  opcoes: [
    { label: "🌐 Quero apresentar minha empresa de forma completa", value: "empresa-completa" },
    {
      label: "🚀 Quero uma página simples, direta e focada em conseguir clientes",
      value: "pagina-direta",
    },
  ],
};

function calcularResultado(respostas: RespostasQuiz): ResultadoQuiz | null {
  if (!respostas.site || !respostas.necessidade || !respostas.prazo) return null;

  const tipoServico: TipoServico =
    respostas.necessidade === "varias-informacoes" && respostas.prazo === "empresa-completa"
      ? "Site Institucional"
      : "Landing Page";

  return { tipoServico };
}

function justificativaPrincipal(resultado: ResultadoQuiz): string {
  const { tipoServico } = resultado;

  if (tipoServico === "Landing Page") {
    return "Uma página simples e direcionada para apresentar uma oferta principal e facilitar o contato pelo WhatsApp.";
  }

  return "Um site completo para apresentar sua empresa, seus serviços e as informações importantes para seus clientes.";
}

function mensagemWhatsApp(resultado: ResultadoQuiz): string {
  return `Olá! Fiz o quiz no site e o resultado foi ${resultado.tipoServico}. Pode me ajudar?`;
}

function linkWhatsApp(mensagem: string): string {
  return `https://wa.me/55${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
}

export function Quiz() {
  const [passo, setPasso] = useState(0);
  const [respostas, setRespostas] = useState<RespostasQuiz>({
    site: null,
    necessidade: null,
    prazo: null,
  });

  const totalPassos = 3;
  const finalizado = passo >= totalPassos;
  const resultado = finalizado ? calcularResultado(respostas) : null;
  const progresso = Math.round(((finalizado ? totalPassos : passo) / totalPassos) * 100);

  useEffect(() => {
    if (finalizado && resultado && typeof window !== "undefined") {
      window.location.hash = `#planos?servico=${encodeURIComponent(resultado.tipoServico)}`;
    }
  }, [finalizado, resultado]);

  function escolherSite(valor: SituacaoSite) {
    setRespostas((r) => ({ ...r, site: valor, necessidade: null, prazo: null }));
  }

  function escolherNecessidade(valor: Necessidade) {
    setRespostas((r) => ({ ...r, necessidade: valor, prazo: null }));
  }

  function escolherPrazo(valor: Prazo) {
    setRespostas((r) => ({ ...r, prazo: valor }));
  }

  function avancar() {
    setPasso((p) => p + 1);
  }

  function voltar() {
    setPasso((p) => p - 1);
  }

  function reiniciar() {
    setRespostas({ site: null, necessidade: null, prazo: null });
    setPasso(0);
    if (typeof window !== "undefined") {
      window.location.hash = "#quiz";
    }
  }

  const perguntaAtual =
    passo === 0 ? perguntaSite : passo === 1 ? perguntaNecessidade : perguntaPrazo;

  const respostaAtual: string | null =
    passo === 0 ? respostas.site : passo === 1 ? respostas.necessidade : respostas.prazo;

  const podeAvancar = respostaAtual !== null;

  return (
    <section id="quiz" className="bg-brand-surface">
      <Reveal className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-24">
        <h2 className="font-display text-3xl font-bold text-brand-navy md:text-4xl">
          Qual solução combina com o seu negócio?
        </h2>
        <p className="mt-4 text-lg text-brand-navy-soft">
          Vamos descobrir juntos qual opção faz mais sentido para você. Responda 3 perguntas rápidas
          pensando no que sua empresa precisa hoje. Não existe resposta certa ou errada. 😊
        </p>

        <div className="mt-8 rounded-3xl border border-brand-sky-soft bg-card p-8 shadow-brand-soft">
          <div
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progresso}
            aria-label="Progresso do quiz"
            className="h-2 w-full overflow-hidden rounded-full bg-brand-sky-soft"
          >
            <div
              className="h-full rounded-full bg-brand-cta transition-all duration-300 ease-out"
              style={{ width: `${progresso}%` }}
            />
          </div>

          {!finalizado ? (
            <div className="mt-8">
              <p className="text-sm font-semibold text-brand-cta">
                Pergunta {passo + 1} de {totalPassos}
              </p>
              <fieldset className="mt-4">
                <legend className="text-xl font-bold text-brand-navy">
                  {perguntaAtual.pergunta}
                </legend>
                <div className="mt-6 flex flex-col gap-4">
                  {perguntaAtual.opcoes.map((opcao) => (
                    <label
                      key={opcao.label}
                      className="flex cursor-pointer items-center gap-4 rounded-2xl border border-brand-sky-soft px-6 py-4 text-brand-navy transition-colors duration-200 has-[:checked]:border-brand-cta has-[:checked]:bg-brand-sky-soft"
                    >
                      <input
                        type="radio"
                        name={perguntaAtual.id}
                        value={opcao.label}
                        checked={respostaAtual === opcao.value}
                        onChange={() => {
                          if (passo === 0) escolherSite(opcao.value as SituacaoSite);
                          else if (passo === 1) escolherNecessidade(opcao.value as Necessidade);
                          else escolherPrazo(opcao.value as Prazo);
                        }}
                        className="h-5 w-5 shrink-0 accent-brand-cta"
                      />
                      <span>{opcao.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-8 flex flex-wrap gap-4">
                {passo > 0 && (
                  <button
                    type="button"
                    onClick={voltar}
                    className="rounded-xl border border-brand-cta px-6 py-3 font-bold text-brand-cta transition-colors duration-200"
                  >
                    Voltar
                  </button>
                )}
                <button
                  type="button"
                  disabled={!podeAvancar}
                  onClick={avancar}
                  className="rounded-xl bg-brand-cta px-6 py-3 font-bold text-white transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {passo === totalPassos - 1 ? "Ver serviço indicado" : "Próxima"}
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-8" aria-live="polite">
              <p className="text-sm font-semibold text-brand-cta">Serviço indicado</p>
              <p className="mt-2 font-display text-3xl font-extrabold text-brand-navy">
                {resultado?.tipoServico}
              </p>
              <p className="mt-4 text-brand-navy-soft">
                {resultado ? justificativaPrincipal(resultado) : ""}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={resultado ? linkWhatsApp(mensagemWhatsApp(resultado)) : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-brand-cta px-6 py-3 font-bold text-white transition-colors duration-200"
                >
                  Falar no WhatsApp
                </a>
                <button
                  type="button"
                  onClick={reiniciar}
                  className="rounded-xl border border-brand-cta px-6 py-3 font-bold text-brand-cta transition-colors duration-200"
                >
                  Refazer o quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
