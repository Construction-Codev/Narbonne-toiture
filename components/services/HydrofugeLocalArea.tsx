import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";

const cities = [
  "Narbonne",
  "Gruissan",
  "Coursan",
  "Sigean",
  "Port-la-Nouvelle",
  "Lézignan-Corbières",
  "Carcassonne",
];

export default function HydrofugeLocalArea() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      {/* Mot décoratif */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-1rem] top-10 hidden select-none text-[11rem] font-semibold leading-none tracking-[-0.08em] text-anthracite/[0.025] lg:block xl:text-[14rem]"
      >
        AUDE
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-24">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta">
              Narbonne · Aude
            </span>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-anthracite sm:text-5xl lg:text-6xl">
              Protéger une toiture commence par comprendre son état.
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-xl text-base leading-8 text-muted sm:text-lg">
              Narbonne Toiture intervient à Narbonne et dans l’ensemble du
              département de l’Aude pour les besoins d’entretien, de protection
              et de travaux de toiture.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
              Pour une demande concernant un traitement hydrofuge, l’objectif
              est d’abord de déterminer si l’état et la nature de la couverture
              permettent d’envisager cette protection.
            </p>
          </div>
        </div>

        {/* Zone géographique */}
        <div className="mt-16 border-y border-border lg:mt-24">
          <div className="grid lg:grid-cols-[250px_1fr]">
            <div className="flex items-start gap-4 py-8 lg:border-r lg:border-border lg:py-10 lg:pr-10">
              <MapPin
                size={25}
                strokeWidth={1.5}
                className="mt-1 shrink-0 text-terracotta"
                aria-hidden="true"
              />

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">
                  Zone d’intervention
                </p>

                <p className="mt-2 text-xl font-semibold tracking-[-0.02em] text-anthracite">
                  Tout le département
                  <br />
                  de l’Aude
                </p>
              </div>
            </div>

            <div className="border-t border-border py-8 lg:border-t-0 lg:py-10 lg:pl-12">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-anthracite/40">
                Quelques communes d’intervention
              </p>

              <div className="mt-6 flex flex-wrap gap-x-7 gap-y-4">
                {cities.map((city, index) => (
                  <span
                    key={city}
                    className={`text-base font-medium ${
                      index === 0
                        ? "text-terracotta"
                        : "text-anthracite/75"
                    }`}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Conversion intégrée */}
        <div className="mt-12 grid gap-8 bg-ivory px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
              Un projet dans l’Aude ?
            </p>

            <h3 className="mt-3 max-w-2xl text-2xl font-semibold leading-9 tracking-[-0.03em] text-anthracite sm:text-3xl">
              Échangeons sur votre toiture avant d’envisager sa protection.
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
              Décrivez-nous son état et ce que vous observez afin d’orienter la
              demande vers l’intervention appropriée.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-terracotta px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-terracotta-dark"
            >
              Demander un devis
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <a
              href="tel:+33662125611"
              className="inline-flex items-center justify-center gap-3 border border-anthracite/15 bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-anthracite transition hover:border-terracotta hover:text-terracotta"
            >
              <Phone size={17} aria-hidden="true" />
              06 62 12 56 11
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}