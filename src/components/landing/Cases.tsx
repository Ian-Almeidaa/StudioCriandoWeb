import { Link } from "@tanstack/react-router";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { projetos } from "@/lib/portfolio";

export function Cases() {
  return (
    <section id="portfolio" className="bg-brand-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-bold text-brand-navy md:text-4xl">
                Modelos de sites para o seu segmento
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-brand-navy-soft">
                Estruturas de referência para visualizar como seu negócio pode ser apresentado na
                internet.
              </p>
            </div>
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 rounded-full border border-brand-cta/40 px-5 py-2 text-sm font-bold text-brand-cta transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-brand-sky-soft"
            >
              Ver portfólio completo
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" stagger={0.09}>
          {projetos.map((item) => (
            <RevealItem
              key={item.slug}
              as="article"
              className="hover-card group overflow-hidden rounded-3xl border border-brand-sky-soft bg-card shadow-brand-soft"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-40 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-brand-navy">{item.segmento}</h3>
                <p className="mt-2 text-sm font-semibold text-brand-cta">{item.cliente}</p>
                <p className="mt-4 text-sm text-brand-navy-soft">{item.resultado}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
