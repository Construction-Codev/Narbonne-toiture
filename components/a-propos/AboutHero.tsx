import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

import Breadcrumb from "@/components/ui/Breadcrumb";

export default function AboutHero() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-6 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "À propos" },
          ]}
        />

        <div className="grid gap-12 pt-12 lg:grid-cols-12 lg:items-end lg:gap-16 lg:pt-16">
          <div className="lg:col-span-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              Narbonne Toiture
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.055em] text-anthracite sm:text-6xl lg:text-7xl">
              20 ans de métier au service des toitures.
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="max-w-md text-lg leading-8 text-anthracite/65">
              Une expérience construite sur les chantiers, au contact des
              couvertures, de leurs matériaux et des problématiques rencontrées
              au fil du temps.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-terracotta px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
              >
                Demander un devis
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <a
                href="tel:+33662125611"
                className="inline-flex items-center gap-2 border border-anthracite/20 px-6 py-3.5 text-sm font-semibold text-anthracite transition-colors hover:border-anthracite"
              >
                <Phone className="h-4 w-4" />
                06 62 12 56 11
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-anthracite/15 pt-5">
          <div className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs uppercase tracking-[0.15em] text-anthracite/40">
            <span>Couverture</span>
            <span>Entretien</span>
            <span>Réparation</span>
            <span>Charpente</span>
            <span>Zinguerie</span>
          </div>
        </div>
      </div>
    </section>
  );
}