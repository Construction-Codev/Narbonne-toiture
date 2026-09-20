import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutProjects() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              Le travail réalisé
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-anthracite sm:text-5xl lg:text-6xl">
              Le métier se montre aussi sur les toitures.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="leading-7 text-anthracite/60">
              Découvrez une sélection de travaux de toiture présentés à travers
              différents chantiers et différentes situations.
            </p>

            <Link
              href="/realisations"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-anthracite transition-colors hover:text-terracotta"
            >
              Découvrir les réalisations
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Photo réelle */}
        <div className="relative mt-16 aspect-[16/8] overflow-hidden bg-anthracite/5 sm:aspect-[16/7]">
          <Image
            src="/images/couvreur-narbonne-experience.jpg"
            alt="Artisan couvreur en intervention sur une toiture"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
        </div>

        {/* Signature */}
        <div className="mt-6 border-t border-anthracite/15 pt-6">
          <div className="grid gap-3 font-mono text-xs uppercase tracking-[0.15em] text-anthracite/40 sm:grid-cols-3">
            <span>20 ans de métier</span>
            <span className="sm:text-center">Narbonne</span>
            <span className="sm:text-right">Aude</span>
          </div>
        </div>
      </div>
    </section>
  );
}