import { createFileRoute, Link } from "@tanstack/react-router";

import EliteDemo from "@/components/portfolio/elite/EliteDemo";

export const Route = createFileRoute("/demo/elite")({
  head: () => ({
    meta: [
      { title: "Elite — projeto demonstrativo | StudioCriandoWeb" },
      {
        name: "description",
        content: "Demonstração de site de aviação executiva no portfólio da StudioCriandoWeb.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: ElitePage,
});

function ElitePage() {
  return (
    <>
      <EliteDemo />
      <Link
        to="/portfolio"
        className="fixed bottom-4 left-4 z-40 rounded-full border border-gray-200 bg-white/95 px-4 py-2 text-xs font-medium text-gray-800 shadow-md backdrop-blur-sm transition-colors hover:bg-gray-100"
      >
        ← Portfólio · Projeto demonstrativo
      </Link>
    </>
  );
}
