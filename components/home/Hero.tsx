import Image from "next/image";
import {
  ArrowRight,
  Check,
  MapPin,
  Phone,
} from "lucide-react";

import TrackedAnchor from "@/components/analytics/TrackedAnchor";
import TrackedLink from "@/components/analytics/TrackedLink";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl lg:grid-cols-[0.92fr_1.08fr]">
        {/* Contenu */}
        <div className="relative z-10 flex items-center px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="w-full max-w-xl">
            {/* Localisation */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-terracotta/20 bg-white/70 px-4 py-2 backdrop-blur">
              <MapPin
                size={15}
                className="text-terracotta"
                aria-hidden="true"
              />

              <span className="text-xs font-bold uppercase tracking-[0.16em] text-anthracite">
                Couvreur à Narbonne
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-[2.8rem] font-bold leading-[0.98] tracking-[-0.045em] text-anthracite sm:text-6xl lg:text-[4.4rem]">
              Redonnez vie
              <br />
              à votre{" "}
              <span className="text-terracotta">
                toiture.
              </span>
            </h1>

            {/* Introduction */}
            <p className="mt-7 max-w-lg text-base leading-7 text-anthracite/70 sm:text-lg sm:leading-8">
              Nettoyage, démoussage, traitement hydrofuge et travaux de
              couverture à Narbonne et dans les environs.
            </p>

            {/* Points forts */}
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
              {[
                "Entretien",
                "Protection",
                "Travaux de toiture",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-semibold text-anthracite"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                    <Check size={13} strokeWidth={2.5} aria-hidden="true" />
                  </span>

                  {item}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href="/contact"
                eventName="quote_click"
                eventData={{
                  location: "hero",
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-4 font-bold text-white transition hover:bg-terracotta-dark active:scale-[0.98]"
              >
                Demander un devis

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </TrackedLink>

              <TrackedAnchor
                href="tel:+33662125611"
                eventName="phone_click"
                eventData={{
                  location: "hero",
                }}
                aria-label="Appeler Narbonne Toiture au 06 62 12 56 11"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-anthracite/15 bg-white/60 px-6 py-4 font-bold text-anthracite transition hover:border-terracotta/40 hover:text-terracotta active:scale-[0.98]"
              >
                <Phone size={18} aria-hidden="true" />
                06 62 12 56 11
              </TrackedAnchor>
            </div>

            {/* Signature */}
            <div className="mt-10 flex items-center gap-4">
              <span
                className="h-px w-10 bg-terracotta"
                aria-hidden="true"
              />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-anthracite/50">
                Nettoyer · Protéger · Préserver
              </p>
            </div>
          </div>
        </div>

        {/* Visuel */}
        <div className="relative min-h-[520px] lg:min-h-full">
          <Image
            src="/images/home/hero-toiture-narbonne.webp"
            alt="Toiture en tuiles à Narbonne"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />

          {/* Dégradé desktop */}
          <div
            className="absolute inset-0 hidden bg-gradient-to-r from-ivory/30 via-transparent to-transparent lg:block"
            aria-hidden="true"
          />

          {/* Cartouche */}
          <div className="absolute bottom-6 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-auto lg:bottom-10 lg:left-10">
            <div className="max-w-[310px] rounded-2xl border border-white/20 bg-anthracite/90 p-5 text-white shadow-2xl backdrop-blur-md">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-terracotta-light">
                Notre approche
              </p>

              <p className="mt-2 text-lg font-bold leading-snug">
                Entretenir aujourd&apos;hui pour préserver votre toiture demain.
              </p>
            </div>
          </div>

          {/* Accent terracotta */}
          <div
            className="absolute right-0 top-0 hidden h-28 w-2 bg-terracotta lg:block"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}