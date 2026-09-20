import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import Breadcrumb from "@/components/ui/Breadcrumb";

export default function CharpenteHero() {
  return (
    <section className="overflow-hidden bg-ivory">
      <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Charpente" },
          ]}
        />

        <div className="pb-20 pt-10 sm:pb-24 lg:pb-28 lg:pt-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
                Charpente · Narbonne
              </p>

              <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.055em] text-anthracite sm:text-6xl lg:text-7xl xl:text-[5.4rem] xl:leading-[0.98]">
                La structure qui porte votre toiture.
              </h1>
            </div>

            <div className="lg:col-span-4 lg:pb-2">
              <p className="max-w-md text-lg leading-8 text-anthracite/65">
                Travaux de charpente associés à la toiture à Narbonne et dans
                le département de l’Aude.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-terracotta px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90"
                >
                  Demander un devis
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="tel:+33662125611"
                  className="inline-flex items-center justify-center gap-2 border border-anthracite/20 px-6 py-4 text-sm font-semibold text-anthracite transition-colors hover:border-anthracite/50"
                >
                  <Phone className="h-4 w-4" />
                  06 62 12 56 11
                </a>
              </div>
            </div>
          </div>

          <div className="relative mt-14 aspect-[4/3] overflow-hidden sm:aspect-[16/9] lg:mt-16 lg:aspect-[16/7]">
            <Image
              src="/images/services/charpente-narbonne.jpg"
              alt="Structure en bois d'une charpente de toiture"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent px-6 pb-6 pt-24 sm:px-8">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-2 font-mono text-xs uppercase tracking-[0.15em] text-white/80">
                <span>Structure</span>
                <span>Bois</span>
                <span>Toiture</span>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute left-8 top-0 hidden h-full w-px bg-white/30 sm:block"
            />
            <div
              aria-hidden="true"
              className="absolute left-0 top-8 hidden h-px w-28 bg-white/30 sm:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}