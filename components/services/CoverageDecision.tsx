import Link from "next/link";
import {
  ArrowRight,
  CircleDotDashed,
  ScanSearch,
} from "lucide-react";

export default function CoverageDecision() {
  return (
    <section className="overflow-hidden bg-anthracite text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.28fr_0.72fr]">
          {/* Grande masse sombre */}
          <div className="relative py-20 sm:py-24 lg:border-r lg:border-white/10 lg:py-32 lg:pr-20">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta-light">
              Adapter l’intervention
            </span>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Réparer une zone ou intervenir plus largement ?
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Une tuile déplacée, une infiltration ou une dégradation plus
              étendue ne conduisent pas nécessairement au même type
              d’intervention. Il faut d’abord situer le problème et comprendre
              ce qu’il concerne.
            </p>

            <div className="mt-14 grid gap-10 border-t border-white/15 pt-10 sm:grid-cols-2 sm:gap-12">
              <div>
                <ScanSearch
                  size={29}
                  strokeWidth={1.4}
                  className="text-terracotta-light"
                  aria-hidden="true"
                />

                <h3 className="mt-6 text-xl font-semibold tracking-[-0.025em]">
                  Un désordre localisé
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-white/55">
                  Lorsqu’une partie précise de la couverture est concernée,
                  l’intervention peut se concentrer sur les éléments à
                  examiner ou à réparer.
                </p>

                <Link
                  href="/reparations"
                  className="mt-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:text-terracotta-light"
                >
                  Réparation de toiture
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>

              <div>
                <CircleDotDashed
                  size={29}
                  strokeWidth={1.4}
                  className="text-terracotta-light"
                  aria-hidden="true"
                />

                <h3 className="mt-6 text-xl font-semibold tracking-[-0.025em]">
                  Un besoin plus global
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-white/55">
                  Lorsque plusieurs zones sont concernées, l’état général de la
                  couverture permet d’orienter la réflexion vers une
                  intervention plus étendue.
                </p>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[-1rem] right-8 hidden select-none text-[9rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.025] xl:block"
            >
              TOIT
            </div>
          </div>

          {/* Masse claire imbriquée */}
          <div className="bg-ivory px-7 py-14 text-anthracite sm:px-10 lg:my-20 lg:-ml-px lg:px-12 lg:py-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
              Le bon point de départ
            </span>

            <p className="mt-5 text-3xl font-semibold leading-[1.25] tracking-[-0.035em] sm:text-4xl">
              Identifier ce que vous observez.
            </p>

            <div className="mt-10 border-t border-anthracite/15">
              <Link
                href="/fuites"
                className="group flex items-center justify-between gap-6 border-b border-anthracite/15 py-6"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-terracotta">
                    Eau à l’intérieur
                  </span>
                  <p className="mt-2 font-semibold">
                    Fuite ou infiltration
                  </p>
                </div>

                <ArrowRight
                  size={18}
                  className="shrink-0 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/reparations"
                className="group flex items-center justify-between gap-6 border-b border-anthracite/15 py-6"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-terracotta">
                    Élément endommagé
                  </span>
                  <p className="mt-2 font-semibold">
                    Réparation de toiture
                  </p>
                </div>

                <ArrowRight
                  size={18}
                  className="shrink-0 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/contact"
                className="group flex items-center justify-between gap-6 py-6"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-terracotta">
                    Vous avez un doute
                  </span>
                  <p className="mt-2 font-semibold">
                    Présenter votre toiture
                  </p>
                </div>

                <ArrowRight
                  size={18}
                  className="shrink-0 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}