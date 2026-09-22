import { Link } from "@tanstack/react-router";

import logoAsset from "@/assets/logo-studiocriandoweb.png";
import { BRAND, EMAIL, INSTAGRAM_URL, WHATSAPP_URL_GENERIC } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div className="md:pr-8">
            <div className="flex items-center gap-2">
              <img
                src={logoAsset}
                alt="Logo da StudioCriandoWeb"
                loading="lazy"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="font-display text-lg font-bold text-brand-navy">{BRAND}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-brand-navy-soft">
              Sites e experiências digitais pensadas para apresentar seu negócio com clareza,
              estratégia e profissionalismo.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé" className="text-sm">
            <h2 className="font-display text-base font-bold text-brand-navy">Navegação</h2>
            <ul className="mt-4 flex flex-col gap-4">
              <li>
                <Link className="text-brand-navy-soft hover:text-brand-cta" to="/">
                  Início
                </Link>
              </li>
              <li>
                <Link className="text-brand-navy-soft hover:text-brand-cta" to="/portfolio">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link
                  className="text-brand-navy-soft hover:text-brand-cta"
                  to="/politica-de-privacidade"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Fale conosco" className="text-sm">
            <h2 className="font-display text-base font-bold text-brand-navy">Fale Conosco</h2>
            <ul className="mt-4 flex flex-col gap-4">
              <li>
                <a className="text-brand-navy-soft hover:text-brand-cta" href={`mailto:${EMAIL}`}>
                  E-mail: {EMAIL}
                </a>
              </li>
              <li>
                <a
                  className="text-brand-navy-soft hover:text-brand-cta"
                  href={WHATSAPP_URL_GENERIC}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: (65) 99638-9833
                </a>
              </li>
              <li>
                <a
                  className="text-brand-navy-soft hover:text-brand-cta"
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram: @studiocriandoweb
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-12 border-t border-brand-sky-soft pt-8 text-sm text-brand-navy-soft">
          © {new Date().getFullYear()} {BRAND}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
