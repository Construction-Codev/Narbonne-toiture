import { ArrowDownRight, Droplets } from "lucide-react";

export default function ZinguerieRole() {
  return (
    <section className="bg-anthracite text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Droplets
              aria-hidden="true"
              strokeWidth={1.25}
              className="h-9 w-9 text-sand"
            />

            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-sand">
              Le rôle de la zinguerie
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Guider l’eau. Protéger les raccords.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-16">
            <p className="max-w-3xl text-2xl leading-10 tracking-[-0.02em] text-white/85 sm:text-3xl sm:leading-[1.45]">
              Sur une toiture, l’eau doit être évacuée tout en limitant son
              passage au niveau des jonctions et des points particuliers.
            </p>

            <div className="mt-14 border-t border-white/15">
              <div className="grid gap-5 border-b border-white/15 py-8 sm:grid-cols-[170px_minmax(0,1fr)] sm:gap-10">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-sand">
                  Collecter
                </span>

                <p className="max-w-xl leading-7 text-white/60">
                  Certains éléments récupèrent les eaux de pluie provenant
                  des différentes surfaces de la toiture.
                </p>
              </div>

              <div className="grid gap-5 border-b border-white/15 py-8 sm:grid-cols-[170px_minmax(0,1fr)] sm:gap-10">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-sand">
                  Évacuer
                </span>

                <p className="max-w-xl leading-7 text-white/60">
                  L’eau collectée doit ensuite être dirigée vers les éléments
                  prévus pour son évacuation.
                </p>
              </div>

              <div className="grid gap-5 border-b border-white/15 py-8 sm:grid-cols-[170px_minmax(0,1fr)] sm:gap-10">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-sand">
                  Raccorder
                </span>

                <p className="max-w-xl leading-7 text-white/60">
                  La zinguerie intervient également sur différents raccords
                  et jonctions entre les éléments de la toiture.
                </p>
              </div>
            </div>

            <div className="mt-9 flex items-center gap-4 text-white/35">
              <ArrowDownRight
                aria-hidden="true"
                strokeWidth={1.25}
                className="h-5 w-5 text-sand"
              />
              <span className="font-mono text-xs uppercase tracking-[0.15em]">
                De la couverture vers l’évacuation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}