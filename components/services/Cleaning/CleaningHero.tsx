import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  MapPin,
  Phone,
} from "lucide-react";

import Breadcrumb from "@/components/ui/Breadcrumb";

const benefits = [
  "Nettoyage adapté à l’état de la couverture",
  "Intervention à Narbonne et dans l’Aude",
  "Démoussage et protection selon les besoins",
];

export default function CleaningHero() {
  return (
    <section className="overflow-hidden bg-ivory">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-8 lg:px-10 lg:pt-8">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Nettoyage toiture" },
          ]}
        />
      </div>

      <div className="mx-auto grid max-w-7xl lg:grid-cols-12">
        {/* Contenu */}
        <div className="px-5 pb-16 sm:px-8 sm:pb-20 lg:col-span-7 lg:px-10 lg:pb-28">
          <div className="flex items-center gap-2 text-terracotta">
            <MapPin size={15} aria-hidden="true" />

            <p className="text-xs font-bold uppercase tracking-[0.2em]">
              Narbonne · Aude
            </p>
          </div>

          <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.05em] text-anthracite sm:text-6xl lg:text-7xl">
            Nettoyage de toiture
            <br />
            <span className="text-terracotta">à Narbonne.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-anthracite/65 sm:text-lg sm:leading-8">
            Narbonne Toiture intervient pour le nettoyage et l&apos;entretien
            des toitures à Narbonne et dans tout le département de
            l&apos;Aude. Mousses, lichens et salissures sont traités selon
            l&apos;état et le type de couverture.
          </p>

          {/* Points de réassurance */}
          <div className="mt-8 grid gap-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 text-sm font-semibold text-anthracite"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                  <Check
                    size={14}
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </span>

                {benefit}
              </div>
            ))}
          </div>

          {/* Conversion */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-between gap-8 rounded-full bg-terracotta px-6 py-4 font-bold text-white transition hover:bg-terracotta-dark active:scale-[0.98]"
            >
              Demander un devis

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>

            <a
              href="tel:+33662125611"
              aria-label="Appeler Narbonne Toiture au 06 62 12 56 11"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-anthracite/15 px-6 py-4 font-bold text-anthracite transition hover:border-terracotta hover:text-terracotta active:scale-[0.98]"
            >
              <Phone size={18} aria-hidden="true" />
              06 62 12 56 11
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative min-h-[420px] lg:col-span-5 lg:min-h-full">
          <Image
            src="/images/services/nettoyage-toiture-narbonne.png"
            alt="Toiture en tuiles illustrant l’entretien d’une couverture"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover"
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-anthracite/35 via-transparent to-transparent"
            aria-hidden="true"
          />

          <div className="absolute bottom-5 left-5 right-5 rounded-[1.25rem] bg-white/90 p-5 shadow-lg backdrop-blur sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-[310px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-terracotta">
              Notre approche
            </p>

            <p className="mt-2 text-sm font-bold leading-6 text-anthracite">
              Nettoyer la couverture en tenant compte de son état et de ses
              matériaux.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}