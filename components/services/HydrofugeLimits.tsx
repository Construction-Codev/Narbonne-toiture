import Link from "next/link";
import {
  ArrowRight,
  Check,
  Droplets,
  TriangleAlert,
  X,
} from "lucide-react";

const protectionPoints = [
  "Compléter l’entretien d’une couverture lorsque son état s’y prête",
  "Limiter la pénétration de l’eau en surface sur un matériau compatible",
  "Participer à une démarche de préservation de la couverture",
];

const repairPoints = [
  {
    title: "Éléments endommagés",
    text: "Des tuiles cassées, déplacées ou dégradées relèvent d’abord d’un besoin de réparation.",
  },
  {
    title: "Infiltration",
    text: "La présence d’eau à l’intérieur nécessite d’en rechercher l’origine plutôt que de la masquer par un traitement de surface.",
  },
  {
    title: "Désordre de couverture",
    text: "Un problème de couverture, de zinguerie ou d’un autre élément de toiture doit être traité selon sa cause.",
  },
];

export default function HydrofugeLimits() {
  return (
    <section className="overflow-hidden bg-anthracite py-20 text-white sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-24">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta-light">
              Faire la différence
            </span>

            <h2 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Protéger
              <span className="mx-3 text-terracotta-light">≠</span>
              réparer.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-white/60 sm:text-lg lg:pb-2">
            Une protection hydrofuge intervient en complément d’une couverture
            dont l’état permet de l’envisager. Elle n’a pas vocation à corriger
            un défaut ou une dégradation de la toiture.
          </p>
        </div>

        {/* Séparation */}
        <div className="mt-16 border-t border-white/15 lg:mt-24">
          <div className="grid lg:grid-cols-2">
            {/* Ce que la protection peut apporter */}
            <div className="py-12 lg:border-r lg:border-white/15 lg:py-16 lg:pr-16">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center text-terracotta-light">
                  <Droplets size={30} strokeWidth={1.4} aria-hidden="true" />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-light">
                  Protection
                </p>
              </div>

              <h3 className="mt-7 max-w-md text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                Ce qu’un hydrofuge peut apporter.
              </h3>

              <div className="mt-10 border-t border-white/10">
                {protectionPoints.map((point) => (
                  <div
                    key={point}
                    className="grid grid-cols-[32px_1fr] gap-5 border-b border-white/10 py-6"
                  >
                    <Check
                      size={19}
                      strokeWidth={1.8}
                      className="mt-1 text-terracotta-light"
                      aria-hidden="true"
                    />

                    <p className="max-w-lg text-sm leading-7 text-white/65 sm:text-base">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ce qu'il ne remplace pas */}
            <div className="border-t border-white/15 py-12 lg:border-t-0 lg:py-16 lg:pl-16">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center text-terracotta-light">
                  <TriangleAlert
                    size={29}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-light">
                  Réparation
                </p>
              </div>

              <h3 className="mt-7 max-w-md text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                Ce qu’il ne remplace pas.
              </h3>

              <div className="mt-10 border-t border-white/10">
                {repairPoints.map((point) => (
                  <div
                    key={point.title}
                    className="grid grid-cols-[32px_1fr] gap-5 border-b border-white/10 py-6"
                  >
                    <X
                      size={19}
                      strokeWidth={1.8}
                      className="mt-1 text-terracotta-light"
                      aria-hidden="true"
                    />

                    <div>
                      <h4 className="font-semibold text-white">
                        {point.title}
                      </h4>

                      <p className="mt-2 max-w-lg text-sm leading-7 text-white/55">
                        {point.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Orientation vers les bons services */}
        <div className="mt-12 flex flex-col gap-7 border-t border-white/15 pt-9 sm:mt-16 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div>
            <p className="max-w-2xl text-xl font-medium leading-8 tracking-[-0.02em] text-white sm:text-2xl">
              Vous constatez plutôt une dégradation ou une infiltration ?
            </p>

            <p className="mt-2 text-sm leading-7 text-white/50">
              Orientez-vous vers le service correspondant au problème observé.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-4">
            <Link
              href="/reparations"
              className="inline-flex items-center gap-2 border-b border-terracotta-light pb-2 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:text-terracotta-light"
            >
              Réparations
              <ArrowRight size={17} aria-hidden="true" />
            </Link>

            <Link
              href="/fuites"
              className="inline-flex items-center gap-2 border-b border-terracotta-light pb-2 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:text-terracotta-light"
            >
              Recherche de fuite
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}