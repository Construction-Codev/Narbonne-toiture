import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Phone,
} from "lucide-react";

const cities = [
  "Narbonne",
  "Gruissan",
  "Coursan",
  "Sigean",
  "Port-la-Nouvelle",
  "Lézignan-Corbières",
  "Carcassonne",
];

export default function MossLocalArea() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div
        className="pointer-events-none absolute right-[-3%] top-[-2%] select-none text-[22vw] font-black leading-none tracking-[-0.08em] text-anthracite/[0.025] lg:text-[15vw]"
        aria-hidden="true"
      >
        11
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Colonne principale */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-terracotta">
              <MapPin size={16} aria-hidden="true" />

              <p className="text-xs font-bold uppercase tracking-[0.22em]">
                Narbonne · Aude
              </p>
            </div>

            <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.03] tracking-[-0.04em] text-anthracite sm:text-5xl lg:text-6xl">
              Démoussage de toiture
              <br />
              <span className="text-terracotta">dans l&apos;Aude.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-anthracite/65 sm:text-lg sm:leading-8">
              Narbonne Toiture intervient à Narbonne et dans l&apos;ensemble
              du département de l&apos;Aude pour les couvertures présentant
              des mousses, lichens ou autres végétaux.
            </p>

            <div className="mt-10 border-l-2 border-terracotta pl-6 sm:pl-8">
              <p className="max-w-xl text-lg font-bold leading-8 text-anthracite">
                Une toiture située dans un environnement humide ou végétalisé
                peut présenter des besoins différents d&apos;une couverture
                davantage exposée au soleil.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-anthracite/55">
                L&apos;orientation, l&apos;environnement et l&apos;état de la
                couverture sont donc pris en compte avant d&apos;envisager
                l&apos;entretien.
              </p>
            </div>
          </div>

          {/* Zone d'intervention */}
          <div className="lg:col-span-5 lg:pt-16">
            <div className="border-t border-anthracite/10">
              <div className="py-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-anthracite/40">
                  Secteur principal
                </p>

                <p className="mt-3 text-3xl font-bold tracking-[-0.035em] text-anthracite">
                  Narbonne
                </p>
              </div>

              <div className="border-t border-anthracite/10 py-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-anthracite/40">
                  Nous intervenons également
                </p>

                <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4">
                  {cities.slice(1).map((city) => (
                    <div
                      key={city}
                      className="flex items-center gap-2 text-sm font-semibold text-anthracite/70"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-terracotta"
                        aria-hidden="true"
                      />
                      {city}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-anthracite/10 py-6">
                <p className="text-sm font-bold text-terracotta">
                  Intervention dans tout le département de l&apos;Aude
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conversion */}
        <div className="mt-16 overflow-hidden rounded-[2rem] bg-anthracite text-white lg:mt-20">
          <div className="grid lg:grid-cols-12 lg:items-center">
            <div className="p-7 sm:p-10 lg:col-span-8 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-light">
                Votre couverture
              </p>

              <h3 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">
                Des mousses sont visibles sur votre toiture ?
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
                Indiquez-nous votre commune et ce que vous observez sur la
                couverture afin d&apos;échanger sur votre besoin.
              </p>
            </div>

            <div className="flex flex-col gap-3 border-t border-white/10 p-7 sm:p-10 lg:col-span-4 lg:border-l lg:border-t-0">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-between rounded-full bg-terracotta px-6 py-4 font-bold text-white transition hover:bg-terracotta-dark"
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
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-4 font-bold text-white transition hover:border-terracotta-light hover:text-terracotta-light"
              >
                <Phone size={17} aria-hidden="true" />
                06 62 12 56 11
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}