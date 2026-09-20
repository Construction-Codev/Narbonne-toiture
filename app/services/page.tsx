import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  Hammer,
  House,
  Search,
  ShieldCheck,
  Sparkles,
  Triangle,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services de toiture à Narbonne",
  description:
    "Découvrez les services de Narbonne Toiture : nettoyage, démoussage, hydrofuge, couverture, réparation, recherche de fuite, zinguerie et charpente à Narbonne et dans l’Aude.",
};

const entretienServices = [
  {
    title: "Nettoyage de toiture",
    description:
      "Éliminer les salissures et dépôts présents sur la couverture avec une méthode adaptée à son état.",
    href: "/nettoyage-toiture",
    icon: Sparkles,
    number: "01",
  },
  {
    title: "Démoussage de toiture",
    description:
      "Retirer mousses, lichens et végétaux installés progressivement sur les matériaux de couverture.",
    href: "/demoussage-toiture",
    icon: Droplets,
    number: "02",
  },
  {
    title: "Traitement hydrofuge",
    description:
      "Compléter l’entretien par une protection adaptée lorsque l’état et le matériau de la couverture le permettent.",
    href: "/hydrofuge-toiture",
    icon: ShieldCheck,
    number: "03",
  },
];

const toitureServices = [
  {
    title: "Couverture",
    description:
      "Travaux de couverture et interventions sur les différents éléments qui composent la toiture.",
    href: "/couverture",
    icon: House,
  },
  {
    title: "Réparations",
    description:
      "Intervenir sur les éléments endommagés ou dégradés afin de remettre la toiture en état.",
    href: "/reparations",
    icon: Wrench,
  },
  {
    title: "Recherche de fuite",
    description:
      "Rechercher l’origine d’une infiltration avant de déterminer les réparations à effectuer.",
    href: "/fuites",
    icon: Search,
  },
  {
    title: "Zinguerie",
    description:
      "Intervenir sur les éléments métalliques et les dispositifs participant à l’évacuation des eaux pluviales.",
    href: "/zinguerie",
    icon: Triangle,
  },
  {
    title: "Charpente",
    description:
      "Interventions sur les éléments de charpente en fonction de leur état et des besoins constatés.",
    href: "/charpente",
    icon: Hammer,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ivory pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-32 lg:pt-28">
       
        <div
          className="pointer-events-none absolute right-[-5%] top-[-10%] select-none text-[28vw] font-black leading-none tracking-[-0.08em] text-anthracite/[0.025] lg:text-[18vw]"
          aria-hidden="true"
        >
          08
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Services" },
            ]}
          />
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
                Nos services
                <span className="h-px w-14 bg-terracotta/60" />
              </p>

              <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.05em] text-anthracite sm:text-6xl lg:text-7xl">
                Prendre soin de votre
                <br />
                <span className="text-terracotta">toiture.</span>
              </h1>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-lg text-base leading-7 text-anthracite/65 sm:text-lg sm:leading-8">
                De l&apos;entretien aux travaux de couverture, Narbonne Toiture
                intervient à Narbonne et dans tout le département de
                l&apos;Aude.
              </p>

              <Link
                href="/contact"
                className="group mt-7 inline-flex items-center gap-3 font-bold text-anthracite transition hover:text-terracotta"
              >
                Parler de votre projet

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta text-white">
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ENTRETIEN & PROTECTION */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
                Entretien & protection
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-[1.03] tracking-[-0.04em] text-anthracite sm:text-5xl">
                Nettoyer.
                <br />
                Protéger.
                <br />
                <span className="text-terracotta">Préserver.</span>
              </h2>

              <p className="mt-6 max-w-sm text-base leading-7 text-anthracite/60">
                L&apos;entretien d&apos;une toiture dépend de son matériau, de
                son environnement et de son état. La méthode doit donc être
                choisie en conséquence.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-anthracite/10">
                {entretienServices.map((service) => {
                  const Icon = service.icon;

                  return (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="group grid gap-5 border-b border-anthracite/10 py-8 transition-colors hover:bg-ivory/50 sm:px-5 lg:grid-cols-[60px_1fr_auto] lg:items-center"
                    >
                      <span className="text-sm font-bold text-terracotta">
                        {service.number}
                      </span>

                      <div className="flex gap-5">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                          <Icon size={21} aria-hidden="true" />
                        </span>

                        <div>
                          <h3 className="text-xl font-bold tracking-[-0.02em] text-anthracite group-hover:text-terracotta sm:text-2xl">
                            {service.title}
                          </h3>

                          <p className="mt-2 max-w-xl text-sm leading-6 text-anthracite/55">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-anthracite/15 text-anthracite transition-all group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-white">
                        <ArrowRight size={17} aria-hidden="true" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COUVERTURE & TRAVAUX */}
      <section className="bg-anthracite py-20 text-white sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 max-w-3xl lg:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-terracotta-light">
              Couverture & travaux
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-[1.03] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Intervenir lorsque
              <br />
              <span className="text-terracotta-light">
                la toiture en a besoin.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/55">
              Réparation, fuite, couverture, zinguerie ou charpente : les
              travaux sont déterminés selon les éléments concernés et
              l&apos;état constaté de la toiture.
            </p>
          </div>

          <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {toitureServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className={`group relative min-h-[310px] border-b border-r border-white/10 p-7 transition-colors hover:bg-white/[0.045] sm:p-8 ${
                    index === toitureServices.length - 1
                      ? "lg:col-span-2"
                      : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.06] text-terracotta-light">
                      <Icon size={21} aria-hidden="true" />
                    </span>

                    <ArrowRight
                      size={20}
                      className="text-white/30 transition-all group-hover:translate-x-1 group-hover:text-terracotta-light"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mt-16">
                    <h3 className="text-2xl font-bold tracking-[-0.025em]">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-6 text-white/50">
                      {service.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ZONE + CTA */}
      <section className="bg-ivory py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="rounded-[2rem] bg-terracotta p-7 text-white sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">
                  Narbonne · Aude
                </p>

                <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                  Vous avez un besoin sur votre toiture ?
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
                  Narbonne Toiture intervient à Narbonne et dans tout
                  l&apos;Aude. Présentez-nous votre projet afin
                  d&apos;identifier le type d&apos;intervention adapté.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-between rounded-full bg-white px-6 py-4 font-bold text-anthracite transition hover:bg-ivory"
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
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-4 font-bold text-white transition hover:bg-white/10"
                >
                  06 62 12 56 11
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}