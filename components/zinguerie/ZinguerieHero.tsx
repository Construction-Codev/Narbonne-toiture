import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import Breadcrumb from "@/components/ui/Breadcrumb";

export default function ZinguerieHero() {
  return (
    <section className="overflow-hidden bg-ivory">
      <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Zinguerie" },
          ]}
        />

        <div className="grid gap-12 pb-20 pt-10 lg:grid-cols-12 lg:items-stretch lg:gap-0 lg:pb-28 lg:pt-16">
          <div className="flex flex-col justify-between lg:col-span-6 lg:pr-16 xl:pr-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
                Zinguerie · Narbonne
              </p>

              <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-anthracite sm:text-6xl lg:text-7xl">
                Maîtriser l’eau jusque dans les détails.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-anthracite/65">
                Travaux de zinguerie, raccords et éléments d’évacuation des
                eaux pluviales à Narbonne et dans le département de l’Aude.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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

            <div className="mt-14 border-t border-anthracite/15 pt-5 lg:mt-20">
              <div className="flex flex-wrap gap-x-7 gap-y-2 font-mono text-xs uppercase tracking-[0.14em] text-anthracite/40">
                <span>Raccords</span>
                <span>Évacuation</span>
                <span>Finitions</span>
              </div>
            </div>
          </div>

          <div className="relative min-h-[460px] overflow-hidden sm:min-h-[560px] lg:col-span-6 lg:min-h-[680px]">
            <Image
              src="/images/services/zinguerie-narbonne.jpg"
              alt="Travaux de zinguerie sur une toiture"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-24 w-px bg-white/70"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-px w-24 bg-white/70"
            />
          </div>
        </div>
      </div>
    </section>
  );
}