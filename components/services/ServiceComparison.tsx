import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type ServiceKey = "cleaning" | "moss" | "hydrofuge";

type ServiceComparisonProps = {
  current: ServiceKey;
};

const services = [
  {
    key: "cleaning" as const,
    number: "01",
    eyebrow: "Entretien",
    title: "Nettoyage",
    description:
      "Le nettoyage vise à retirer les salissures et dépôts présents sur la couverture afin d’entretenir son aspect et de mieux observer son état.",
    href: "/nettoyage-toiture",
    link: "Découvrir le nettoyage",
    currentLabel: "Nettoyage de toiture à Narbonne",
    icon: Sparkles,
  },
  {
    key: "moss" as const,
    number: "02",
    eyebrow: "Végétaux",
    title: "Démoussage",
    description:
      "Le démoussage concerne plus spécifiquement les mousses, lichens et autres végétaux qui se sont installés progressivement sur la couverture.",
    href: "/demoussage-toiture",
    link: "Découvrir le démoussage",
    currentLabel: "Démoussage de toiture à Narbonne",
    icon: Droplets,
  },
  {
    key: "hydrofuge" as const,
    number: "03",
    eyebrow: "Protection",
    title: "Hydrofuge",
    description:
      "Un traitement hydrofuge peut compléter l’entretien lorsque l’état et le matériau de la couverture permettent d’envisager cette protection.",
    href: "/hydrofuge-toiture",
    link: "Découvrir l’hydrofuge",
    currentLabel: "Traitement hydrofuge à Narbonne",
    icon: ShieldCheck,
  },
];

export default function ServiceComparison({
  current,
}: ServiceComparisonProps) {
  return (
    <section className="bg-ivory py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
              Comprendre les prestations

              <span
                className="h-px w-14 bg-terracotta/50"
                aria-hidden="true"
              />
            </p>

            <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-anthracite sm:text-5xl lg:text-6xl">
              Nettoyage, démoussage
              <br />
              <span className="text-terracotta">ou hydrofuge ?</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="max-w-lg text-base leading-7 text-anthracite/60">
              Ces interventions répondent à des objectifs différents. Elles ne
              sont donc pas systématiquement nécessaires en même temps : le
              besoin dépend de l&apos;état de la toiture.
            </p>
          </div>
        </div>

        <div className="mt-14 grid border-l border-t border-anthracite/10 lg:mt-16 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            const isCurrent = service.key === current;

            return (
              <article
                key={service.key}
                className={`relative flex min-h-[430px] flex-col border-b border-r border-anthracite/10 p-7 sm:p-9 ${
                  isCurrent ? "bg-white" : ""
                }`}
              >
                {isCurrent && (
                  <span className="absolute right-6 top-6 rounded-full bg-terracotta/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-terracotta">
                    Vous êtes ici
                  </span>
                )}

                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold tracking-[0.18em] text-terracotta">
                    {service.number}
                  </span>

                  <span
                    className="h-px w-8 bg-terracotta/30"
                    aria-hidden="true"
                  />

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-anthracite/40">
                    {service.eyebrow}
                  </span>
                </div>

                <div className="mt-12">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                    <Icon size={20} aria-hidden="true" />
                  </span>

                  <h3 className="mt-6 text-3xl font-bold tracking-[-0.035em] text-anthracite">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-anthracite/55">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto pt-10">
                  {isCurrent ? (
                    <span className="text-sm font-bold text-terracotta">
                      {service.currentLabel}
                    </span>
                  ) : (
                    <Link
                      href={service.href}
                      className="group inline-flex items-center gap-3 text-sm font-bold text-anthracite transition-colors hover:text-terracotta"
                    >
                      {service.link}

                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-anthracite/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-6 text-anthracite/50">
            Vous ne savez pas quelle intervention correspond à l&apos;état de
            votre toiture ? Décrivez-nous simplement la situation.
          </p>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-3 font-bold text-anthracite transition-colors hover:text-terracotta"
          >
            Nous contacter

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta text-white">
              <ArrowRight
                size={16}
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