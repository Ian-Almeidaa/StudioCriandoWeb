import { Check } from "lucide-react";
import { useEffect, useState } from "react";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { WHATSAPP_URL } from "@/lib/site";

const solucoes = [
  {
    titulo: "🌐 SITE INSTITUCIONAL",
    servico: "Site Institucional",
    pergunta: "Precisa apresentar sua empresa por completo?",
    descricao:
      "O Site Institucional é ideal para empresas que precisam de mais espaço para apresentar sua história, serviços, equipe, informações e diferenciais.",
    indicadoPara: [
      "Sua empresa oferece vários serviços",
      "Precisa apresentar diferentes áreas do negócio",
      "Quer ter páginas específicas para cada serviço",
      "Precisa transmitir uma presença mais completa e institucional",
      "Quer construir uma estrutura digital para acompanhar o crescimento da empresa",
    ],
    entrega:
      "Um site completo e personalizado, organizado em múltiplas páginas, com estratégia, copy, design e experiência pensados para o seu negócio.",
    tagline: "\n",
    cta: "Quero um Site Institucional",
    destaque: true,
  },
  {
    titulo: "🚀 LANDING PAGE",
    servico: "Landing Page",
    pergunta: "Precisa de uma página focada em um objetivo?",
    descricao:
      "A Landing Page é ideal para quem quer apresentar um serviço, divulgar uma oferta ou transformar visitantes em contatos, sem precisar de várias páginas.",
    indicadoPara: [
      "Seu negócio possui um serviço ou oferta principal",
      "Você quer direcionar o cliente para o WhatsApp",
      "Precisa de uma página objetiva para divulgação",
      "Quer uma presença profissional sem uma estrutura extensa",
    ],
    entrega:
      "Uma página personalizada com estratégia, copy, design e estrutura pensada para levar o visitante à ação.",
    tagline: "→ Ideal para quem precisa de foco.",
    cta: "Quero uma Landing Page",
    destaque: false,
  },
];

export function Planos() {
  const [servicoIndicado, setServicoIndicado] = useState<string | null>(null);

  useEffect(() => {
    function lerServicoIndicado() {
      const searchParams = new URLSearchParams(window.location.search);
      let servico = searchParams.get("servico");
      if (!servico && window.location.hash.includes("?")) {
        const hashParams = new URLSearchParams(window.location.hash.split("?")[1]);
        servico = hashParams.get("servico");
      }
      setServicoIndicado(servico);
    }

    lerServicoIndicado();
    window.addEventListener("hashchange", lerServicoIndicado);
    return () => window.removeEventListener("hashchange", lerServicoIndicado);
  }, []);

  return (
    <section id="planos" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-brand-navy md:text-4xl">
            Encontre a solução certa para o seu negócio
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-brand-navy-soft">
            Cada empresa está em um momento diferente. Escolha a estrutura que melhor representa o
            que você precisa hoje.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-8 lg:grid-cols-2" stagger={0.12}>
          {solucoes.map((solucao) => {
            const indicado = servicoIndicado === solucao.servico;
            return (
              <RevealItem key={solucao.servico} className="h-full">
                <article
                  className={`hover-card relative flex h-full flex-col rounded-3xl border bg-card p-8 ${
                    solucao.destaque
                      ? "border-brand-cta shadow-brand-card"
                      : indicado
                        ? "border-brand-cta shadow-brand-card ring-2 ring-brand-cta"
                        : "border-brand-sky-soft shadow-brand-soft"
                  }`}
                >
                  {solucao.destaque ? (
                    <p className="absolute top-0 left-8 z-10 w-fit -translate-y-1/2 rounded-full bg-brand-cta px-4 py-1 text-xs font-bold tracking-wide text-white uppercase">
                      Mais popular
                    </p>
                  ) : null}

                  <div className="flex flex-1 flex-col">
                    <h3 className="text-2xl font-bold text-brand-navy">{solucao.titulo}</h3>
                    <p className="mt-2 text-xl font-semibold text-brand-navy">{solucao.pergunta}</p>
                    <p className="mt-4 text-brand-navy-soft">{solucao.descricao}</p>

                    <div className="mt-6">
                      <p className="font-bold text-brand-navy">É para você se:</p>
                      <ul className="mt-3 flex flex-col gap-3">
                        {solucao.indicadoPara.map((item) => (
                          <li key={item} className="flex gap-3 text-brand-navy-soft">
                            <Check
                              className="mt-0.5 h-5 w-5 shrink-0 text-brand-cta"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-brand-sky-soft bg-brand-surface p-6 lg:min-h-[200px]">
                    <p className="font-bold text-brand-navy">O que você recebe</p>
                    <p className="mt-2 text-brand-navy-soft">{solucao.entrega}</p>
                    <p className="mt-3 font-semibold text-brand-cta">{solucao.tagline}</p>
                  </div>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Solicitar ${solucao.servico} pelo WhatsApp`}
                    className={`mt-8 inline-flex h-12 items-center justify-center rounded-xl px-6 font-bold transition-colors ${
                      solucao.destaque
                        ? "bg-brand-cta text-white hover:bg-brand-cta-hover"
                        : "border border-brand-cta text-brand-cta hover:bg-brand-sky-soft"
                    }`}
                  >
                    {solucao.cta}
                  </a>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal className="mt-12">
          <div className="rounded-3xl border border-brand-sky-soft bg-card p-8 text-center shadow-brand-soft md:p-12">
            <h3 className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
              Ainda não sabe qual escolher?
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-navy-soft">
              Conte o que sua empresa faz e o que você pretende alcançar. Nós analisamos sua
              necessidade e indicamos a estrutura mais adequada.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com um especialista pelo WhatsApp"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-brand-cta px-6 py-3 font-bold text-white transition-colors hover:bg-brand-cta-hover"
            >
              Falar com um especialista →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
