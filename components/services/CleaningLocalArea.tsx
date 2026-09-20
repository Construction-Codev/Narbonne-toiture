import Link from "next/link";
import {
  ArrowRight,
  Check,
  MapPin,
  Phone,
} from "lucide-react";

const interventions = [
  "Nettoyage et entretien de toiture",
  "Démoussage selon l’état de la couverture",
  "Protection hydrofuge lorsque adaptée",
  "Repérage visuel des éléments nécessitant une attention",
];

const cities = [
  "Narbonne",
  "Gruissan",
  "Coursan",
  "Sigean",
  "Port-la-Nouvelle",
  "Lézignan-Corbières",
  "Carcassonne",
];

export default function CleaningLocalArea() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      {/* Décor typographique */}
      <div
        className="pointer-events-none absolute bottom-[-4vw] left-[-2vw] select-none text-[20vw] font-black leading-none tracking-[-0.08em] text-anthracite/[0.025]"
        aria-hidden="true"
      >
        AUDE
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Contenu local */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-terracotta">
              <MapPin size={16} aria-hidden="true" />

              <p className="text-xs font-bold uppercase tracking-[0.22em]">
                Narbonne · Département de l&apos;Aude
              </p>
            </div>

            <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.03] tracking-[-0.04em] text-anthracite sm:text-5xl lg:text-6xl">
              Nettoyage de toiture
              <br />
              <span className="text-terracotta">
                à Narbonne et dans l&apos;Aude.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-anthracite/65 sm:text-lg sm:leading-8">
              Narbonne Toiture intervient pour le nettoyage et
              l&apos;entretien des couvertures à Narbonne ainsi que dans
              l&apos;ensemble du département de l&apos;Aude.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-anthracite/55">
              Les besoins peuvent varier selon l&apos;environnement du
              bâtiment, l&apos;exposition de la toiture, son matériau et son
              état. L&apos;objectif est donc d&apos;identifier l&apos;entretien
              adapté à chaque couverture.
            </p>

            {/* Villes */}
            <div className="mt-9">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-anthracite/40">
                Secteurs d&apos;intervention
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {cities.map((city) => (
                  <span
                    key={city}
                    className="rounded-full border border-anthracite/10 bg-ivory px-4 py-2 text-sm font-semibold text-anthracite/70"
                  >
                    {city}
                  </span>
                ))}

                <span className="rounded-full border border-terracotta/20 bg-terracotta/5 px-4 py-2 text-sm font-semibold text-terracotta">
                  Tout l&apos;Aude
                </span>
              </div>
            </div>
          </div>

          {/* Carte conversion */}
          <div className="lg:col-span-5">
            <div className="rounded-[2rem] bg-anthracite p-7 text-white sm:p-9 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-light">
                Votre toiture
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">
                Besoin d&apos;un nettoyage ?
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/55">
                Décrivez-nous l&apos;état de votre toiture et votre commune
                afin d&apos;échanger sur l&apos;intervention adaptée.
              </p>

              <div className="mt-8 grid gap-4">
                {interventions.map((intervention) => (
                  <div
                    key={intervention}
                    className="flex items-start gap-3 text-sm leading-6 text-white/75"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-terracotta text-white">
                      <Check size={12} strokeWidth={3} aria-hidden="true" />
                    </span>

                    {intervention}
                  </div>
                ))}
              </div>

              <div className="mt-9 grid gap-3">
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

              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="text-xs leading-6 text-white/40">
                  Intervention à Narbonne et dans tout le département de
                  l&apos;Aude.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}