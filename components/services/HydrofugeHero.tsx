import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  Phone,
  ShieldCheck,
} from "lucide-react";

import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";

export default function HydrofugeHero() {
  return (
    <section className="overflow-hidden bg-ivory">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28 lg:pt-10">
        <ServiceBreadcrumb
          items={[
            {
              label: "Services",
              href: "/services",
            },
            {
              label: "Traitement hydrofuge",
            },
          ]}
        />

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          {/* Contenu */}
          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta">
              Protection de la toiture
            </span>

            <h1 className="mt-5 max-w-2xl text-5xl font-semibold tracking-[-0.05em] text-anthracite sm:text-6xl lg:text-7xl">
              Traitement hydrofuge de toiture à Narbonne.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
              Une protection hydrofuge peut être envisagée pour certaines
              couvertures afin de limiter la pénétration de l’eau en surface,
              lorsque leur état et leur matériau s’y prêtent.
            </p>

            <div className="mt-8 flex flex-col gap-4 border-y border-anthracite/10 py-6 sm:flex-row sm:gap-8">
              <div className="flex items-center gap-3">
                <Droplets
                  size={20}
                  strokeWidth={1.6}
                  className="shrink-0 text-terracotta"
                  aria-hidden="true"
                />

                <span className="text-sm font-medium text-anthracite/75">
                  Protection complémentaire
                </span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck
                  size={20}
                  strokeWidth={1.6}
                  className="shrink-0 text-terracotta"
                  aria-hidden="true"
                />

                <span className="text-sm font-medium text-anthracite/75">
                  Selon l’état de la couverture
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-terracotta px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-terracotta-dark"
              >
                Demander un devis
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <a
                href="tel:+33662125611"
                className="inline-flex items-center justify-center gap-3 border border-anthracite/15 bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-anthracite transition hover:border-terracotta hover:text-terracotta"
              >
                <Phone size={17} aria-hidden="true" />
                06 62 12 56 11
              </a>
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.17em] text-anthracite/40">
              Narbonne · Tout le département de l’Aude
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 hidden h-32 w-32 border-r border-t border-terracotta/30 lg:block"
            />

            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/services/hydrofuge-toiture-narbonne.png"
                alt="Tuiles en terre cuite couvertes de gouttes d’eau"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover"
              />           
            </div>

            <div className="absolute -bottom-5 -left-5 hidden bg-white px-6 py-5 shadow-[0_18px_50px_rgba(30,37,41,0.10)] sm:block">
              <span className="block text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
                Protéger
              </span>

              <span className="mt-1 block text-sm font-medium text-anthracite">
                sans masquer les désordres
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}