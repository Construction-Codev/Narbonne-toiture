import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Droplets,
  House,
  PanelsTopLeft,
} from "lucide-react";

const elements = [
  {
    icon: House,
    label: "Couverture",
    title: "La première protection du bâtiment",
    text: "Les éléments de couverture constituent la surface directement exposée aux intempéries. Leur état et leur disposition participent à la protection de l’ensemble du bâti.",
    href: null,
  },
  {
    icon: Droplets,
    label: "Zinguerie",
    title: "Guider et évacuer les eaux",
    text: "Les éléments de zinguerie accompagnent l’évacuation des eaux et assurent les raccords sur différentes zones sensibles de la toiture.",
    href: "/zinguerie",
  },
  {
    icon: PanelsTopLeft,
    label: "Charpente",
    title: "La structure qui porte la toiture",
    text: "Sous la couverture, la charpente constitue la structure porteuse sur laquelle repose l’ensemble de la toiture.",
    href: "/charpente",
  },
];

export default function CoverageSystem() {
  return (
    <section className="overflow-hidden bg-ivory py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Titre */}
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-24">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta">
              Comprendre la toiture
            </span>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-anthracite sm:text-5xl lg:text-6xl">
              Une toiture est un ensemble.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-muted sm:text-lg">
            Couverture, évacuation des eaux et structure sont étroitement liées.
            Observer la toiture dans son ensemble permet de mieux comprendre
            l’origine d’un besoin et l’intervention à envisager.
          </p>
        </div>

        {/* Composition principale */}
        <div className="mt-16 grid gap-6 lg:mt-24 lg:grid-cols-12 lg:grid-rows-[280px_240px]">
          {/* Grande photographie */}
          <div className="relative min-h-[420px] overflow-hidden lg:col-span-7 lg:row-span-2 lg:min-h-0">
            <Image
              src="/images/services/couverture-detail-narbonne.png"
              alt="Détail d'une toiture en tuiles et de ses éléments de couverture"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />

            <div className="absolute bottom-0 left-0 bg-white px-6 py-5 sm:px-8 sm:py-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
                L’enveloppe
              </span>

              <p className="mt-1 text-sm font-medium text-anthracite">
                Une lecture globale de la toiture
              </p>
            </div>
          </div>

          {/* Bloc anthracite */}
          <div className="flex min-h-[280px] flex-col justify-between bg-anthracite p-7 text-white sm:p-9 lg:col-span-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-light">
                Du visible à la structure
              </span>

              <p className="mt-5 max-w-md text-2xl font-semibold leading-9 tracking-[-0.03em] sm:text-3xl">
                Ce que l’on voit en surface n’est qu’une partie de la toiture.
              </p>
            </div>

            <p className="mt-10 max-w-md text-sm leading-7 text-white/55">
              Une anomalie visible à un endroit peut nécessiter de regarder
              également les raccords, l’évacuation de l’eau ou les éléments
              situés sous la couverture.
            </p>
          </div>

          {/* Petite photographie */}
          <div className="relative min-h-[260px] overflow-hidden lg:col-span-5 lg:min-h-0">
            <Image
              src="/images/services/couverture-raccord-narbonne.png"
              alt="Détail architectural d'un raccord de toiture"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Les trois éléments */}
        <div className="mt-16 border-t border-anthracite/15 lg:mt-24">
          {elements.map((element) => {
            const Icon = element.icon;

            return (
              <article
                key={element.label}
                className="grid gap-5 border-b border-anthracite/15 py-9 sm:grid-cols-[58px_130px_240px_1fr_auto] sm:gap-6 sm:py-10 xl:grid-cols-[64px_145px_270px_1fr_auto] xl:gap-8"
              >
                <div className="flex h-11 w-11 items-center justify-center text-terracotta">
                  <Icon size={28} strokeWidth={1.45} aria-hidden="true" />
                </div>

                <span className="pt-1 text-xs font-bold uppercase tracking-[0.18em] text-terracotta">
                  {element.label}
                </span>

                <h3 className="text-xl font-semibold leading-7 tracking-[-0.025em] text-anthracite">
                  {element.title}
                </h3>

                <p className="max-w-lg text-sm leading-7 text-muted sm:text-base">
                  {element.text}
                </p>

                {element.href ? (
                  <Link
                    href={element.href}
                    aria-label={`Découvrir le service ${element.label}`}
                    className="flex h-11 w-11 items-center justify-center border border-anthracite/15 text-anthracite transition hover:border-terracotta hover:bg-terracotta hover:text-white"
                  >
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </Link>
                ) : (
                  <span
                    aria-hidden="true"
                    className="hidden h-11 w-11 sm:block"
                  />
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}