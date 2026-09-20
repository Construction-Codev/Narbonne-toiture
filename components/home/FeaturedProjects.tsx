import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Retrouver l’éclat d’une toiture",
    category: "Nettoyage de toiture",
    description:
      "Nettoyage et entretien d’une couverture en tuiles pour éliminer les salissures et végétaux accumulés.",
    href: "/realisations",
    image: "/images/home/card1.png",
    featured: true,
  },
  {
    title: "Une couverture rénovée et protégée",
    category: "Couverture",
    description:
      "Travaux de rénovation sur une couverture en tuiles afin de remettre en état les éléments qui le nécessitent.",
    href: "/realisations",
    image: "/images/home/card2.png",
    featured: false,
  },
  {
    title: "Des finitions soignées",
    category: "Zinguerie",
    description:
      "Travaux de zinguerie pour accompagner l’évacuation des eaux pluviales et les finitions de toiture.",
    href: "/realisations",
    image: "/images/home/card3.png",
    featured: false,
  },
];

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <Link
      href={project.href}
      className={`group relative block overflow-hidden rounded-[1.75rem] bg-anthracite ${
        project.featured
          ? "min-h-[560px] lg:min-h-[700px]"
          : "min-h-[400px] lg:min-h-0"
      }`}
    >
      <Image
        src={project.image}
        alt=""
        fill
        sizes={
          project.featured
            ? "(max-width: 1024px) 100vw, 55vw"
            : "(max-width: 1024px) 100vw, 45vw"
        }
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />

      {/* Dégradé */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"
        aria-hidden="true"
      />

      {/* Contenu */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 lg:p-9">
        <span className="inline-flex rounded-full bg-anthracite/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
          {project.category}
        </span>

        <h3
          className={`mt-4 max-w-xl font-bold leading-[1.05] tracking-[-0.035em] text-white ${
            project.featured
              ? "text-3xl sm:text-4xl"
              : "text-2xl sm:text-3xl"
          }`}
        >
          {project.title}
        </h3>

        <p className="mt-4 max-w-lg text-sm leading-6 text-white/70 sm:text-base">
          {project.description}
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white">
          Voir les réalisations

          <ArrowRight
            size={17}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}

export default function FeaturedProjects() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* En-tête */}
        <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-5 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
              Nos réalisations

              <span
                className="h-px w-16 bg-terracotta/60"
                aria-hidden="true"
              />
            </p>

            <h2 className="max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-anthracite sm:text-5xl lg:text-6xl">
              Des travaux adaptés
              <br />
              <span className="text-terracotta">
                à chaque toiture.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="max-w-lg text-base leading-7 text-anthracite/65 sm:text-lg">
              Découvrez les différents types d&apos;interventions réalisées
              autour de l&apos;entretien, de la rénovation et des travaux de
              toiture.
            </p>

            <Link
              href="/realisations"
              className="group mt-6 inline-flex items-center gap-3 font-bold text-anthracite transition-colors hover:text-terracotta"
            >
              Voir toutes les réalisations

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta text-white transition-transform group-hover:translate-x-1">
                <ArrowRight size={17} aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>

        {/* Grille */}
        <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          <ProjectCard project={projects[0]} />

          <div className="grid gap-4 lg:grid-rows-2">
            <ProjectCard project={projects[1]} />
            <ProjectCard project={projects[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}