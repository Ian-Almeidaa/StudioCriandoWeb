import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/Reveal";

const perguntas = [
  {
    q: "Em quanto tempo meu site fica pronto?",
    a: "Em média 7 dias úteis a partir do briefing, contando a copy, o design e uma rodada de ajustes. Se você responder o briefing rápido, costuma sair antes.",
  },
  {
    q: "O que acontece depois da entrega?",
    a: "A página fica sua, publicada e funcionando. Os planos landing page e site institucional incluem período de ajustes; depois disso é possível contratar manutenção avulsa quando precisar.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "50% na aprovação do orçamento e 50% na entrega. Somente pix.",
  },
  {
    q: "Já tenho um site antigo. Dá para substituir?",
    a: "Sim. Aproveito o que já funciona, reescrevo os textos e publico a nova página no mesmo endereço, sem perder o que você já divulgou.",
  },
];

export function Faq() {
  return (
    <section id="perguntas" className="bg-brand-surface">
      <Reveal className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-24">
        <h2 className="font-display text-3xl font-bold text-brand-navy md:text-4xl">
          Perguntas frequentes
        </h2>

        <Accordion type="single" collapsible className="mt-8">
          {perguntas.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger className="text-left text-lg font-semibold text-brand-navy transition-colors hover:text-brand-cta">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-brand-navy-soft">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
