import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ZinguerieProject() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-8">
            <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
              <Image
                src="/images/services/zinguerie-chantier.jpg"
                alt="Détail de travaux de zinguerie sur une toiture"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />

              <div
                aria-hidden="true"
                className="absolute bottom-0 right-0 h-24 w-px bg-white/70"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-0 right-0 h-px w-24 bg-white/70"
              />
            </div>
          </div>

          <div className="lg:col-span-4 lg:pb-4">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-terracotta">
              Travail de toiture
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-anthracite sm:text-4xl">
              Des détails qui font partie de l’ensemble.
            </h2>

            <p className="mt-6 leading-7 text-anthracite/65">
              Couverture et zinguerie sont étroitement liées. Les raccords,
              les points particuliers et l’évacuation de l’eau doivent être
              considérés dans le fonctionnement global de la toiture.
            </p>

            <Link
              href="/realisations"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-terracotta"
            >
              Découvrir nos réalisations
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}