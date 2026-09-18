import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import * as React from "react";

import logoAsset from "@/assets/logo-studiocriandoweb.png";
import { Sheet, SheetContent, SheetClose, SheetTrigger } from "@/components/ui/sheet";
import { BRAND, WHATSAPP_URL } from "@/lib/site";

const links = [
  { href: "/quem-somos", label: "Quem somos" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#portfolio", label: "Portfólio" },
  { href: "/#planos", label: "Planos" },
];

const isAnchorLink = (href: string) => href.includes("#");

export function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-brand-sky-soft bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        <Link
          to="/"
          className="group flex items-center gap-2"
          aria-label={`${BRAND} — página inicial`}
        >
          <img
            src={logoAsset}
            alt="Logo da StudioCriandoWeb: pincel em tons de azul transformando-se em pixels"
            width={48}
            height={48}
            className="h-12 w-12 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
          />
          <span className="font-display text-lg font-bold text-brand-navy">{BRAND}</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => {
              const navClassName =
                "relative rounded-md text-sm font-semibold text-brand-navy-soft transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-brand-cta after:transition-transform after:duration-300 hover:text-brand-cta hover:after:scale-x-100";
              return (
                <li key={link.href}>
                  {isAnchorLink(link.href) ? (
                    <a href={link.href} className={navClassName}>
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.href} className={navClassName}>
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-brand-cta px-5 py-2 text-sm font-bold text-white shadow-brand-soft transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-brand-cta-hover sm:inline-flex"
        >
          Falar no WhatsApp
        </a>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className="inline-flex items-center justify-center rounded-md p-2 text-brand-navy md:hidden"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            id="mobile-navigation"
            onCloseAutoFocus={(event) => event.preventDefault()}
            className="flex w-3/4 flex-col gap-8 sm:max-w-sm"
          >
            <nav aria-label="Navegação mobile">
              <ul className="flex flex-col gap-6">
                {links.map((link) => (
                  <li key={link.href}>
                    <SheetClose asChild>
                      {isAnchorLink(link.href) ? (
                        <a
                          href={link.href}
                          className="text-xl font-semibold text-brand-navy transition-colors hover:text-brand-cta"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-xl font-semibold text-brand-navy transition-colors hover:text-brand-cta"
                        >
                          {link.label}
                        </Link>
                      )}
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>
            <SheetClose asChild>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand-cta px-5 py-3 text-center text-base font-bold text-white shadow-brand-soft transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-brand-cta-hover"
              >
                Falar no WhatsApp
              </a>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
