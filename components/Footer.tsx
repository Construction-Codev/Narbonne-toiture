import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";

import TrackedAnchor from "@/components/analytics/TrackedAnchor";
import TrackedLink from "@/components/analytics/TrackedLink";

const priorityServices = [
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
];

const roofingServices = [
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

const navigation = [
  {
    label: "Services",
    href: "/services",
  },
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

const legalLinks = [
  {
    label: "Mentions légales",
    href: "/mentions-legales",
  },
  {
    label: "Confidentialité",
    href: "/confidentialite",
  },
];

export default function Footer() {
  return (
    <footer className="bg-anthracite text-white">
      {/* CTA principal */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-terracotta-light">
                Un projet de toiture ?
              </p>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Parlons de votre toiture.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
                Entretien, protection, réparation ou travaux de couverture :
                échangeons sur votre projet à Narbonne et dans l&apos;Aude.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <TrackedAnchor
                href="tel:+33662125611"
                eventName="phone_click"
                eventData={{
                  location: "footer",
                }}
                aria-label="Appeler Narbonne Toiture au 06 62 12 56 11"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 font-bold text-white transition hover:border-terracotta-light hover:text-terracotta-light active:scale-[0.98]"
              >
                <Phone size={18} aria-hidden="true" />
                06 62 12 56 11
              </TrackedAnchor>

              <TrackedLink
                href="/contact"
                eventName="quote_click"
                eventData={{
                  location: "footer",
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-4 font-bold text-white transition hover:bg-terracotta-light active:scale-[0.98]"
              >
                Demander un devis
                <ArrowUpRight size={18} aria-hidden="true" />
              </TrackedLink>
            </div>
          </div>
        </div>
      </div>

      {/* Footer principal */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Marque */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label="Narbonne Toiture - Accueil"
              className="inline-flex items-center"
            >
              <span className="text-xl font-bold tracking-tight text-white">
                NARBONNE
              </span>

              <span className="ml-2 text-xl font-bold tracking-tight text-terracotta-light">
                TOITURE
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-lg font-semibold leading-7 text-white">
              Couvrir aujourd&apos;hui,
              <br />
              <span className="text-terracotta-light">
                protéger demain.
              </span>
            </p>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/60">
              Nettoyage, démoussage, protection et travaux de toiture pour
              préserver durablement votre couverture.
            </p>

            {/* Zone d'intervention */}
            <div className="mt-7 flex items-start gap-3 text-sm text-white/65">
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-terracotta-light"
                aria-hidden="true"
              />

              <span>
                Intervention à Narbonne
                <br />
                et dans l&apos;Aude
              </span>
            </div>

            {/* Horaires */}
            <div className="mt-4 flex items-start gap-3 text-sm text-white/65">
              <Clock
                size={18}
                className="mt-0.5 shrink-0 text-terracotta-light"
                aria-hidden="true"
              />

              <span>
                Lundi au samedi
                <br />
                6h00 – 20h00
              </span>
            </div>
          </div>

          {/* Entretien */}
          <div className="lg:col-span-2">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-terracotta-light">
              Entretien
            </p>

            <div className="grid gap-3">
              {priorityServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-sm leading-6 text-white/65 transition hover:text-white"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Travaux */}
          <div className="lg:col-span-3">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white/40">
              Travaux de toiture
            </p>

            <div className="grid gap-3">
              {roofingServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-sm leading-6 text-white/65 transition hover:text-white"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white/40">
              Narbonne Toiture
            </p>

            <div className="grid gap-3">
              {navigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm leading-6 text-white/65 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
              <p className="text-xs leading-5 text-white/40">
                © {new Date().getFullYear()} Narbonne Toiture. Tous droits
                réservés.
              </p>

              <span
                className="hidden text-white/20 sm:inline"
                aria-hidden="true"
              >
                •
              </span>

              <p className="text-xs text-white/40">
                Site réalisé par{" "}
                <a
                  href="https://code-v.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white/60 transition hover:text-terracotta-light"
                >
                  CODE-V
                </a>
              </p>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-white/40 transition hover:text-white/80"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}