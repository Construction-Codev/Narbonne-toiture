import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CharpenteProject() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              Expérience du métier
            </p>

            <div className="mt-8 flex items-end gap-4">
              <span className="text-[7rem] font-semibold leading-[0.8] tracking-[-0.08em] text-anthracite sm:text-[9rem]">
                20
              </span>

              <span className="pb-2 text-lg font-medium uppercase tracking-[0.12em] text-terracotta sm:pb-3">
                ans
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between lg:col-span-7 lg:min-h-[340px]">
            <div>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-anthracite sm:text-5xl">
                Deux décennies à travailler sur les toitures de la région.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-anthracite/65">
                L’expérience acquise au fil des chantiers permet d’aborder la
                charpente dans son environnement réel : sous une couverture,
                au contact des autres éléments qui composent la toiture.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-5 border-t border-anthracite/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm leading-6 text-anthracite/45">
                Couverture, réparations, zinguerie et charpente font partie
                d’un même ensemble.
              </p>

              <Link
                href="/realisations"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-terracotta"
              >
                Voir les réalisations
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}