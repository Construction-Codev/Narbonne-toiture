"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";

const services = [
  {
    label: "Nettoyage de toiture",
    href: "/nettoyage-toiture",
  },
  {
    label: "Démoussage de toiture",
    href: "/demoussage-toiture",
  },
  {
    label: "Traitement hydrofuge",
    href: "/hydrofuge-toiture",
  },
  {
    label: "Couverture",
    href: "/couverture",
  },
  {
    label: "Réparation de toiture",
    href: "/reparations",
  },
  {
    label: "Recherche de fuite",
    href: "/fuites",
  },
  {
    label: "Zinguerie",
    href: "/zinguerie",
  },
  {
    label: "Charpente",
    href: "/charpente",
  },
];

const secondaryLinks = [
  {
    label: "Réalisations",
    href: "/realisations",
  },
  {
    label: "Conseils",
    href: "/conseils",
  },
  {
    label: "À propos",
    href: "/a-propos",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-[100] border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Narbonne Toiture - Accueil"
          className="relative z-50 flex shrink-0 items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-4"
        >
          <Image
            src="/images/branding/logo.png"
            alt="Narbonne Toiture"
            width={280}
            height={80}
            priority
            className="h-auto w-[205px] sm:w-[235px]"
          />
        </Link>

        {/* Navigation desktop */}
        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-6 xl:flex"
        >
          <Link
            href="/"
            className="rounded-sm text-sm font-semibold text-anthracite transition-colors hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-4"
          >
            Accueil
          </Link>

          {/* Services */}
        <div ref={servicesRef} className="relative flex items-center">
            <Link
                href="/services"
                className="rounded-sm text-sm font-semibold text-anthracite transition-colors hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-4"
            >
                Services
            </Link>

            <button
                type="button"
                onClick={() => setServicesOpen((open) => !open)}
                aria-label={
                servicesOpen
                    ? "Fermer le menu des services"
                    : "Ouvrir le menu des services"
                }
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className="ml-1 flex h-6 w-6 cursor-pointer items-center justify-center text-anthracite transition-colors hover:text-terracotta"
            >
                <ChevronDown
                size={15}
                strokeWidth={2}
                aria-hidden="true"
                className={`transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                }`}
                />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full mt-6 w-[310px] -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-xl">
                <div className="mb-1 rounded-xl bg-ivory px-4 py-3">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">
                    Entretien & protection
                  </p>
                </div>

                {services.map((service, index) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setServicesOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-colors hover:bg-ivory hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-terracotta ${
                      index < 3
                        ? "text-anthracite"
                        : "text-anthracite/80"
                    }`}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {secondaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm text-sm font-semibold text-anthracite transition-colors hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions desktop */}
        <div className="hidden items-center gap-3 xl:flex">
          <a
            href="tel:+33662125611"
            aria-label="Appeler Narbonne Toiture au 06 62 12 56 11"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-anthracite transition-colors hover:border-terracotta hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-4"
          >
            <Phone size={18} aria-hidden="true" />
          </a>

          <Link
            href="/contact"
            className="rounded-full bg-terracotta px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-terracotta-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-4"
          >
            Demander un devis
          </Link>
        </div>

        {/* Bouton mobile */}
        <button
          type="button"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
          className="relative z-[110] flex h-11 w-11 items-center justify-center rounded-full border border-border text-anthracite transition hover:border-terracotta hover:text-terracotta active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-4 xl:hidden"
        >
          {mobileOpen ? (
            <X size={21} aria-hidden="true" />
          ) : (
            <Menu size={21} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Navigation mobile */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 top-full z-[90] h-[calc(100vh-5rem)] w-full overflow-y-auto bg-ivory xl:hidden"
        >
          <nav
            aria-label="Navigation mobile"
            className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-2xl flex-col px-6 py-8"
          >
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="border-b border-anthracite/10 py-4 text-lg font-bold text-anthracite transition-colors active:text-terracotta"
            >
              Accueil
            </Link>

            {/* Entretien */}
            <div className="py-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
                Entretien & protection
              </p>

              <div className="grid gap-1">
                {services.slice(0, 3).map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={closeMobileMenu}
                    className="rounded-xl py-3 text-lg font-bold text-anthracite transition-colors active:text-terracotta"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Travaux */}
            <div className="border-t border-anthracite/10 py-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted">
                Travaux de toiture
              </p>

              <div className="grid gap-1">
                {services.slice(3).map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={closeMobileMenu}
                    className="py-3 text-base font-semibold text-anthracite transition-colors active:text-terracotta"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation secondaire */}
            <div className="grid border-t border-anthracite/10 pt-4">
              {secondaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="py-3 text-base font-semibold text-anthracite transition-colors active:text-terracotta"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-auto grid gap-3 pt-8">
              <a
                href="tel:+33662125611"
                className="flex items-center justify-center gap-2 rounded-full border border-anthracite px-5 py-4 font-bold text-anthracite transition active:scale-[0.98] active:border-terracotta active:text-terracotta"
              >
                <Phone size={18} aria-hidden="true" />
                06 62 12 56 11
              </a>

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="rounded-full bg-terracotta px-5 py-4 text-center font-bold text-white transition active:scale-[0.98] active:bg-terracotta-dark"
              >
                Demander un devis
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}