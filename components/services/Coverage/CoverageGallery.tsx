import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CoverageGallery() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-24">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta">
              Sur le terrain
            </span>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-anthracite sm:text-5xl lg:text-6xl">
              La couverture, du support jusqu’aux dernières tuiles.
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-xl text-base leading-8 text-muted sm:text-lg">
              Préparation du support, mise en place des éléments de couverture
              et finitions : quelques images de travaux réalisés sur le terrain.
            </p>
          </div>
        </div>

        {/* Galerie */}
        <div className="mt-16 grid gap-4 sm:gap-5 lg:mt-24 lg:grid-cols-12 lg:grid-rows-[300px_340px]">
          {/* Grande photo : artisan en train de poser les tuiles */}
          <figure className="group relative min-h-[520px] overflow-hidden bg-anthracite lg:col-span-7 lg:row-span-2 lg:min-h-0">
            <Image
              src="/images/realisations/couverture-chantier-pose-tuiles.jpg"
              alt="Artisan en train de poser des tuiles sur une toiture en rénovation"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-anthracite/80 via-anthracite/25 to-transparent px-6 pb-6 pt-28 sm:px-8 sm:pb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-light">
                En chantier
              </span>

              <p className="mt-2 max-w-md text-lg font-medium text-white sm:text-xl">
                Mise en œuvre d’une couverture en tuiles
              </p>
            </div>
          </figure>

          {/* Photo en haut à droite : toiture terminée avec faîtage */}
          <figure className="group relative min-h-[300px] overflow-hidden bg-ivory lg:col-span-5 lg:min-h-0">
            <Image
              src="/images/realisations/couverture-toiture-terminee.jpg"
              alt="Couverture en tuiles terminée avec son faîtage"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            />

            <div className="absolute bottom-0 left-0 bg-white px-5 py-4 sm:px-6">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">
                Couverture terminée
              </span>
            </div>
          </figure>

          {/* Bas à droite */}
          <div className="grid min-h-[340px] sm:grid-cols-[1.15fr_0.85fr] lg:col-span-5">
            {/* Photo écran sous-toiture + liteaux + vignes */}
            <figure className="group relative min-h-[320px] overflow-hidden bg-anthracite sm:min-h-0">
              <Image
                src="/images/realisations/couverture-ecran-sous-toiture.jpg"
                alt="Préparation d'une couverture avec écran sous-toiture et liteaux"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 58vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />
            </figure>

            {/* Bloc éditorial */}
            <div className="flex flex-col justify-between bg-ivory p-7 sm:p-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">
                  Sous la tuile
                </span>

                <p className="mt-4 text-xl font-semibold leading-8 tracking-[-0.025em] text-anthracite">
                  Une couverture se construit aussi dans ce qui ne se voit plus.
                </p>
              </div>

              <Link
                href="/realisations"
                className="group mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-anthracite transition hover:text-terracotta"
              >
                Voir les réalisations

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}