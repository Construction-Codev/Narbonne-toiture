import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Observer la toiture",
    text: "La couverture est d’abord observée pour repérer les zones colonisées, leur importance et l’état général des éléments visibles.",
  },
  {
    number: "02",
    title: "Déterminer l’approche",
    text: "Le niveau d’intervention dépend de la présence de mousses et de lichens, mais aussi du matériau et de l’état de la couverture.",
  },
  {
    number: "03",
    title: "Retirer les végétaux",
    text: "Le démoussage vise à débarrasser la couverture des végétaux présents en tenant compte de ses caractéristiques.",
  },
  {
    number: "04",
    title: "Évaluer la protection",
    text: "Une fois la toiture entretenue, son état permet d’évaluer si une protection complémentaire peut être pertinente.",
  },
];

export default function MossProcess() {
  return (
    <section className="overflow-hidden bg-anthracite py-20 text-white sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta-light">
              Notre approche
            </span>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Une intervention qui commence par l’observation.
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              Toutes les toitures ne présentent ni la même colonisation ni le
              même état. Le démoussage doit donc être envisagé en fonction de la
              couverture réellement présente.
            </p>
          </div>
        </div>

        {/* Parcours */}
        <div className="relative mt-16 sm:mt-20 lg:mt-28">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-white/10 lg:block"
          />

          <div className="space-y-14 lg:space-y-0">
            {steps.map((step, index) => {
              const left = index % 2 === 0;

              return (
                <article
                  key={step.number}
                  className="relative lg:grid lg:min-h-[230px] lg:grid-cols-2"
                >
                  {/* Point central */}
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-10 z-10 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-terracotta lg:block"
                  />

                  <div
                    className={`${
                      left
                        ? "lg:col-start-1 lg:pr-20"
                        : "lg:col-start-2 lg:pl-20"
                    } ${left ? "" : "lg:text-left"}`}
                  >
                    <div
                      className={`flex gap-6 border-t border-white/15 pt-7 sm:gap-8 ${
                        left ? "lg:flex-row" : "lg:flex-row"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className="shrink-0 text-5xl font-semibold tracking-[-0.06em] text-terracotta-light sm:text-6xl"
                      >
                        {step.number}
                      </span>

                      <div className="pt-1">
                        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                          {step.title}
                        </h3>

                        <p className="mt-4 max-w-md text-sm leading-7 text-white/55 sm:text-base">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Sortie du processus */}
        <div className="mt-16 border-t border-white/10 pt-9 sm:mt-20 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-light">
              Votre toiture présente des mousses ou des lichens ?
            </p>

            <p className="mt-3 max-w-xl text-lg leading-8 text-white/70">
              Nous pouvons échanger sur son état et sur l’entretien à envisager
              à Narbonne ou ailleurs dans l’Aude.
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 border-b border-terracotta-light pb-2 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:text-terracotta-light lg:mt-0"
          >
            Demander un devis
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}