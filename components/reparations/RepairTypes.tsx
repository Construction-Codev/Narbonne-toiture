import {
  Blocks,
  CornerDownRight,
  House,
  Wrench,
} from "lucide-react";

const repairTypes = [
  {
    icon: Blocks,
    number: "01",
    title: "Tuiles cassées ou déplacées",
    description:
      "Une tuile endommagée, déplacée ou manquante peut nécessiter une intervention ciblée afin de rétablir la continuité de la couverture.",
  },
  {
    icon: House,
    number: "02",
    title: "Zones de couverture à reprendre",
    description:
      "Certaines parties de la toiture peuvent présenter un défaut localisé sans que l’ensemble de la couverture ait besoin d’être rénové.",
  },
  {
    icon: CornerDownRight,
    number: "03",
    title: "Raccords et points particuliers",
    description:
      "Les raccords entre différents éléments de toiture demandent une attention particulière lorsqu’une anomalie apparaît.",
  },
  {
    icon: Wrench,
    number: "04",
    title: "Dommages localisés",
    description:
      "Lorsqu’un problème reste limité à une zone identifiable, une réparation adaptée peut permettre d’intervenir sans engager une réfection complète.",
  },
];

export default function RepairTypes() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Introduction */}
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              Réparations
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-anthracite sm:text-5xl">
              Tous les problèmes ne demandent pas de refaire la toiture.
            </h2>

            <p className="mt-7 max-w-md text-lg leading-8 text-anthracite/65">
              Une réparation peut concerner une partie précise de la
              couverture. L’intervention dépend du défaut constaté et de
              l’état des éléments qui l’entourent.
            </p>
          </div>

          {/* Types de réparations */}
          <div className="lg:col-span-8 lg:pt-6">
            <div className="border-t border-anthracite/15">
              {repairTypes.map((repair) => {
                const Icon = repair.icon;

                return (
                  <article
                    key={repair.number}
                    className="
                      grid
                      grid-cols-[48px_minmax(0,1fr)]
                      gap-x-6
                      gap-y-4
                      border-b
                      border-anthracite/15
                      py-8
                      xl:grid-cols-[64px_220px_minmax(0,1fr)]
                      xl:gap-x-8
                      xl:py-10
                    "
                  >
                    {/* Numéro + icône */}
                    <div className="row-span-2 xl:row-span-1">
                      <span className="block font-mono text-xs text-anthracite/35">
                        {repair.number}
                      </span>

                      <Icon
                        strokeWidth={1.5}
                        className="mt-6 h-6 w-6 text-terracotta"
                      />
                    </div>

                    {/* Titre */}
                    <h3 className="text-xl font-semibold tracking-[-0.025em] text-anthracite xl:text-2xl">
                      {repair.title}
                    </h3>

                    {/* Description */}
                    <p className="col-start-2 max-w-xl leading-7 text-anthracite/65 xl:col-start-3">
                      {repair.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}