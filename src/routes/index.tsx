import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { NossoProcesso } from "@/components/landing/NossoProcesso";
import { Cases } from "@/components/landing/Cases";
import { Planos } from "@/components/landing/Planos";
import { Quiz } from "@/components/landing/Quiz";
import { Faq } from "@/components/landing/Faq";
import { CtaFinal } from "@/components/landing/CtaFinal";
import { Footer } from "@/components/landing/Footer";

const title = "StudioCriandoWeb — Copy que vende e landing page pronta para converter";
const description =
  "Copywriting com IA e landing pages para clínicas, espaços de estética, negócios de saúde e pet shops. Site no ar em até 7 dias, com WhatsApp integrado.";

export const Route = createFileRoute("/")({
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
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "StudioCriandoWeb",
          description,
          areaServed: "BR",
          serviceType: ["Copywriting", "Criação de landing pages"],
          sameAs: ["https://instagram.com/studiocriandoweb"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <NossoProcesso />
        <Cases />
        <Quiz />
        <Planos />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
