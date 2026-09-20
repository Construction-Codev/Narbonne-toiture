import { Search, Target, Wrench } from "lucide-react";

const points = [
  {
    icon: Search,
    title: "Observer",
    text: "Identifier la zone concernée et comprendre ce qui nécessite une intervention.",
  },
  {
    icon: Target,
    title: "Cibler",
    text: "Déterminer si une réparation localisée peut répondre au problème rencontré.",
  },
  {
    icon: Wrench,
    title: "Réparer",
    text: "Intervenir sur les éléments concernés en conservant ce qui ne nécessite pas d’être repris.",
  },
];

export default function RepairDiagnostic() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              Avant de réparer
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-anthracite sm:text-5xl">
              Commencer par comprendre ce qui se passe sur la toiture.
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-8 text-anthracite/65">
              Une tuile endommagée, une zone déplacée ou un défaut localisé ne
              nécessitent pas automatiquement une rénovation complète de la
              couverture. L’intervention doit correspondre à l’état réellement
              observé.
            </p>
          </div>

          <div className="lg:col-span-7 lg:pt-10">
            <div className="border-t border-anthracite/15">
              {points.map((point, index) => {
                const Icon = point.icon;

                return (
                  <div
                    key={point.title}
                    className="grid grid-cols-[44px_1fr] gap-5 border-b border-anthracite/15 py-8 sm:grid-cols-[60px_150px_1fr] sm:items-start"
                  >
                    <div className="flex h-10 w-10 items-center justify-center text-terracotta">
                      <Icon strokeWidth={1.6} className="h-6 w-6" />
                    </div>

                    <div className="sm:pt-2">
                      <span className="mb-2 block font-mono text-xs text-anthracite/35 sm:hidden">
                        0{index + 1}
                      </span>

                      <h3 className="text-xl font-semibold tracking-[-0.02em] text-anthracite">
                        {point.title}
                      </h3>
                    </div>

                    <p className="col-start-2 leading-7 text-anthracite/65 sm:col-start-auto sm:pt-2">
                      {point.text}
                    </p>
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