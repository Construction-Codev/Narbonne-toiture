import { ArrowDownRight } from "lucide-react";

const signs = [
  {
    label: "Aspect",
    title: "Une déformation visible",
    description:
      "Une modification visible de la ligne de toiture ou de certains éléments peut conduire à examiner plus précisément la structure située sous la couverture.",
  },
  {
    label: "Bois",
    title: "Des éléments dégradés",
    description:
      "Lorsque des éléments en bois présentent une dégradation visible, leur état et leur rôle dans la structure doivent être pris en compte avant de déterminer les travaux adaptés.",
  },
  {
    label: "Travaux",
    title: "Une découverte pendant un chantier",
    description:
      "L’état de certains éléments de charpente peut également être observé lors de travaux de couverture, lorsque des parties auparavant masquées deviennent accessibles.",
  },
];

export default function CharpenteSigns() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-9">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              État de la charpente
            </p>

            <h2 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.05em] text-anthracite sm:text-6xl lg:text-7xl">
              Observer avant d’intervenir.
            </h2>
          </div>

          <div className="flex items-end lg:col-span-3 lg:justify-end">
            <p className="max-w-xs text-sm leading-6 text-anthracite/50">
              Un signe visible ne suffit pas, à lui seul, à déterminer
              l’ampleur des travaux nécessaires.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-anthracite/15 lg:mt-20">
          <div className="grid lg:grid-cols-3">
            {signs.map((sign, index) => (
              <article
                key={sign.title}
                className={[
                  "relative py-10 lg:min-h-[330px] lg:py-12",
                  index > 0
                    ? "border-t border-anthracite/15 lg:border-l lg:border-t-0 lg:pl-10"
                    : "",
                  index < signs.length - 1 ? "lg:pr-10" : "",
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-terracotta">
                    {sign.label}
                  </span>

                  <ArrowDownRight
                    aria-hidden="true"
                    strokeWidth={1.25}
                    className="h-5 w-5 text-anthracite/25"
                  />
                </div>

                <h3 className="mt-16 max-w-xs text-2xl font-semibold tracking-[-0.03em] text-anthracite sm:text-3xl">
                  {sign.title}
                </h3>

                <p className="mt-5 max-w-sm leading-7 text-anthracite/60">
                  {sign.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}