import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const etapas = [
  {
    numero: "01",
    titulo: "Entender o negócio",
    descricao: "Conversamos sobre seu público, seus serviços e o objetivo da página.",
    entrega: "Direcionamento claro",
  },
  {
    numero: "02",
    titulo: "Definir a mensagem",
    descricao: "Organizamos o conteúdo e o caminho que o visitante deve percorrer.",
    entrega: "Estrutura e textos",
  },
  {
    numero: "03",
    titulo: "Criar a página",
    descricao: "Unimos a identidade da marca a um design responsivo e fácil de usar.",
    entrega: "Página para revisar",
  },
  {
    numero: "04",
    titulo: "Revisar e publicar",
    descricao: "Você valida o resultado, refinamos os detalhes e colocamos o site no ar.",
    entrega: "Site publicado",
  },
];

export function NossoProcesso() {
  return (
    <section id="como-funciona" className="bg-brand-surface scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-cta">
              Nosso processo
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-brand-navy md:text-4xl">
              Da conversa ao site no ar
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-navy-soft">
              Cada etapa tem um propósito — e algo concreto para você acompanhar.
            </p>
          </Reveal>
        </div>

        <RevealGroup
          as="ol"
          className="mt-10 mx-auto max-w-3xl border-t border-brand-sky-soft"
          stagger={0.1}
        >
          {etapas.map((etapa) => (
            <RevealItem as="li" key={etapa.numero} className="border-b border-brand-sky-soft">
              <div className="grid gap-3 py-6 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-5 md:py-7">
                <span
                  className="font-display text-3xl font-bold leading-none text-brand-cta"
                  aria-hidden="true"
                >
                  {etapa.numero}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-bold text-brand-navy">{etapa.titulo}</h3>
                  <p className="mt-2 max-w-lg leading-relaxed text-brand-navy-soft">
                    {etapa.descricao}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-brand-cta">
                    <span className="text-brand-navy-soft">Você acompanha:</span> {etapa.entrega}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
