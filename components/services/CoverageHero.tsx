import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  Hammer,
  House,
  Phone,
} from "lucide-react";

import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";

export default function CoverageHero() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28 lg:pt-10">
        <ServiceBreadcrumb
          items={[
            { label: "Services", href: "/services" },
            { label: "Couverture" },
          ]}
        />

        <div className="mt-10">
          {/* Grande accroche */}
          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-20">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta">
                Couvreur à Narbonne
              </span>

              <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.055em] text-anthracite sm:text-6xl lg:text-7xl">
                Travaux de couverture à Narbonne.
              </h1>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-xl text-base leading-8 text-muted sm:text-lg">
                Narbonne Toiture intervient pour les travaux de couverture à
                Narbonne et dans l’Aude, qu’il s’agisse d’entretenir, de
                réparer ou d’intervenir plus largement sur votre toiture.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-terracotta px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-terracotta-dark"
                >
                  Demander un devis
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>

                <a
                  href="tel:+33662125611"
                  className="inline-flex items-center justify-center gap-3 border border-anthracite/15 px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-anthracite transition hover:border-terracotta hover:text-terracotta"
                >
                  <Phone size={17} aria-hidden="true" />
                  06 62 12 56 11
                </a>
              </div>
            </div>
          </div>

          {/* Grande image architecturale */}
          <div className="relative mt-12 lg:mt-16">
            <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/9] lg:aspect-[2.15/1]">
              <Image
                src="/images/services/couverture-narbonne.png"
                alt="Toiture méditerranéenne en tuiles dans l'Aude"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {/* Bande architecturale */}
            <div className="relative -mt-px grid bg-anthracite text-white sm:grid-cols-3 lg:absolute lg:bottom-0 lg:left-0 lg:w-[68%]">
              <div className="flex items-center gap-4 border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r lg:px-7">
                <House
                  size={21}
                  strokeWidth={1.5}
                  className="shrink-0 text-terracotta-light"
                  aria-hidden="true"
                />
                <span className="text-xs font-bold uppercase tracking-[0.16em]">
                  Couverture
                </span>
              </div>

             <Link
              href="/zinguerie"
              className="group flex items-center justify-between gap-4 border-b border-white/10 px-6 py-5 transition hover:bg-white/5 sm:border-b-0 sm:border-r lg:px-7"
            >
              <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em]">
                <Droplets
                  size={17}
                  strokeWidth={1.5}
                  className="text-terracotta-light"
                  aria-hidden="true"
                />
                Zinguerie
              </span>

              <ArrowRight
                size={16}
                className="text-terracotta-light transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>

              <Link
                href="/charpente"
                className="group flex items-center justify-between gap-4 px-6 py-5 transition hover:bg-white/5 lg:px-7"
              >
                <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em]">
                  <Hammer
                    size={17}
                    strokeWidth={1.5}
                    className="text-terracotta-light"
                    aria-hidden="true"
                  />
                  Charpente
                </span>

                <ArrowRight
                  size={16}
                  className="text-terracotta-light transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* Bas de hero */}
          <div className="mt-7 flex flex-col gap-3 border-b border-border pb-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-muted">
              Une toiture fonctionne comme un ensemble : chaque élément
              participe à la protection du bâtiment.
            </p>

            <span className="shrink-0 text-xs font-bold uppercase tracking-[0.18em] text-anthracite/40">
              Narbonne · Département de l’Aude
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}