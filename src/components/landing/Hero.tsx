import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";

import heroMockup from "@/assets/hero-mockup.png";
import { WHATSAPP_URL } from "@/lib/site";

const palavras = ["SEU NEGÓCIO MERECE MAIS QUE UM PERFIL NO INSTAGRAM"];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="hero" className="relative overflow-hidden bg-soft-gradient">
      {/* halos decorativos animados */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-brand-sky/20 blur-3xl animate-float"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-brand-cta/10 blur-3xl animate-float"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:items-center">
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

          <h1 className="font-display text-4xl leading-tight font-extrabold text-brand-navy md:text-5xl lg:text-6xl">
            {palavras.map((palavra, i) => (
              <motion.span
                key={`${palavra}-${i}`}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {palavra}&nbsp;
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.06 * palavras.length, duration: 0.6 }}
              className="text-gradient-brand"
            ></motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 text-lg text-brand-navy-soft"
          >
            Tenha um site profissional que apresenta seu negócio, gera confiança e transforma
            visitantes em oportunidades.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={WHATSAPP_URL}
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
                Ver portifólios
              </Link>
            </div>
            <p className="mt-4 text-sm text-brand-navy-soft">
              Nós cuidamos da estratégia, copy, design e publicação.
              <br />
              Você cuida do seu negócio.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="group"
        >
          <img
            src={heroMockup}
            alt="Mockup de site para clínica odontológica exibido em notebook e celular"
            width={1280}
            height={960}
            className="w-full rounded-3xl shadow-brand-card transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </motion.div>
      </div>
    </section>
  );
}
