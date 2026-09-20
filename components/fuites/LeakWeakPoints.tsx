import Link from "next/link";
import {
  ArrowUpRight,
  Blocks,
  Droplets,
  House,
  MoveDown,
} from "lucide-react";

const weakPoints = [
  {
    icon: Blocks,
    title: "Tuiles et couverture",
    description:
      "Une tuile cassée, déplacée ou manquante peut créer un point de passage pour l’eau et exposer les éléments situés sous la couverture.",
  },
  {
    icon: House,
    title: "Raccords de toiture",
    description:
      "Les jonctions entre différents éléments de la toiture font partie des zones à examiner lorsqu’une infiltration apparaît.",
  },
  {
    icon: Droplets,
    title: "Éléments de zinguerie",
    description:
      "Certains éléments métalliques participent à l’évacuation de l’eau et à l’étanchéité des points particuliers de la toiture.",
  },
  {
    icon: MoveDown,
    title: "Évacuation des eaux",
    description:
      "Le cheminement et l’évacuation de l’eau doivent également être pris en compte lors de l’examen d’un problème d’infiltration.",
  },
];

export default function LeakWeakPoints() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              Points à examiner
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-anthracite sm:text-5xl">
              Une infiltration peut avoir plusieurs origines.
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-8 text-anthracite/65">
              La couverture forme un ensemble. Lorsqu’une fuite apparaît,
              plusieurs éléments peuvent devoir être examinés pour comprendre
              par où l’eau pénètre.
            </p>

            <Link
              href="/zinguerie"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-terracotta"
            >
              Voir nos travaux de zinguerie
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-7 lg:pt-8">
            <div className="grid sm:grid-cols-2">
              {weakPoints.map((point, index) => {
                const Icon = point.icon;

                return (
                  <article
                    key={point.title}
                    className={[
                      "min-h-[260px] py-8",
                      index % 2 === 0
                        ? "sm:border-r sm:border-anthracite/15 sm:pr-9"
                        : "sm:pl-9",
                      index < 2
                        ? "border-b border-anthracite/15"
                        : "",
                    ].join(" ")}
                  >
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.4}
                      className="h-7 w-7 text-terracotta"
                    />

                    <h3 className="mt-10 max-w-xs text-xl font-semibold tracking-[-0.025em] text-anthracite sm:text-2xl">
                      {point.title}
                    </h3>

                    <p className="mt-4 max-w-sm leading-7 text-anthracite/60">
                      {point.description}
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