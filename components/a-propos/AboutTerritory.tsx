import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const locations = [
  {
    label: "Narbonne",
    href: "/realisations/renovation-toiture-narbonne",
  },
  {
    label: "Gruissan",
    href: "/realisations/refection-couverture-gruissan",
  },
  {
    label: "Coursan",
    href: "/realisations/renovation-toiture-coursan",
  },
  {
    label: "Sigean",
    href: "/realisations/couverture-maison-sigean",
  },
  {
    label: "Port-la-Nouvelle",
    href: "/realisations/renovation-couverture-port-la-nouvelle",
  },
  {
    label: "Lézignan-Corbières",
    href: "/realisations/refection-toiture-lezignan-corbieres",
  },
  {
    label: "Carcassonne",
    href: "/realisations/travaux-toiture-carcassonne",
  },
];

export default function AboutTerritory() {
  return (
    <section className="bg-anthracite text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-sand">
              Narbonne &amp; l&apos;Aude
            </p>

            <h2 className="mt-6 max-w-xl text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">
              Un territoire parcouru au fil des chantiers.
            </h2>

            <p className="mt-7 max-w-md text-lg leading-8 text-white/60">
              Narbonne Toiture intervient à Narbonne et dans l&apos;ensemble de
              l&apos;Aude pour les travaux, l&apos;entretien et les réparations
              de toiture.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border-t border-white/15">
              {locations.map((location) => (
                <Link
                  key={location.label}
                  href={location.href}
                  className="group flex items-center justify-between border-b border-white/15 py-5"
                >
                  <span className="text-xl font-medium tracking-[-0.025em] text-white/85 transition-colors group-hover:text-white">
                    {location.label}
                  </span>

                  <ArrowRight className="h-5 w-5 text-white/30 transition-transform group-hover:translate-x-1 group-hover:text-sand" />
                </Link>
              ))}
            </div>

            <Link
              href="/realisations"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sand transition-opacity hover:opacity-70"
            >
              Voir les réalisations
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}