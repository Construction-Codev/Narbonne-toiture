import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

const locations = [
  {
    name: "Narbonne",
    href: "/realisations/renovation-toiture-narbonne",
  },
  {
    name: "Gruissan",
    href: "/realisations/refection-couverture-gruissan",
  },
  {
    name: "Coursan",
    href: "/realisations/renovation-toiture-coursan",
  },
  {
    name: "Sigean",
    href: "/realisations/couverture-maison-sigean",
  },
  {
    name: "Port-la-Nouvelle",
    href: "/realisations/renovation-couverture-port-la-nouvelle",
  },
  {
    name: "Lézignan-Corbières",
    href: "/realisations/refection-toiture-lezignan-corbieres",
  },
  {
    name: "Carcassonne",
    href: "/realisations/travaux-toiture-carcassonne",
  },
];

export default function CoverageLocalArea() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              <MapPin className="h-4 w-4" />
              Narbonne & Aude
            </div>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-anthracite sm:text-5xl">
              Des travaux de couverture dans tout le département.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-10">
            <p className="max-w-2xl text-lg leading-8 text-anthracite/70">
              Narbonne Toiture intervient pour les travaux de couverture à
              Narbonne ainsi que dans les communes environnantes et plus
              largement dans l’Aude. Rénovation, remise en état ou intervention
              ciblée : chaque toiture demande une approche adaptée à son état
              et à sa configuration.
            </p>

            <div className="mt-12 border-t border-anthracite/15">
              {locations.map((location) => (
                <Link
                  key={location.name}
                  href={location.href}
                  className="group flex items-center justify-between border-b border-anthracite/15 py-5"
                >
                  <span className="text-lg font-medium text-anthracite transition-colors group-hover:text-terracotta">
                    Couvreur à {location.name}
                  </span>

                  <ArrowUpRight className="h-5 w-5 text-anthracite/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-terracotta" />
                </Link>
              ))}
            </div>

            <Link
              href="/realisations"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-terracotta"
            >
              Voir toutes nos réalisations
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}