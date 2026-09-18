import { Reveal } from "@/components/motion/Reveal";
import { WHATSAPP_URL } from "@/lib/site";

export function CtaFinal() {
  return (
    <section id="contato" className="relative overflow-hidden bg-brand-gradient">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl animate-float"
      />
      <Reveal className="relative mx-auto max-w-3xl px-4 py-16 text-center md:px-8 md:py-24">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          Vamos colocar seu site no ar esta semana?
        </h2>
        <p className="mt-4 text-lg text-white/90">
          Me conte em duas linhas o que seu negócio faz. Respondo com prazo e valor, sem formulário
          longo e sem compromisso.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-bold text-brand-cta shadow-brand-card transition-[transform,background-color] duration-300 hover:-translate-y-1 hover:bg-brand-sky-soft sm:w-auto"
        >
          Solicitar orçamento no WhatsApp
        </a>
      </Reveal>
    </section>
  );
}
