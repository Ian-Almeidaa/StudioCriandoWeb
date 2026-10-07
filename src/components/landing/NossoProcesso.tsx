import { FileText, MessageCircle, Paintbrush, Rocket } from "lucide-react";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const etapas = [
  {
    numero: "01",
    titulo: "Conversa",
    descricao: "Entendemos seu negócio, seus serviços e o que você espera do site.",
    icone: MessageCircle,
  },
  {
    numero: "02",
    titulo: "Estratégia e conteúdo",
    descricao:
      "Organizamos as informações, definimos a estrutura e criamos os textos que comunicam o valor do seu negócio.",
    icone: FileText,
  },
  {
    numero: "03",
    titulo: "Design e desenvolvimento",
    descricao:
      "Criamos um visual alinhado à sua identidade e desenvolvemos o site para funcionar em celular, tablet e computador.",
    icone: Paintbrush,
  },
  {
    numero: "04",
    titulo: "Revisão e publicação",
    descricao:
      "Você acompanha, solicita os ajustes necessários e, após sua aprovação, colocamos o site no ar.",
    icone: Rocket,
  },
];

export function NossoProcesso() {
  return (
    <section id="como-funciona" className="bg-brand-surface scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-cta">
              Nosso processo
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-brand-navy md:text-4xl">
              Da conversa ao site no ar
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-navy-soft">
              Um caminho claro, com você acompanhando cada etapa.
            </p>
          </Reveal>
        </div>

        <RevealGroup
          as="ol"
          className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
          stagger={0.1}
        >
          {etapas.map((etapa, index) => {
            const Icone = etapa.icone;

            return (
              <RevealItem
                as="li"
                key={etapa.numero}
                className="relative grid min-w-0 grid-cols-[2.75rem_minmax(0,1fr)] gap-x-5 sm:block"
              >
                {index < etapas.length - 1 && (
                  <>
                    <span
                      aria-hidden="true"
                      className="absolute top-10 -bottom-10 left-5 border-l border-dashed border-brand-sky/50 sm:hidden"
                    />
                    <span
                      aria-hidden="true"
                      className={`absolute top-3 left-[6.75rem] h-16 w-[calc(100%-6.75rem+2rem)] rounded-t-[50%] border-t border-dashed border-brand-sky/50 ${index % 2 === 0 ? "hidden sm:block" : "hidden lg:block"}`}
                    />
                  </>
                )}
                <div className="relative z-10 row-span-2 flex flex-col items-center gap-3 self-start bg-brand-surface pb-2 sm:mb-5 sm:flex-row sm:bg-transparent sm:pb-0">
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-sky-soft font-display text-lg font-bold text-brand-cta"
                    aria-hidden="true"
                  >
                    {etapa.numero}
                  </span>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-brand-sky-soft bg-brand-surface text-brand-cta shadow-brand-soft sm:size-14">
                    <Icone className="size-6 sm:size-7" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-1 font-display text-lg font-bold leading-snug text-brand-navy sm:mt-0 sm:min-h-14">
                  {etapa.titulo}
                </h3>
                <p className="mt-2 leading-relaxed text-brand-navy-soft sm:mt-0">
                  {etapa.descricao}
                </p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
