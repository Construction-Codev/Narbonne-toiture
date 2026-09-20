import { Droplets } from "lucide-react";

const principles = [
  {
    label: "En surface",
    title: "Limiter la pénétration de l’eau",
    text: "Une protection hydrofuge vise à réduire la pénétration de l’eau dans la surface des éléments de couverture lorsque ceux-ci sont compatibles avec ce type de traitement.",
  },
  {
    label: "Avant tout",
    title: "Partir d’une couverture en état adapté",
    text: "L’état des tuiles et de la couverture doit être pris en compte avant d’envisager une protection complémentaire.",
  },
  {
    label: "À distinguer",
    title: "Protéger n’est pas réparer",
    text: "Un traitement hydrofuge ne remplace ni une réparation de toiture, ni le remplacement d’éléments endommagés, ni la recherche de l’origine d’une infiltration.",
  },
];

export default function HydrofugeUnderstanding() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-24">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta">
              Comprendre la protection
            </span>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-anthracite sm:text-5xl lg:text-6xl">
              L’hydrofuge agit sur la surface de la couverture.
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-xl text-base leading-8 text-muted sm:text-lg">
              Il s’agit d’une protection complémentaire. Sa pertinence dépend
              notamment du matériau, de l’état de la toiture et de l’entretien
              dont elle a besoin.
            </p>
          </div>
        </div>

        {/* Corps éditorial */}
        <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          {/* Élément graphique */}
          <div className="relative min-h-[300px] border-l border-terracotta/25 pl-8 sm:pl-10 lg:min-h-[520px]">
            <Droplets
              size={38}
              strokeWidth={1.3}
              className="text-terracotta"
              aria-hidden="true"
            />

            <p className="mt-8 max-w-sm text-2xl font-medium leading-9 tracking-[-0.025em] text-anthracite sm:text-3xl sm:leading-10">
              L’eau, la surface et l’état de la couverture doivent être
              considérés ensemble.
            </p>

            <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
              Le bon réflexe n’est donc pas de chercher à appliquer
              systématiquement un traitement, mais de déterminer d’abord ce
              dont la toiture a réellement besoin.
            </p>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-8 hidden select-none text-[7rem] font-semibold leading-[0.75] tracking-[-0.08em] text-anthracite/[0.035] lg:block xl:text-[9rem]"
            >
              EAU
            </div>
          </div>

          {/* Principes */}
          <div className="border-t border-border">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="grid gap-4 border-b border-border py-8 sm:grid-cols-[130px_220px_1fr] sm:gap-7 sm:py-10 xl:grid-cols-[145px_245px_1fr] xl:gap-9"
              >
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">
                  {principle.label}
                </span>

                <h3 className="text-xl font-semibold leading-7 tracking-[-0.025em] text-anthracite">
                  {principle.title}
                </h3>

                <p className="max-w-md text-sm leading-7 text-muted sm:text-base">
                  {principle.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}