import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RepairDecision() {
  return (
    <section className="overflow-hidden bg-anthracite text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sand">
              Réparer ou rénover ?
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              La bonne intervention dépend de l’étendue du problème.
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-8 text-white/65">
              Une anomalie localisée et une couverture globalement dégradée ne
              conduisent pas au même type de travaux. L’objectif est
              d’intervenir à la bonne échelle.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-white/15">
              <div className="grid gap-6 border-b border-white/15 py-9 sm:grid-cols-[150px_1fr] sm:gap-10">
                <span className="font-mono text-sm text-sand">
                  01 — CIBLER
                </span>

                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.025em]">
                    Réparation localisée
                  </h3>

                  <p className="mt-4 max-w-xl leading-7 text-white/65">
                    Lorsque le problème concerne une zone précise et que le
                    reste de la couverture ne nécessite pas d’intervention
                    importante, une réparation ciblée peut être envisagée.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 border-b border-white/15 py-9 sm:grid-cols-[150px_1fr] sm:gap-10">
                <span className="font-mono text-sm text-sand">
                  02 — ÉLARGIR
                </span>

                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.025em]">
                    Travaux de couverture plus étendus
                  </h3>

                  <p className="mt-4 max-w-xl leading-7 text-white/65">
                    Lorsque plusieurs zones sont concernées ou que l’état de
                    la couverture nécessite une intervention plus globale, des
                    travaux de rénovation peuvent être plus adaptés.
                  </p>

                  <Link
                    href="/couverture"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-sand transition-opacity hover:opacity-70"
                  >
                    Découvrir les travaux de couverture
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <p className="mt-8 max-w-2xl text-sm leading-6 text-white/45">
              Le choix dépend de l’état observé sur la toiture. Une inspection
              permet de déterminer l’étendue de l’intervention à envisager.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}