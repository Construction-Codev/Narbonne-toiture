import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function RepairProjects() {
  return (
    <section className="overflow-hidden bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              Sur le terrain
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-anthracite sm:text-5xl">
              Observer la toiture.
              <br />
              Intervenir au bon endroit.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="max-w-lg text-lg leading-8 text-anthracite/65">
              Chaque intervention commence par la toiture elle-même. Son état,
              sa configuration et la zone concernée déterminent la nature des
              travaux à envisager.
            </p>

            <Link
              href="/realisations"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-terracotta"
            >
              Découvrir nos réalisations
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-12 lg:gap-6">
          {/* Grande image */}
          <figure className="lg:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/realisations/narbonne-renovation-toiture-04.jpg"
                alt="Travaux réalisés sur une couverture en tuiles"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            <figcaption className="mt-4 flex items-start gap-4">
              <span className="font-mono text-xs text-terracotta">01</span>

              <p className="max-w-lg text-sm leading-6 text-anthracite/55">
                Intervention sur une couverture en tuiles pendant des travaux
                de toiture.
              </p>
            </figcaption>
          </figure>

          {/* Colonne secondaire */}
          <div className="grid gap-10 lg:col-span-5 lg:pt-24">
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/realisations/coursan-renovation-toiture-03.jpg"
                  alt="Éléments visibles sous une couverture pendant des travaux"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              <figcaption className="mt-4 flex items-start gap-4">
                <span className="font-mono text-xs text-terracotta">02</span>

                <p className="max-w-md text-sm leading-6 text-anthracite/55">
                  Une toiture ouverte permet d’observer les éléments situés
                  sous la couverture.
                </p>
              </figcaption>
            </figure>

            <figure className="lg:w-[82%]">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/realisations/carcassonne-travaux-toiture-02.jpg"
                  alt="Détail de travaux réalisés sur une toiture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              <figcaption className="mt-4 flex items-start gap-4">
                <span className="font-mono text-xs text-terracotta">03</span>

                <p className="max-w-sm text-sm leading-6 text-anthracite/55">
                  Les interventions localisées demandent une lecture précise
                  de la zone concernée.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}