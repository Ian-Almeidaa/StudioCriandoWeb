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
          </div>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" stagger={0.09}>
          {projetos.map((item) => (
            <RevealItem
              key={item.slug}
              as="article"
              className="hover-card group overflow-hidden rounded-3xl border border-brand-sky-soft bg-card shadow-brand-soft"
            >
              <Link
                to="/portfolio"
                hash={item.slug}
                aria-label={`Ver modelo de ${item.segmento.toLowerCase()} no portfólio`}
                className="block h-full rounded-3xl focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-cta"
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
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
