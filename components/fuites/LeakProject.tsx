import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function LeakProject() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
              <Image
                src="/images/services/fuite-toiture-narbonne.jpg"
                alt="Détail d'une toiture lors de travaux de couverture"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-4 lg:pb-4">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-terracotta">
              Sur la toiture
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-anthracite sm:text-4xl">
              Comprendre avant d’intervenir.
            </h2>

            <p className="mt-6 leading-7 text-anthracite/65">
              L’observation des différents éléments de la toiture permet de
              replacer l’infiltration dans son contexte et de déterminer la
              zone sur laquelle intervenir.
            </p>

            <Link
              href="/realisations"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-terracotta"
            >
              Voir nos réalisations
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}