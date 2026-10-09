import { ExternalLink } from "lucide-react";

type SiteDetailsLinkProps = {
  url: string;
  siteName: string;
};

export function SiteDetailsLink({ url, siteName }: SiteDetailsLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Veja em detalhes: ${siteName} (abre em nova aba)`}
      className="inline-flex min-h-12 w-full touch-manipulation items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-brand-cta px-5 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-brand-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cta active:bg-brand-cta-hover sm:w-auto"
    >
      Veja em detalhes
      <ExternalLink aria-hidden="true" className="h-4 w-4 shrink-0" />
    </a>
  );
}
