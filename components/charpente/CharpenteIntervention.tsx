import Link from "next/link";
import { ArrowRight, Hammer, House, Search } from "lucide-react";

export default function CharpenteIntervention() {
  return (
    <section className="overflow-hidden bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              Adapter les travaux
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-anthracite sm:text-5xl">
              La charpente doit être considérée avec le reste de la toiture.
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-8 text-anthracite/65">
              La nature d’une intervention dépend de la zone concernée, de
              l’état observé et des travaux prévus sur la couverture.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-[23px] top-0 w-px bg-anthracite/15 sm:left-[31px]"
              />

              <div className="relative grid grid-cols-[48px_minmax(0,1fr)] gap-6 pb-12 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-8">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center bg-ivory sm:h-16 sm:w-16">
                  <Search
                    aria-hidden="true"
                    strokeWidth={1.3}
                    className="h-6 w-6 text-terracotta"
                  />
                </div>

                <div className="pt-2 sm:pt-3">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-terracotta">
                    Observer
                  </span>

                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-anthracite">
                    Identifier la partie concernée
                  </h3>

                  <p className="mt-4 max-w-xl leading-7 text-anthracite/60">
                    Il faut d’abord distinguer ce qui concerne la structure de
                    ce qui relève de la couverture ou d’un autre élément de
                    toiture.
                  </p>
                </div>
              </div>

              <div className="relative grid grid-cols-[48px_minmax(0,1fr)] gap-6 pb-12 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-8">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center bg-ivory sm:h-16 sm:w-16">
                  <Hammer
                    aria-hidden="true"
                    strokeWidth={1.3}
                    className="h-6 w-6 text-terracotta"
                  />
                </div>

                <div className="pt-2 sm:pt-3">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-terracotta">
                    Intervenir
                  </span>

                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-anthracite">
                    Adapter l’intervention
                  </h3>

                  <p className="mt-4 max-w-xl leading-7 text-anthracite/60">
                    Les travaux sont ensuite envisagés en fonction de la
                    situation observée et de leur relation avec le reste de la
                    toiture.
                  </p>
                </div>
              </div>

              <div className="relative grid grid-cols-[48px_minmax(0,1fr)] gap-6 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-8">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center bg-ivory sm:h-16 sm:w-16">
                  <House
                    aria-hidden="true"
                    strokeWidth={1.3}
                    className="h-6 w-6 text-terracotta"
                  />
                </div>

                <div className="pt-2 sm:pt-3">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-terracotta">
                    Ensemble
                  </span>

                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-anthracite">
                    Penser structure et couverture
                  </h3>

                  <p className="mt-4 max-w-xl leading-7 text-anthracite/60">
                    Lorsque les travaux concernent plusieurs parties de la
                    toiture, leur articulation doit être prise en compte dans
                    l’intervention.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-14 flex flex-col gap-4 border-t border-anthracite/15 pt-8 sm:flex-row sm:gap-8">
              <Link
                href="/couverture"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-terracotta"
              >
                Travaux de couverture
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/reparations"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-anthracite/65 transition-colors hover:text-terracotta"
              >
                Réparation de toiture
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}