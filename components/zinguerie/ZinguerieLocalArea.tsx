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
];

export default function ZinguerieLocalArea() {
  return (
    <section className="bg-anthracite text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-sand">
              <MapPin className="h-4 w-4" />
              Narbonne · Aude
            </div>

            <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Travaux de zinguerie à Narbonne et dans l’Aude.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
              Narbonne Toiture intervient pour les travaux de zinguerie
              associés à la toiture à Narbonne et dans les différentes
              communes du département de l’Aude.
            </p>
          </div>

          <div className="lg:col-span-5 lg:pt-12">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/35">
              Travaux de toiture dans l’Aude
            </p>

            <div className="mt-6 border-t border-white/15">
              {locations.map((location) => (
                <Link
                  key={location.city}
                  href={location.href}
                  className="group flex items-center justify-between border-b border-white/15 py-5"
                >
                  <span className="text-lg font-medium text-white transition-colors group-hover:text-sand">
                    {location.city}
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sand" />
                </Link>
              ))}
            </div>

            <Link
              href="/realisations"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-sand"
            >
              Toutes les réalisations
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}