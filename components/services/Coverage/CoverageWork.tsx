import Link from "next/link";
import {
  ArrowRight,
  CircleDot,
  Hammer,
  Search,
} from "lucide-react";

const interventions = [
  {
    icon: Search,
    label: "Observer",
    title: "Comprendre l’état de la couverture",
    text: "L’aspect des tuiles, les raccords et les différentes zones de la toiture donnent de premières indications sur les besoins du bâtiment.",
  },
  {
    icon: Hammer,
    label: "Intervenir",
    title: "Agir sur les éléments concernés",
    text: "Lorsqu’un désordre est identifié, l’intervention doit correspondre à sa nature et à la partie de la toiture concernée.",
  },
  {
    icon: CircleDot,
    label: "Préserver",
    title: "Entretenir la toiture dans le temps",
    text: "L’entretien de la couverture permet également de surveiller son évolution et d’intervenir lorsque son état le nécessite.",
  },
];

export default function CoverageWork() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Grande introduction */}
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta">
              Travaux de couverture
            </span>

            <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
              Une intervention sur une toiture commence par identifier ce qui
              concerne réellement la couverture et ce qui relève d’un autre
              élément de l’ensemble.
            </p>
          </div>

          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-anthracite sm:text-5xl lg:text-6xl">
            Entretenir, réparer ou intervenir plus largement sur la couverture.
          </h2>
        </div>

        {/* Grande ligne graphique */}
        <div className="relative mt-16 border-t border-anthracite/15 lg:mt-24">
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 h-[3px] w-24 -translate-y-[1px] bg-terracotta sm:w-36"
          />

          <div className="grid lg:grid-cols-3">
            {interventions.map((intervention, index) => {
              const Icon = intervention.icon;

              return (
                <article
                  key={intervention.title}
                  className={`py-10 lg:min-h-[390px] lg:py-14 ${
                    index !== interventions.length - 1
                      ? "border-b border-anthracite/15 lg:border-b-0 lg:border-r"
                      : ""
                  } ${
                    index === 0
                      ? "lg:pr-12"
                      : index === 1
                        ? "lg:px-12"
                        : "lg:pl-12"
                  }`}
                >
                  <div className="flex items-center justify-between gap-6">
                    <Icon
                      size={29}
                      strokeWidth={1.4}
                      className="text-terracotta"
                      aria-hidden="true"
                    />

                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-anthracite/30">
                      {intervention.label}
                    </span>
                  </div>

                  <h3 className="mt-14 max-w-xs text-2xl font-semibold leading-8 tracking-[-0.03em] text-anthracite sm:text-3xl sm:leading-10">
                    {intervention.title}
                  </h3>

                  <p className="mt-6 max-w-sm text-sm leading-7 text-muted sm:text-base">
                    {intervention.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Passerelles */}
        <div className="grid border-y border-anthracite/15 lg:grid-cols-2">
          <div className="py-8 lg:border-r lg:border-anthracite/15 lg:pr-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">
              Un problème localisé ?
            </p>

            <div className="mt-3 flex items-end justify-between gap-8">
              <p className="max-w-sm text-xl font-semibold leading-8 tracking-[-0.02em] text-anthracite">
                Une partie de votre toiture semble endommagée.
              </p>

              <Link
                href="/reparations"
                aria-label="Découvrir le service de réparation de toiture"
                className="group flex h-12 w-12 shrink-0 items-center justify-center bg-anthracite text-white transition hover:bg-terracotta"
              >
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <div className="border-t border-anthracite/15 py-8 lg:border-t-0 lg:pl-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">
              Une infiltration ?
            </p>

            <div className="mt-3 flex items-end justify-between gap-8">
              <p className="max-w-sm text-xl font-semibold leading-8 tracking-[-0.02em] text-anthracite">
                De l’eau apparaît à l’intérieur du bâtiment.
              </p>

              <Link
                href="/fuites"
                aria-label="Découvrir le service concernant les fuites de toiture"
                className="group flex h-12 w-12 shrink-0 items-center justify-center bg-anthracite text-white transition hover:bg-terracotta"
              >
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
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