import Link from "next/link";
import { ArrowRight, Check, MapPin, Phone } from "lucide-react";

const interventions = [
  "Entretien et nettoyage",
  "Démoussage et hydrofuge",
  "Réparation de toiture",
  "Couverture et zinguerie",
];

export default function LocalArea() {
  return (
    <section className="relative overflow-hidden bg-ivory py-20 sm:py-24 lg:py-32">
      {/* Mot décoratif */}
      <div
        className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 select-none whitespace-nowrap text-[22vw] font-black leading-none tracking-[-0.08em] text-anthracite/[0.025] lg:top-0 lg:text-[14vw]"
        aria-hidden="true"
      >
        NARBONNE
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* Partie gauche */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-terracotta/20 bg-white/70 px-4 py-2">
              <MapPin
                size={15}
                className="text-terracotta"
                aria-hidden="true"
              />

              <span className="text-xs font-bold uppercase tracking-[0.16em] text-anthracite">
                Narbonne · Tout le département de l&apos;Aude
              </span>
            </div>

            <h2 className="mt-7 max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-anthracite sm:text-5xl lg:text-6xl">
              Votre toiture,
              <br />
              <span className="text-terracotta">notre métier.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-anthracite/65 sm:text-lg sm:leading-8">
              Narbonne Toiture intervient à Narbonne et dans tout le
              département de l&apos;Aude pour l&apos;entretien, la protection,
              la réparation et les travaux de toiture.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-anthracite/65">
              Nous intervenons notamment à Narbonne, Gruissan, Coursan, Sigean,
              Port-la-Nouvelle, Lézignan-Corbières, Carcassonne et dans les
              communes environnantes.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-anthracite/65">
              Chaque intervention commence par l&apos;observation de la
              couverture et de son état afin d&apos;orienter les travaux vers
              une solution adaptée au besoin constaté.
            </p>

            {/* Prestations */}
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {interventions.map((intervention) => (
                <div
                  key={intervention}
                  className="flex items-center gap-3 text-sm font-semibold text-anthracite"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                    <Check
                      size={14}
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  </span>

                  {intervention}
                </div>
              ))}
            </div>
          </div>

          {/* Carte contact */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2rem] bg-anthracite p-7 text-white shadow-xl sm:p-9">
              {/* Accent */}
              <div
                className="absolute right-0 top-0 h-24 w-2 bg-terracotta"
                aria-hidden="true"
              />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-light">
                Un besoin sur votre toiture ?
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em]">
                Échangeons sur
                <br />
                votre projet.
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/60">
                Nettoyage, réparation ou travaux de couverture : contactez
                Narbonne Toiture pour présenter votre besoin.
              </p>

              <div className="mt-8 grid gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-between rounded-full bg-terracotta px-6 py-4 font-bold text-white transition hover:bg-terracotta-light active:scale-[0.98]"
                >
                  Demander un devis

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="tel:+33662125611"
                  aria-label="Appeler Narbonne Toiture au 06 62 12 56 11"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 font-bold text-white transition hover:border-white/40 active:scale-[0.98]"
                >
                  <Phone size={18} aria-hidden="true" />
                  06 62 12 56 11
                </a>
              </div>

              {/* Horaires */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="flex items-center justify-between gap-5">
                  <span className="text-xs text-white/40">Disponibilité</span>

                  <span className="text-right text-sm font-semibold text-white/75">
                    Lun. – Sam.
                    <br />
                    6h00 – 20h00
                  </span>
                </div>
              </div>

              {/* Zone */}
              <div className="mt-5 border-t border-white/10 pt-5">
                <div className="flex items-center justify-between gap-5">
                  <span className="text-xs text-white/40">
                    Zone d&apos;intervention
                  </span>

                  <span className="text-right text-sm font-semibold text-white/75">
                    Narbonne
                    <br />
                    & tout l&apos;Aude
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}