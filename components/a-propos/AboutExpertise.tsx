import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const expertise = [
  {
    title: "Couverture",
    text: "Travaux sur la couverture et les éléments qui assurent la protection du bâtiment.",
    href: "/couverture",
  },
  {
    title: "Entretien",
    text: "Nettoyage, démoussage et protection pour accompagner l'entretien de la toiture.",
    href: "/nettoyage-toiture",
  },
  {
    title: "Réparation",
    text: "Interventions ciblées lorsqu'une partie de la toiture nécessite une remise en état.",
    href: "/reparations",
  },
  {
    title: "Fuites",
    text: "Recherche de l'origine d'une infiltration avant d'adapter l'intervention.",
    href: "/fuites",
  },
  {
    title: "Zinguerie",
    text: "Éléments de raccord et d'évacuation des eaux associés à la toiture.",
    href: "/zinguerie",
  },
  {
    title: "Charpente",
    text: "Interventions liées à la structure qui supporte la couverture.",
    href: "/charpente",
  },
];

export default function AboutExpertise() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              Un métier, plusieurs savoir-faire
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.045em] text-anthracite sm:text-5xl">
              Regarder la toiture dans son ensemble.
            </h2>

            <p className="mt-6 max-w-md leading-7 text-anthracite/60">
              Couverture, évacuation de l&apos;eau, structure et entretien sont
              liés. L&apos;expérience du métier permet de ne pas réduire une
              toiture à ses seules tuiles.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border-t border-anthracite/15">
              {expertise.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group grid gap-3 border-b border-anthracite/15 py-7 sm:grid-cols-[150px_minmax(0,1fr)_24px] sm:items-start sm:gap-6"
                >
                  <h3 className="text-lg font-semibold text-anthracite">
                    {item.title}
                  </h3>

                  <p className="max-w-md leading-7 text-anthracite/55">
                    {item.text}
                  </p>

                  <ArrowUpRight className="h-5 w-5 text-anthracite/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-terracotta" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}