import Link from "next/link";
import {
  ArrowRight,
  Eye,
  Sparkles,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Eye,
    title: "Observer la couverture",
    description:
      "L’état apparent de la toiture, les matériaux, la présence de mousses, de lichens et de salissures sont pris en compte avant l’entretien.",
  },
  {
    number: "02",
    icon: SearchCheck,
    title: "Adapter l’intervention",
    description:
      "Toutes les couvertures ne présentent pas les mêmes besoins. L’entretien doit être adapté à l’état et au type de toiture.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Nettoyer la toiture",
    description:
      "Le nettoyage vise à retirer les dépôts et salissures présents sur la couverture en tenant compte des matériaux concernés.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Évaluer la suite",
    description:
      "Selon l’état de la couverture, un démoussage complémentaire ou une protection hydrofuge peut être envisagé lorsque cela est pertinent.",
  },
];

export default function CleaningProcess() {
  return (
    <section className="bg-anthracite py-20 text-white sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Introduction */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.22em] text-terracotta-light">
              Notre approche

              <span
                className="h-px w-14 bg-terracotta-light/50"
                aria-hidden="true"
              />
            </p>

            <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Un nettoyage adapté
              <br />
              <span className="text-terracotta-light">
                à votre toiture.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="max-w-lg text-base leading-7 text-white/55 sm:text-lg">
              Avant de parler de traitement, il faut d&apos;abord considérer
              la couverture telle qu&apos;elle est : son matériau, son état et
              les salissures présentes.
            </p>
          </div>
        </div>

        {/* Étapes */}
        <div className="mt-14 grid border-l border-t border-white/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group min-h-[340px] border-b border-r border-white/10 p-7 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.18em] text-terracotta-light">
                    {step.number}
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06] text-terracotta-light">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                </div>

                <div className="mt-20">
                  <h3 className="text-xl font-bold tracking-[-0.02em] sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/50">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Conversion */}
        <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-white/50">
            Vous constatez des mousses, des dépôts ou un encrassement de votre
            toiture ? Présentez-nous son état et votre besoin.
          </p>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-3 font-bold text-white"
          >
            Demander un devis

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta transition hover:bg-terracotta-light">
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}