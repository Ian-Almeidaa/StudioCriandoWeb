import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { BRAND } from "@/lib/site";

const pilares = [
  {
    titulo: "Estratégia",
    descricao: "Entendemos seu público e o que precisa ser comunicado antes de escrever uma linha.",
  },
  {
    titulo: "Copywriting",
    descricao:
      "Textos com IA e revisão humana, pensados para explicar e converter — não só preencher espaço.",
  },
  {
    titulo: "Design",
    descricao:
      "Identidade visual aplicada com consistência, hierarquia clara e foco em leitura fácil.",
  },
  {
    titulo: "Tecnologia",
    descricao:
      "Páginas rápidas, responsivas e prontas para publicar, sem complicação técnica para você.",
  },
];

export function QuemSomos() {
  return (
    <section id="quem-somos" className="bg-brand-surface">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-20">
          <Reveal className="min-w-0">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-cta">
                Quem somos
              </p>
              <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-brand-navy md:text-4xl">
                Um site que mostra por que escolher o seu negócio.
              </h1>
              <p className="mt-6 max-w-md text-xl font-semibold leading-snug text-brand-navy">
                Estratégia, texto, design e tecnologia trabalhando juntos.
              </p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-brand-navy-soft">
                Na {BRAND}, unimos essas quatro frentes para transformar o que você faz em uma
                presença digital clara e confiável — sem depender de vários fornecedores diferentes
                para chegar lá.
              </p>
            </div>
          </Reveal>

          <div className="min-w-0">
            <RevealGroup className="grid gap-6 sm:grid-cols-2" stagger={0.1}>
              {pilares.map((pilar) => (
                <RevealItem
                  key={pilar.titulo}
                  className="rounded-2xl border border-brand-sky-soft bg-background p-6 shadow-brand-soft"
                >
                  <h2 className="font-display text-xl font-bold text-brand-navy">{pilar.titulo}</h2>
                  <p className="mt-3 leading-relaxed text-brand-navy-soft">{pilar.descricao}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
