import Link from "next/link";
import {
  ArrowRight,
  Eye,
  Leaf,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    icon: Leaf,
    title: "Mousses et lichens",
    text: "Les végétaux peuvent progressivement coloniser les tuiles, notamment sur les zones exposées à l’humidité ou moins ensoleillées.",
  },
  {
    icon: Eye,
    title: "Salissures visibles",
    text: "Dépôts, traces et salissures peuvent modifier progressivement l’aspect général de la couverture.",
  },
  {
    icon: ShieldCheck,
    title: "Surveiller la couverture",
    text: "L’entretien est aussi l’occasion d’observer l’état apparent des tuiles et de repérer certains éléments qui peuvent nécessiter une attention particulière.",
  },
];

export default function CleaningWhy() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Introduction */}
          <div className="lg:col-span-5">
            <p className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
              Entretien de la couverture

              <span
                className="h-px w-14 bg-terracotta/60"
                aria-hidden="true"
              />
            </p>

            <h2 className="mt-6 max-w-xl text-4xl font-bold leading-[1.03] tracking-[-0.04em] text-anthracite sm:text-5xl lg:text-6xl">
              Pourquoi nettoyer
              <br />
              <span className="text-terracotta">sa toiture ?</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-anthracite/65 sm:text-lg sm:leading-8">
              Avec le temps, une toiture peut accumuler mousses, lichens,
              dépôts et salissures. Leur présence dépend notamment de
              l&apos;environnement du bâtiment, de l&apos;exposition et du type
              de couverture.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-anthracite/60">
              Un nettoyage permet d&apos;entretenir l&apos;aspect de la
              couverture et d&apos;observer plus facilement son état général.
              La méthode employée doit toutefois rester adaptée aux matériaux
              présents.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 font-bold text-anthracite transition-colors hover:text-terracotta"
            >
              Faire examiner ma toiture

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta text-white">
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>

          {/* Raisons */}
          <div className="lg:col-span-7">
            <div className="border-t border-anthracite/10">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={reason.title}
                    className="grid gap-5 border-b border-anthracite/10 py-8 sm:grid-cols-[56px_1fr] sm:py-9"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                      <Icon size={20} aria-hidden="true" />
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold tracking-[0.16em] text-terracotta/60">
                          0{index + 1}
                        </span>

                        <h3 className="text-xl font-bold tracking-[-0.02em] text-anthracite sm:text-2xl">
                          {reason.title}
                        </h3>
                      </div>

                      <p className="mt-3 max-w-xl text-sm leading-7 text-anthracite/55 sm:text-base">
                        {reason.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}