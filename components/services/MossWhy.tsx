import { CloudRain, Compass, Leaf, Trees } from "lucide-react";

const factors = [
  {
    icon: CloudRain,
    title: "L’humidité",
    text: "Les zones qui restent humides plus longtemps offrent des conditions favorables au développement des mousses et autres végétaux.",
  },
  {
    icon: Compass,
    title: "L’exposition",
    text: "Deux versants d’une même toiture peuvent évoluer différemment selon leur orientation, leur ensoleillement et leur ventilation.",
  },
  {
    icon: Trees,
    title: "L’environnement",
    text: "La proximité de végétation, les zones ombragées et l’environnement immédiat peuvent influencer l’apparition de dépôts organiques.",
  },
  {
    icon: Leaf,
    title: "Le temps",
    text: "Avec les années, une couverture peut progressivement se marquer et laisser apparaître mousses, lichens ou autres traces végétales.",
  },
];

export default function MossWhy() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Colonne éditoriale */}
          <div className="lg:pt-10">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta">
              Comprendre sa toiture
            </span>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-anthracite sm:text-5xl lg:text-6xl">
              Pourquoi la mousse apparaît-elle ?
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-muted sm:text-lg">
              La présence de mousse ne dépend pas d’un seul facteur. Une toiture
              évolue selon son exposition, son environnement et les conditions
              auxquelles elle est soumise au fil du temps.
            </p>

            <div className="mt-10 border-l-2 border-terracotta pl-6">
              <p className="max-w-md text-lg font-medium leading-8 text-anthracite">
                Deux pans d’une même toiture peuvent présenter un aspect très
                différent.
              </p>

              <p className="mt-3 max-w-md text-sm leading-7 text-muted">
                C’est pourquoi l’état réel de la couverture doit être observé
                avant de déterminer l’entretien approprié.
              </p>
            </div>
          </div>

          {/* Liste des facteurs */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-16 hidden text-[12rem] font-semibold leading-none tracking-[-0.08em] text-ivory lg:block"
            >
              M
            </div>

            <div className="relative border-t border-border">
              {factors.map((factor) => {
                const Icon = factor.icon;

                return (
                  <div
                    key={factor.title}
                    className="group grid gap-5 border-b border-border py-8 sm:grid-cols-[72px_1fr] sm:py-10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center text-terracotta">
                      <Icon size={27} strokeWidth={1.5} aria-hidden="true" />
                    </div>

                    <div className="grid gap-3 md:grid-cols-[180px_1fr] md:gap-8">
                      <h3 className="text-xl font-semibold tracking-[-0.02em] text-anthracite">
                        {factor.title}
                      </h3>

                      <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">
                        {factor.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex justify-end">
              <p className="max-w-sm text-right text-xs font-semibold uppercase tracking-[0.18em] text-anthracite/40">
                Humidité · exposition · environnement · temps
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}