import Link from "next/link";
import {
  ArrowUpRight,
  Hammer,
  House,
  Search,
  Triangle,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Couverture",
    description:
      "Travaux de couverture pour protéger votre habitation et maintenir votre toiture en bon état.",
    href: "/couverture",
    icon: House,
  },
  {
    title: "Réparation de toiture",
    description:
      "Intervention sur les éléments endommagés ou dégradés de votre couverture.",
    href: "/reparations",
    icon: Wrench,
  },
  {
    title: "Recherche de fuite",
    description:
      "Recherche de l’origine d’une infiltration afin d’identifier la zone à traiter.",
    href: "/fuites",
    icon: Search,
  },
  {
    title: "Zinguerie",
    description:
      "Travaux de zinguerie et éléments participant à l’évacuation des eaux de toiture.",
    href: "/zinguerie",
    icon: Triangle,
  },
  {
    title: "Charpente",
    description:
      "Interventions sur la charpente et les éléments structurels associés à votre toiture.",
    href: "/charpente",
    icon: Hammer,
  },
];

export default function RoofingServices() {
  return (
    <section className="bg-ivory py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Introduction */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
                Au-delà de l&apos;entretien
              </p>

              <h2 className="text-4xl font-bold leading-[1.03] tracking-[-0.04em] text-anthracite sm:text-5xl">
                Tous vos travaux
                <br />
                <span className="text-terracotta">de toiture.</span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-anthracite/65">
                Narbonne Toiture intervient également pour les travaux de
                couverture, les réparations, la recherche de fuite, la
                zinguerie et la charpente.
              </p>

              <Link
                href="/services"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-anthracite/15 bg-white px-5 py-3 text-sm font-bold text-anthracite transition hover:border-terracotta hover:text-terracotta"
              >
                Tous nos services

                <ArrowUpRight
                  size={17}
                  aria-hidden="true"
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-8">
            <div className="border-t border-anthracite/10">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group grid gap-5 border-b border-anthracite/10 py-8 transition sm:grid-cols-[64px_1fr_auto] sm:items-center sm:gap-6 lg:py-9"
                  >
                    {/* Numéro / icône */}
                    <div className="flex items-center gap-4 sm:block">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-anthracite/30 sm:hidden">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-terracotta transition duration-300 group-hover:bg-terracotta group-hover:text-white">
                        <Icon
                          size={20}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </span>
                    </div>

                    {/* Texte */}
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="hidden text-[10px] font-bold tracking-[0.2em] text-anthracite/25 sm:inline">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="text-xl font-bold tracking-[-0.02em] text-anthracite transition-colors group-hover:text-terracotta sm:text-2xl">
                          {service.title}
                        </h3>
                      </div>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-anthracite/60">
                        {service.description}
                      </p>
                    </div>

                    {/* Flèche */}
                    <span className="hidden h-11 w-11 items-center justify-center rounded-full border border-anthracite/10 text-anthracite transition duration-300 group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-white sm:flex">
                      <ArrowUpRight
                        size={17}
                        aria-hidden="true"
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}