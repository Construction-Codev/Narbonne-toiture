import {
  ArrowDown,
  CornerDownRight,
  Search,
} from "lucide-react";

export default function LeakOrigin() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Introduction */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              Comprendre une infiltration
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-anthracite sm:text-5xl">
              L’eau peut suivre un chemin avant de devenir visible.
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-8 text-anthracite/65">
              L’endroit où une trace apparaît à l’intérieur ne permet pas, à
              lui seul, d’identifier l’origine exacte de l’infiltration.
            </p>
          </div>

          {/* Schéma éditorial */}
          <div className="lg:col-span-7 lg:pt-8">
            <div className="border-t border-anthracite/15">
              <div className="grid grid-cols-[48px_minmax(0,1fr)] gap-x-6 border-b border-anthracite/15 py-8 sm:grid-cols-[64px_minmax(0,1fr)]">
                <div>
                  <span className="font-mono text-xs text-anthracite/35">
                    01
                  </span>

                  <CornerDownRight
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="mt-6 h-6 w-6 text-terracotta"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.025em] text-anthracite sm:text-2xl">
                    L’eau pénètre
                  </h3>

                  <p className="mt-3 max-w-xl leading-7 text-anthracite/65">
                    Un défaut sur un élément de couverture ou sur un point
                    particulier peut laisser passer l’eau.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[48px_minmax(0,1fr)] gap-x-6 border-b border-anthracite/15 py-8 sm:grid-cols-[64px_minmax(0,1fr)]">
                <div>
                  <span className="font-mono text-xs text-anthracite/35">
                    02
                  </span>

                  <ArrowDown
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="mt-6 h-6 w-6 text-terracotta"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.025em] text-anthracite sm:text-2xl">
                    Elle chemine
                  </h3>

                  <p className="mt-3 max-w-xl leading-7 text-anthracite/65">
                    Avant d’être visible, l’eau peut se déplacer au contact
                    des différents éléments situés sous la couverture.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[48px_minmax(0,1fr)] gap-x-6 border-b border-anthracite/15 py-8 sm:grid-cols-[64px_minmax(0,1fr)]">
                <div>
                  <span className="font-mono text-xs text-anthracite/35">
                    03
                  </span>

                  <Search
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="mt-6 h-6 w-6 text-terracotta"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.025em] text-anthracite sm:text-2xl">
                    Il faut remonter à son origine
                  </h3>

                  <p className="mt-3 max-w-xl leading-7 text-anthracite/65">
                    La recherche consiste donc à examiner la toiture et les
                    zones susceptibles d’être concernées avant de déterminer
                    l’intervention à envisager.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}