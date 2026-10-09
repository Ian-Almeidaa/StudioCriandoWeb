import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";

import { WHATSAPP_URL_GENERIC } from "@/lib/site";

const palavras = ["SEU NEGÓCIO MERECE MAIS QUE UM PERFIL NO INSTAGRAM"];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="hero" className="relative overflow-hidden bg-soft-gradient">
      {/* Halos decorativos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-brand-sky/20 blur-3xl animate-float"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-brand-cta/10 blur-3xl animate-float"
      />

      {/* Container principal */}
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1.35fr_0.65fr] lg:items-center lg:gap-16">
        {/* LADO ESQUERDO */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-sky-soft bg-card/70 px-4 py-2 text-sm font-semibold text-brand-navy backdrop-blur"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cta opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-cta" />
            </span>

            PARA NEGÓCIOS QUE QUEREM CRESCER ONLINE
          </motion.p>

          <h1 className="max-w-4xl font-display text-4xl leading-tight font-extrabold text-brand-navy md:text-5xl lg:text-6xl">
            {palavras.map((palavra, i) => (
              <motion.span
                key={`${palavra}-${i}`}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.06 * i,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {palavra}&nbsp;
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-navy-soft"
          >
            Tenha um site profissional que apresenta seu negócio, gera confiança
            e transforma visitantes em oportunidades.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-8"
          >
            {/* Botões */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={WHATSAPP_URL_GENERIC}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-cta px-8 py-4 text-lg font-bold text-white shadow-brand-card transition-all duration-300 hover:-translate-y-1 hover:bg-brand-cta-hover sm:w-auto"
              >
                Quero colocar meu negócio na internet

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>

              <Link
                to="/portfolio"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-brand-cta/40 bg-card/60 px-8 py-4 text-lg font-bold text-brand-cta backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-brand-sky-soft sm:w-auto"
              >
                Ver portfólios
              </Link>
            </div>

            {/* Diferenciais */}

          </motion.div>
        </div>

        {/* LADO DIREITO - SOMENTE DESKTOP */}
        {/* LADO DIREITO - SOMENTE DESKTOP */}
        <div className="relative hidden lg:block">
          {/* Glow atrás dos cards */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-12 rounded-full bg-brand-sky/20 blur-3xl"
          />

          <div className="relative flex w-full flex-col gap-4">
            {/* Card principal */}
            <motion.div
              initial={
                reduce
                  ? { opacity: 0 }
                  : { opacity: 0, x: 30, y: 10 }
              }
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full rounded-3xl border border-brand-sky-soft bg-white/70 p-6 shadow-brand-card backdrop-blur"
            >
              <p className="text-sm font-bold tracking-wide text-brand-cta">
                PRESENÇA DIGITAL
              </p>

              <h2 className="mt-2 text-2xl font-extrabold leading-tight text-brand-navy">
                Um site que valoriza o seu negócio
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-brand-navy-soft">
                Apresente sua empresa de forma profissional, transmita confiança e mostre ao cliente por que ele deve escolher você.
              </p>
            </motion.div>

            {/* Card responsivo */}
            <motion.div
              initial={
                reduce
                  ? { opacity: 0 }
                  : { opacity: 0, x: 30 }
              }
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full rounded-2xl border border-brand-sky-soft bg-white/70 p-5 shadow-brand-card backdrop-blur"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-sky-soft font-bold text-brand-cta">
                  ✓
                </span>

                <div>
                  <p className="font-bold text-brand-navy">
                    Experiência em qualquer tela
                  </p>

                  <p className="mt-1 text-sm leading-relaxed text-brand-navy-soft">
                    Seu site se adapta ao celular, tablet e computador para que seu cliente tenha uma boa experiência onde estiver.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card processo */}
            <motion.div
              initial={
                reduce
                  ? { opacity: 0 }
                  : { opacity: 0, x: 30 }
              }
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full rounded-2xl border border-brand-sky-soft bg-white/70 p-5 shadow-brand-card backdrop-blur"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-sky-soft font-bold text-brand-cta">
                  ✓
                </span>

                <div>
                  <p className="font-bold text-brand-navy">
                    Pensado para o seu negócio
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-navy-soft">
                    Da estratégia à publicação, cada página é construída de acordo com sua empresa, seu público e seus objetivos.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
