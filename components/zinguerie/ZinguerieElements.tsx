import {
  CornerDownRight,
  Droplets,
  House,
  MoveDown,
} from "lucide-react";

const elements = [
  {
    icon: Droplets,
    label: "01",
    title: "Collecte des eaux",
    description:
      "Les éléments situés en périphérie de la couverture participent à la récupération des eaux de pluie avant leur évacuation.",
  },
  {
    icon: MoveDown,
    label: "02",
    title: "Évacuation",
    description:
      "L’eau collectée doit être dirigée hors de la toiture par un cheminement adapté à la configuration du bâtiment.",
  },
  {
    icon: CornerDownRight,
    label: "03",
    title: "Raccords et jonctions",
    description:
      "Les rencontres entre différents éléments de toiture demandent une attention particulière afin de limiter les passages d’eau.",
  },
  {
    icon: House,
    label: "04",
    title: "Finitions de toiture",
    description:
      "La zinguerie complète le travail de couverture sur différents points particuliers et contribue à la finition de l’ensemble.",
  },
];

export default function ZinguerieElements() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
                Les points de zinguerie
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-anthracite sm:text-5xl">
                Là où la couverture rencontre l’eau.
              </h2>

              <p className="mt-7 max-w-lg text-lg leading-8 text-anthracite/65">
                La zinguerie intervient à différents endroits de la toiture.
                Son rôle dépend de la configuration de la couverture, du
                cheminement de l’eau et des raccords présents sur le bâtiment.
              </p>

              <div
                aria-hidden="true"
                className="mt-12 hidden max-w-sm lg:block"
              >
                <div className="h-px bg-anthracite/15" />
                <div className="ml-auto h-28 w-px bg-anthracite/15" />
                <div className="ml-auto h-px w-24 bg-terracotta" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-anthracite/15">
              {elements.map((element) => {
                const Icon = element.icon;

                return (
                  <article
                    key={element.title}
                    className="grid grid-cols-[48px_minmax(0,1fr)] gap-x-6 border-b border-anthracite/15 py-9 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-x-8"
                  >
                    <div className="flex flex-col items-start">
                      <span className="font-mono text-xs text-anthracite/35">
                        {element.label}
                      </span>

                      <Icon
                        aria-hidden="true"
                        strokeWidth={1.35}
                        className="mt-7 h-6 w-6 text-terracotta"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.025em] text-anthracite sm:text-2xl">
                        {element.title}
                      </h3>

                      <p className="mt-4 max-w-xl leading-7 text-anthracite/60">
                        {element.description}
                      </p>
                    </div>
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