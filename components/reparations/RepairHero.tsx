import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import Breadcrumb from "@/components/ui/Breadcrumb";

export default function RepairHero() {
  return (
    <section className="relative overflow-hidden bg-anthracite text-white">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-6 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
        <Breadcrumb
          theme="dark"
          items={[
            { label: "Accueil", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Réparation de toiture" },
          ]}
        />

        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sand">
              Réparation de toiture · Narbonne
            </p>

            <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Intervenir là où la toiture en a besoin.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
              Tuiles endommagées, couverture déplacée ou zone de toiture à
              reprendre : Narbonne Toiture intervient à Narbonne et dans
              l’Aude pour les réparations de couverture.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-terracotta px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
              >
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="tel:+33662125611"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                <Phone className="h-4 w-4" />
                06 62 12 56 11
              </a>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative ml-auto aspect-[4/5] max-w-[570px] overflow-hidden">
              <Image
                src="/images/services/reparation-toiture-narbonne.jpg"
                alt="Artisan intervenant sur une toiture en tuiles"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-anthracite/30 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 left-0 hidden bg-ivory px-7 py-6 text-anthracite sm:block lg:-left-8">
              <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">
                Une réparation adaptée
              </span>

              <span className="mt-2 block max-w-[230px] text-lg font-semibold leading-6">
                Reprendre la zone concernée sans refaire inutilement l’ensemble.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}