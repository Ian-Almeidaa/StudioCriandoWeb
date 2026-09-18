import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/landing/Header";
import { QuemSomos } from "@/components/landing/QuemSomos";
import { CtaFinal } from "@/components/landing/CtaFinal";
import { Footer } from "@/components/landing/Footer";

const title = "Quem somos | StudioCriandoWeb";
const description =
  "Conheça a StudioCriandoWeb: estratégia, copywriting, design e tecnologia trabalhando juntos para colocar seu site no ar.";

export const Route = createFileRoute("/quem-somos")({
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
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
  component: QuemSomosPage,
});

function QuemSomosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <QuemSomos />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
