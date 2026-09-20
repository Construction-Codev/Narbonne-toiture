import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

export default function LeakDiagnostic() {
  return (
    <section className="bg-anthracite text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Search
              aria-hidden="true"
              strokeWidth={1.3}
              className="h-10 w-10 text-sand"
            />

            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-sand">
              Recherche de fuite
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Rechercher la cause avant de réparer.
            </h2>
          </div>

          <div className="lg:col-span-8 lg:pt-16">
            <p className="max-w-3xl text-2xl leading-10 tracking-[-0.02em] text-white/85 sm:text-3xl sm:leading-[1.45]">
              Une fuite de toiture peut se manifester par une infiltration,
              une trace d’humidité ou la présence d’eau à l’intérieur du
              bâtiment.
            </p>

            <div className="mt-12 grid gap-8 border-t border-white/15 pt-10 sm:grid-cols-2 sm:gap-12">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-sand">
                  Côté intérieur
                </p>

                <p className="mt-4 leading-7 text-white/60">
                  La zone où l’eau devient visible constitue un indice, mais
                  elle ne correspond pas nécessairement au point d’entrée sur
                  la toiture.
                </p>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-sand">
                  Côté toiture
                </p>

                <p className="mt-4 leading-7 text-white/60">
                  La couverture, les raccords et les éléments associés doivent
                  être observés afin de rechercher la zone susceptible d’être
                  à l’origine de l’infiltration.
                </p>
              </div>
            </div>

            <div className="mt-12 border-t border-white/15 pt-8">
              <Link
                href="/reparations"
                className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-sand transition-opacity hover:opacity-70"
              >
                Voir les réparations de toiture
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}