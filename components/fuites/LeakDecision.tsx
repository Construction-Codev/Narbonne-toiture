import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LeakDecision() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Titre */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              Du symptôme à la réparation
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-anthracite sm:text-5xl">
              Une infiltration est un symptôme. La réparation dépend de sa
              cause.
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-8 text-anthracite/65">
              Deux infiltrations visibles de manière similaire peuvent avoir
              des origines différentes. C’est la zone réellement concernée
              sur la toiture qui détermine les travaux à envisager.
            </p>
          </div>

          {/* Cheminement */}
          <div className="lg:col-span-7 lg:pt-8">
            <div className="border-t border-anthracite/15">
              <div className="grid gap-4 border-b border-anthracite/15 py-8 sm:grid-cols-[110px_minmax(0,1fr)] sm:gap-8">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-terracotta">
                  Symptôme
                </span>

                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.025em] text-anthracite">
                    Une infiltration devient visible
                  </h3>

                  <p className="mt-3 max-w-xl leading-7 text-anthracite/60">
                    Trace d’humidité ou présence d’eau : le problème devient
                    perceptible depuis l’intérieur du bâtiment.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 border-b border-anthracite/15 py-8 sm:grid-cols-[110px_minmax(0,1fr)] sm:gap-8">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-terracotta">
                  Origine
                </span>

                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.025em] text-anthracite">
                    La zone concernée est recherchée
                  </h3>

                  <p className="mt-3 max-w-xl leading-7 text-anthracite/60">
                    L’examen de la toiture permet de rechercher les éléments
                    susceptibles d’être à l’origine du passage de l’eau.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 border-b border-anthracite/15 py-8 sm:grid-cols-[110px_minmax(0,1fr)] sm:gap-8">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-terracotta">
                  Action
                </span>

                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.025em] text-anthracite">
                    L’intervention est adaptée au problème constaté
                  </h3>

                  <p className="mt-3 max-w-xl leading-7 text-anthracite/60">
                    Selon la situation, les travaux peuvent concerner une
                    partie précise de la couverture, un raccord ou un autre
                    élément de toiture.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <Link
                href="/reparations"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-terracotta"
              >
                Réparation de toiture
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/couverture"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-anthracite/60 transition-colors hover:text-terracotta"
              >
                Travaux de couverture
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}