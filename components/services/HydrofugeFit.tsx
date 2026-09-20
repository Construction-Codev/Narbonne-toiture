import Link from "next/link";
import {
  ArrowRight,
  CircleCheck,
  Layers3,
  Search,
  Sparkles,
} from "lucide-react";

const criteria = [
  {
    icon: Search,
    eyebrow: "État",
    title: "Une couverture à examiner",
    text: "Avant d’envisager une protection, l’état visible de la toiture doit être pris en compte. Des éléments endommagés ou un désordre identifié demandent d’abord une réponse adaptée.",
  },
  {
    icon: Layers3,
    eyebrow: "Support",
    title: "Un matériau compatible",
    text: "Toutes les couvertures ne réagissent pas de la même manière. La nature du matériau fait partie des éléments à considérer avant de déterminer si un traitement hydrofuge est pertinent.",
  },
  {
    icon: Sparkles,
    eyebrow: "Entretien",
    title: "Une toiture préparée",
    text: "La présence de salissures, de mousses ou de lichens peut nécessiter un entretien préalable avant d’envisager une protection complémentaire.",
  },
];

export default function HydrofugeFit() {
  return (
    <section className="overflow-hidden bg-ivory py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
          {/* Introduction */}
          <div className="relative">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta">
              Avant de protéger
            </span>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-anthracite sm:text-5xl lg:text-6xl">
              L’hydrofuge est-il adapté à votre toiture ?
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-muted sm:text-lg">
              La réponse ne dépend pas uniquement de l’âge de la toiture. Son
              état, son matériau et l’entretien dont elle a besoin doivent être
              considérés ensemble.
            </p>

            <div className="mt-10 flex max-w-md items-start gap-4 border-t border-anthracite/15 pt-7">
              <CircleCheck
                size={24}
                strokeWidth={1.5}
                className="mt-1 shrink-0 text-terracotta"
                aria-hidden="true"
              />

              <p className="text-sm leading-7 text-anthracite/65">
                L’objectif est de déterminer si une protection a du sens pour
                la couverture présente, plutôt que de l’envisager
                systématiquement.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none mt-20 hidden select-none text-[7rem] font-semibold leading-none tracking-[-0.08em] text-anthracite/[0.035] lg:block xl:text-[9rem]"
            >
              PROTÉGER
            </div>
          </div>

          {/* Critères */}
          <div className="border-t border-anthracite/15">
            {criteria.map((criterion) => {
              const Icon = criterion.icon;

              return (
                <article
                  key={criterion.title}
                  className="grid gap-5 border-b border-anthracite/15 py-9 sm:grid-cols-[54px_110px_190px_1fr] sm:gap-6 sm:py-11 xl:grid-cols-[58px_120px_210px_1fr] xl:gap-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center text-terracotta">
                    <Icon
                      size={28}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="pt-1 text-xs font-bold uppercase tracking-[0.18em] text-terracotta">
                    {criterion.eyebrow}
                  </span>

                  <h3 className="text-xl font-semibold leading-7 tracking-[-0.025em] text-anthracite">
                    {criterion.title}
                  </h3>

                  <p className="max-w-md text-sm leading-7 text-muted sm:text-base">
                    {criterion.text}
                  </p>
                </article>
              );
            })}

            {/* Maillage vers l'entretien */}
            <div className="py-9 sm:py-10">
              <p className="max-w-2xl text-xl font-medium leading-8 tracking-[-0.02em] text-anthracite sm:text-2xl">
                Votre toiture présente surtout des salissures, mousses ou
                lichens ?
              </p>

              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
                <Link
                  href="/nettoyage-toiture"
                  className="inline-flex items-center gap-2 border-b border-terracotta pb-2 text-sm font-bold uppercase tracking-[0.12em] text-anthracite transition hover:text-terracotta"
                >
                  Nettoyage
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>

                <Link
                  href="/demoussage-toiture"
                  className="inline-flex items-center gap-2 border-b border-terracotta pb-2 text-sm font-bold uppercase tracking-[0.12em] text-anthracite transition hover:text-terracotta"
                >
                  Démoussage
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}