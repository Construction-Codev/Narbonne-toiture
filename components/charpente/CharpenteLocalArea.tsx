import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

const locations = [
  {
    city: "Narbonne",
    href: "/realisations/renovation-toiture-narbonne",
  },
  {
    city: "Gruissan",
    href: "/realisations/refection-couverture-gruissan",
  },
  {
    city: "Coursan",
    href: "/realisations/renovation-toiture-coursan",
  },
  {
    city: "Sigean",
    href: "/realisations/couverture-maison-sigean",
  },
  {
    city: "Lézignan-Corbières",
    href: "/realisations/refection-toiture-lezignan-corbieres",
  },
  {
    city: "Carcassonne",
    href: "/realisations/travaux-toiture-carcassonne",
  },
];

export default function CharpenteLocalArea() {
  return (
    <section className="bg-anthracite text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-sand">
              <MapPin className="h-4 w-4" />
              Zone d’intervention
            </div>

            <p className="mt-10 font-mono text-xs uppercase tracking-[0.16em] text-white/35">
              Secteur principal
            </p>

            <h2 className="mt-3 text-6xl font-semibold tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              Narbonne
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-8 text-white/60">
              Travaux de charpente associés à la toiture à Narbonne et
              interventions dans le département de l’Aude.
            </p>
          </div>

          <div className="lg:col-span-6 lg:border-l lg:border-white/15 lg:pl-16">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-sand">
              Dans l’Aude
            </p>

            <div className="mt-8 grid grid-cols-2 border-l border-t border-white/15">
              {locations.map((location) => (
                <Link
                  key={location.city}
                  href={location.href}
                  className="group flex min-h-28 flex-col justify-between border-b border-r border-white/15 p-5 transition-colors hover:bg-white/[0.04] sm:min-h-32 sm:p-6"
                >
                  <ArrowUpRight className="h-4 w-4 self-end text-white/25 transition-colors group-hover:text-sand" />

                  <span className="max-w-[10rem] text-base font-medium text-white sm:text-lg">
                    {location.city}
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href="/realisations"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-sand"
            >
              Toutes nos réalisations
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}