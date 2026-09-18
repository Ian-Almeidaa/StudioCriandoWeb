import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { SitePreview } from "@/components/portfolio/SitePreview";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { projetos } from "@/lib/portfolio";
import { WHATSAPP_URL } from "@/lib/site";

const title = "Portfólio de sites | StudioCriandoWeb";
const description =
  "Explore modelos de sites para diferentes segmentos e veja como cada estrutura pode ser adaptada ao seu negócio.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-soft-gradient">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-brand-sky/20 blur-3xl animate-float"
          />
          <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-full border border-brand-sky-soft bg-card/70 px-4 py-2 text-sm font-semibold text-brand-navy backdrop-blur"
            >
              Portfólio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-3xl font-display text-4xl leading-tight font-extrabold text-brand-navy md:text-5xl"
            >
              Veja como seu negócio pode ganhar vida na web.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 max-w-2xl text-lg text-brand-navy-soft"
            >
              Explore modelos desenvolvidos para diferentes segmentos e visualize como podemos
              adaptar a estrutura ao seu negócio.
            </motion.p>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
            <RevealGroup className="grid gap-10 md:grid-cols-2" stagger={0.12}>
              {projetos.map((p) => (
                <RevealItem
                  key={p.slug}
                  as="article"
                  className="hover-lift group overflow-hidden rounded-3xl border border-brand-sky-soft bg-card shadow-brand-soft"
                >
                  <SitePreview
                    previewImg={p.previewImg}
                    alt={p.alt}
                    url={`studiocriandoweb.com/${p.slug}`}
                  />
                  <div className="p-8">
                    <h2 className="font-display text-2xl font-bold text-brand-navy">
                      {p.segmento}
                    </h2>
                    <p className="mt-2 text-sm font-semibold text-brand-cta">{p.cliente}</p>
                    <p className="mt-4 text-brand-navy-soft">{p.resultado}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        <section className="bg-brand-gradient">
          <Reveal className="mx-auto max-w-3xl px-4 py-16 text-center md:px-8 md:py-24">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Gostou de uma estrutura?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Podemos adaptar este modelo para o seu negócio, com sua identidade, serviços e
              objetivos.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-bold text-brand-cta transition-transform duration-300 hover:-translate-y-1 sm:w-auto"
              >
                Quero adaptar este modelo →
              </a>
              <Link
                to="/"
                hash="planos"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-white/50 px-8 py-4 text-lg font-bold text-white transition-transform duration-300 hover:-translate-y-1 sm:w-auto"
              >
                Voltar para soluções
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
