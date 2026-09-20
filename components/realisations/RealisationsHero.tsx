import Link from "next/link";
import Breadcrumb from "../ui/Breadcrumb";
import { ArrowDownRight, ArrowRight } from "lucide-react";

export default function RealisationsHero() {
  return (
    <section className="relative overflow-hidden bg-anthracite text-white">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pb-32 lg:pt-20">
        <Breadcrumb
          theme="dark"
          items={[
            { label: "Accueil", href: "/" },
            { label: "Réalisations" },
          ]}
        />
        <div className="grid gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta-light">
              Nos réalisations
            </span>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-[5.4rem] lg:leading-[0.98]">
              Des toitures.
              <br />
              <span className="text-sand">Du vrai travail.</span>
            </h1>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-lg text-base leading-8 text-white/65 sm:text-lg">
              Découvrez différents travaux de couverture réalisés sur le
              terrain : préparation des supports, rénovation, pose de tuiles et
              finitions.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:text-terracotta-light"
            >
              Parler de votre toiture
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-4 border-t border-white/10 pt-6 lg:mt-24">
          <ArrowDownRight
            size={18}
            className="text-terracotta-light"
            aria-hidden="true"
          />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">
            Narbonne · Aude
          </span>
        </div>
      </div>
    </section>
  );
}