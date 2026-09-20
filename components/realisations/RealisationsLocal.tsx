import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cities = [
  "Narbonne",
  "Gruissan",
  "Coursan",
  "Sigean",
  "Port-la-Nouvelle",
  "Lézignan-Corbières",
  "Carcassonne",
];

export default function RealisationsLocal() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta">
              Narbonne & l’Aude
            </span>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.045em] text-anthracite sm:text-5xl">
              Des travaux de toiture dans tout le département.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
              Narbonne Toiture intervient pour les travaux de couverture,
              l’entretien et la rénovation des toitures à Narbonne et dans les
              principales communes de l’Aude.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-anthracite transition hover:text-terracotta"
            >
              Demander un devis
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="lg:pt-4">
            {cities.map((city) => (
              <div
                key={city}
                className="flex items-center justify-between border-b border-border py-5 first:border-t"
              >
                <span className="text-lg font-medium tracking-[-0.02em] text-anthracite sm:text-xl">
                  {city}
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
                  Aude
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}