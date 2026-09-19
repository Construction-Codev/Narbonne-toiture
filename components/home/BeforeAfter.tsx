"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);

  return (
    <section className="overflow-hidden bg-anthracite py-20 text-white sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Introduction */}
        <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-terracotta-light">
              Avant / Après
            </p>

            <h2 className="max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Une toiture entretenue,
              <br />
              <span className="text-terracotta-light">
                ça se voit.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              Le nettoyage permet de retirer les salissures et végétaux
              accumulés sur la couverture afin de retrouver l&apos;aspect des
              tuiles et de préparer les traitements adaptés.
            </p>

            <Link
              href="/nettoyage-toiture"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-terracotta-light"
            >
              Découvrir le nettoyage de toiture

              <ArrowRight
                size={17}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Comparateur */}
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-anthracite-light shadow-2xl">
          <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[16/9]">
            {/* APRÈS — image de fond */}
            <Image
              src="/images/home/toiture-apres.png"
              alt="Toiture en tuiles après nettoyage"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="select-none object-cover"
              draggable={false}
            />

            {/* AVANT — image découpée */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `inset(0 ${100 - position}% 0 0)`,
              }}
            >
              <Image
                src="/images/home/toiture-avant.png"
                alt="Toiture en tuiles avant nettoyage"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="select-none object-cover"
                draggable={false}
              />
            </div>

            {/* Labels */}
            <div className="pointer-events-none absolute left-4 top-4 z-20 sm:left-6 sm:top-6">
              <span className="rounded-full bg-anthracite/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                Avant
              </span>
            </div>

            <div className="pointer-events-none absolute right-4 top-4 z-20 sm:right-6 sm:top-6">
              <span className="rounded-full bg-terracotta px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
                Après
              </span>
            </div>

            {/* Ligne centrale */}
            <div
              className="pointer-events-none absolute bottom-0 top-0 z-20 w-0.5 -translate-x-1/2 bg-white"
              style={{ left: `${position}%` }}
            >
              {/* Poignée */}
              <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-anthracite shadow-xl sm:h-14 sm:w-14">
                <ChevronLeft
                  size={17}
                  strokeWidth={2}
                  aria-hidden="true"
                />

                <ChevronRight
                  size={17}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Slider invisible mais réellement interactif */}
            <input
              type="range"
              min="0"
              max="100"
              value={position}
              onChange={(event) => setPosition(Number(event.target.value))}
              aria-label="Comparer la toiture avant et après nettoyage"
              className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
            />
          </div>
        </div>

        {/* Indication */}
        <div className="mt-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
          <ChevronLeft size={14} aria-hidden="true" />
          Faites glisser pour comparer
          <ChevronRight size={14} aria-hidden="true" />
        </div>

        {/* Note maquette */}
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-5 text-white/35">
          Visuel d&apos;illustration. Les résultats peuvent varier selon
          l&apos;état, le matériau et l&apos;ancienneté de la couverture.
        </p>
      </div>
    </section>
  );
}