import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

const areas = [
  "Narbonne",
  "Coursan",
  "Gruissan",
  "Sigean",
  "Port-la-Nouvelle",
  "Lézignan-Corbières",
  "Carcassonne",
];

export default function RepairLocalArea() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="border-y border-anthracite/15 py-14 sm:py-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
                <MapPin className="h-4 w-4" />
                Zone d’intervention
              </div>

              <h2 className="mt-5 max-w-lg text-4xl font-semibold tracking-[-0.04em] text-anthracite sm:text-5xl">
                Réparation de toiture à Narbonne et dans l’Aude.
              </h2>
            </div>

            <div className="lg:col-span-7 lg:pt-1">
              <p className="max-w-2xl text-lg leading-8 text-anthracite/65">
                Narbonne Toiture intervient pour les réparations de couverture
                à Narbonne ainsi que dans les différentes communes du
                département de l’Aude.
              </p>

              <div className="mt-9 flex max-w-2xl flex-wrap gap-x-2 gap-y-3">
                {areas.map((area, index) => (
                  <span
                    key={area}
                    className="text-lg font-medium text-anthracite"
                  >
                    {area}
                    {index < areas.length - 1 && (
                      <span className="ml-2 text-terracotta">·</span>
                    )}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-terracotta"
              >
                Demander une intervention
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}