import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  CloudRain,
  Droplets,
} from "lucide-react";

export default function ZinguerieWater() {
  return (
    <section className="overflow-hidden bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              Le parcours de l’eau
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-anthracite sm:text-5xl">
              De la pluie jusqu’à son évacuation.
            </h2>

            <p className="mt-7 max-w-md text-lg leading-8 text-anthracite/65">
              La couverture et la zinguerie travaillent ensemble pour guider
              l’eau sur la toiture et l’éloigner du bâtiment.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="relative pl-12 sm:pl-20">
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-[15px] top-0 w-px bg-anthracite/15 sm:left-[31px]"
              />

              <div className="relative pb-14">
                <div className="absolute -left-12 flex h-8 w-8 items-center justify-center bg-ivory sm:-left-20 sm:h-16 sm:w-16">
                  <CloudRain
                    aria-hidden="true"
                    strokeWidth={1.3}
                    className="h-6 w-6 text-terracotta sm:h-8 sm:w-8"
                  />
                </div>

                <span className="font-mono text-xs uppercase tracking-[0.16em] text-terracotta">
                  Arrivée
                </span>

                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-anthracite sm:text-3xl">
                  L’eau atteint la couverture
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-anthracite/60">
                  La pente de la toiture dirige naturellement les eaux de
                  pluie vers les parties basses de la couverture.
                </p>
              </div>

              <div className="relative border-t border-anthracite/15 py-14">
                <div className="absolute -left-12 top-10 flex h-8 w-8 items-center justify-center bg-ivory sm:-left-20 sm:h-16 sm:w-16">
                  <ArrowDown
                    aria-hidden="true"
                    strokeWidth={1.3}
                    className="h-6 w-6 text-terracotta sm:h-8 sm:w-8"
                  />
                </div>

                <span className="font-mono text-xs uppercase tracking-[0.16em] text-terracotta">
                  Cheminement
                </span>

                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-anthracite sm:text-3xl">
                  Elle est dirigée vers les points de collecte
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-anthracite/60">
                  Les éléments de couverture et de zinguerie accompagnent ce
                  cheminement aux endroits où l’eau doit être récupérée ou
                  franchir un raccord.
                </p>
              </div>

              <div className="relative border-t border-anthracite/15 pt-14">
                <div className="absolute -left-12 top-10 flex h-8 w-8 items-center justify-center bg-ivory sm:-left-20 sm:h-16 sm:w-16">
                  <Droplets
                    aria-hidden="true"
                    strokeWidth={1.3}
                    className="h-6 w-6 text-terracotta sm:h-8 sm:w-8"
                  />
                </div>

                <span className="font-mono text-xs uppercase tracking-[0.16em] text-terracotta">
                  Évacuation
                </span>

                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-anthracite sm:text-3xl">
                  L’eau est évacuée hors de la toiture
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-anthracite/60">
                  Le système d’évacuation poursuit ensuite le cheminement de
                  l’eau afin de l’éloigner de la couverture.
                </p>
              </div>
            </div>

            <div className="mt-14 border-t border-anthracite/15 pt-8 sm:ml-20">
              <Link
                href="/fuites"
                className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-terracotta"
              >
                Fuite ou infiltration de toiture
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}