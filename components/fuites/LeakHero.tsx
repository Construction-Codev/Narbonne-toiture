import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  Phone,
} from "lucide-react";

import Breadcrumb from "@/components/ui/Breadcrumb";

export default function LeakHero() {
  return (
    <section className="relative overflow-hidden bg-anthracite text-white">
      {/* Élément graphique */}
      <div
        aria-hidden="true"
        className="absolute right-[-12rem] top-[-10rem] h-[38rem] w-[38rem] rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-5rem] top-[-3rem] h-[24rem] w-[24rem] rounded-full border border-white/10"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-6 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Fuites de toiture" },
          ]}
        />

        <div className="grid gap-14 pt-10 lg:grid-cols-12 lg:items-end lg:gap-16 lg:pt-16">
          <div className="lg:col-span-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sand">
              Fuite de toiture · Narbonne
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Une fuite ne commence pas toujours là où elle apparaît.
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <Droplets
              aria-hidden="true"
              strokeWidth={1.25}
              className="mb-7 h-9 w-9 text-terracotta"
            />

            <p className="max-w-md text-lg leading-8 text-white/65">
              Une trace d’humidité ou une infiltration visible à l’intérieur
              peut provenir d’une autre zone de la toiture. Il faut d’abord
              rechercher l’origine du passage de l’eau.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-terracotta px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-terracotta-dark"
              >
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="tel:+33662125611"
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-white/40"
              >
                <Phone className="h-4 w-4" />
                06 62 12 56 11
              </a>
            </div>
          </div>
        </div>

        {/* Ligne basse */}
        <div className="mt-16 border-t border-white/15 pt-5 sm:mt-20">
          <div className="flex items-center justify-between gap-6">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-white/35">
              Infiltration
            </span>

            <span className="h-px flex-1 bg-white/10" />

            <span className="font-mono text-xs uppercase tracking-[0.16em] text-white/35">
              Recherche
            </span>

            <span className="h-px flex-1 bg-white/10" />

            <span className="font-mono text-xs uppercase tracking-[0.16em] text-white/35">
              Intervention
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}