import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

const localLinks = [
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
    city: "Port-la-Nouvelle",
    href: "/realisations/renovation-couverture-port-la-nouvelle",
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

export default function LeakLocalArea() {
  return (
    <section className="bg-anthracite text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-sand">
              <MapPin className="h-4 w-4" />
              Narbonne & Aude
            </div>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Recherche de fuite de toiture à Narbonne et dans l’Aude.
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-8 text-white/60">
              Narbonne Toiture intervient sur les problèmes d’infiltration et
              les travaux de toiture à Narbonne ainsi que dans les différentes
              communes du département de l’Aude.
            </p>
          </div>

          <div className="lg:col-span-7 lg:pt-5">
            <div className="border-t border-white/15">
              {localLinks.map((location) => (
                <Link
                  key={location.city}
                  href={location.href}
                  className="group flex items-center justify-between gap-6 border-b border-white/15 py-5"
                >
                  <span className="text-xl font-medium tracking-[-0.02em] text-white transition-colors group-hover:text-sand sm:text-2xl">
                    {location.city}
                  </span>

                  <ArrowUpRight className="h-5 w-5 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sand" />
                </Link>
              ))}
            </div>

            <p className="mt-7 text-sm leading-6 text-white/40">
              Découvrez également nos réalisations de couverture dans
              différentes communes de l’Aude.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}