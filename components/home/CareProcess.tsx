import Link from "next/link";
import { ArrowUpRight, Droplets, ShieldCheck, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    eyebrow: "Nettoyer",
    title: "Retrouver une toiture propre",
    description:
      "Mousses, lichens et salissures s’installent progressivement sur les tuiles. Un nettoyage adapté permet de retrouver une couverture propre et de préparer les étapes d’entretien suivantes.",
    href: "/nettoyage-toiture",
    linkLabel: "Découvrir le nettoyage",
    icon: Sparkles,
  },
  {
    number: "02",
    eyebrow: "Protéger",
    title: "Limiter le retour des végétaux",
    description:
      "Le démoussage complète l’entretien de la couverture en traitant les mousses et micro-organismes présents sur la toiture.",
    href: "/demoussage-toiture",
    linkLabel: "Découvrir le démoussage",
    icon: Droplets,
  },
  {
    number: "03",
    eyebrow: "Préserver",
    title: "Renforcer la protection des tuiles",
    description:
      "Selon l’état et le type de couverture, un traitement hydrofuge peut compléter l’entretien afin de limiter la pénétration de l’eau dans les matériaux.",
    href: "/hydrofuge-toiture",
    linkLabel: "Découvrir l’hydrofuge",
    icon: ShieldCheck,
  },
];

export default function CareProcess() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Introduction */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
              Entretien de toiture
            </p>

            <h2 className="max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-anthracite sm:text-5xl lg:text-6xl">
              Nettoyer.
              <br />
              Protéger.
              <br />
              <span className="text-terracotta">Préserver.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-1">
            <p className="max-w-xl text-base leading-7 text-anthracite/65 sm:text-lg sm:leading-8">
              Une toiture s&apos;entretient dans le temps. Narbonne Toiture
              intervient à chaque étape pour nettoyer la couverture, traiter
              les végétaux présents et adapter sa protection à son état.
            </p>

            <Link
              href="/services"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-anthracite transition-colors hover:text-terracotta"
            >
              Voir tous nos services

              <ArrowUpRight
                size={17}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Séparateur */}
        <div className="my-14 h-px bg-border sm:my-16 lg:my-20" />

        {/* Parcours */}
        <div className="grid lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className={`group relative py-10 first:pt-0 last:pb-0 lg:px-8 lg:py-0 lg:first:pl-0 lg:last:pr-0 ${
                  index !== steps.length - 1
                    ? "border-b border-border lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                {/* Numéro + icône */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-anthracite/30">
                    {step.number}
                  </span>

                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ivory text-terracotta transition-colors duration-300 group-hover:bg-terracotta group-hover:text-white">
                    <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                </div>

                {/* Contenu */}
                <div className="mt-10">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
                    {step.eyebrow}
                  </p>

                  <h3 className="mt-3 max-w-sm text-2xl font-bold leading-tight tracking-[-0.025em] text-anthracite">
                    {step.title}
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-anthracite/60">
                    {step.description}
                  </p>

                  <Link
                    href={step.href}
                    className="group/link mt-7 inline-flex items-center gap-2 text-sm font-bold text-anthracite transition-colors hover:text-terracotta"
                  >
                    {step.linkLabel}

                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Phrase de transition */}
        <div className="mt-16 rounded-[2rem] bg-ivory px-6 py-8 sm:px-9 lg:mt-24 lg:flex lg:items-center lg:justify-between lg:px-10 lg:py-9">
          <p className="max-w-3xl text-xl font-bold leading-snug tracking-[-0.02em] text-anthracite sm:text-2xl">
            L&apos;entretien ne remplace pas une réparation lorsque la toiture
            présente un défaut.
          </p>

          <Link
            href="/reparations"
            className="group mt-6 inline-flex shrink-0 items-center gap-2 font-bold text-terracotta lg:ml-10 lg:mt-0"
          >
            Réparation de toiture
            <ArrowUpRight
              size={18}
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}