import Link from "next/link";
import { ArrowRight, Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative overflow-hidden bg-ivory">
      <div className="mx-auto flex min-h-[calc(100svh-80px)] max-w-7xl flex-col px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Code erreur */}
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-terracotta" />

          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
            Erreur 404
          </p>
        </div>

        {/* Contenu principal */}
        <div className="grid flex-1 gap-12 py-16 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <p
              aria-hidden="true"
              className="select-none text-[9rem] font-semibold leading-[0.72] tracking-[-0.09em] text-anthracite/[0.06] sm:text-[13rem] lg:text-[17rem]"
            >
              404
            </p>

            <h1 className="-mt-4 max-w-3xl text-5xl font-semibold tracking-[-0.055em] text-anthracite sm:-mt-8 sm:text-6xl lg:text-7xl">
              Cette page n’est plus sous le bon toit.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-anthracite/60">
              L’adresse demandée n’existe pas ou a été déplacée. Vous pouvez
              revenir à l’accueil ou poursuivre vers les principales rubriques
              du site.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-terracotta px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
              >
                <Home className="h-4 w-4" />
                Retour à l’accueil
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-anthracite/20 px-6 py-3 text-sm font-semibold text-anthracite transition-colors hover:border-anthracite"
              >
                Nous contacter
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Navigation de récupération */}
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-anthracite/40">
              Continuer votre visite
            </p>

            <nav className="mt-6 border-t border-anthracite/15">
              <RecoveryLink href="/services" label="Nos services" />
              <RecoveryLink
                href="/nettoyage-toiture"
                label="Entretien de toiture"
              />
              <RecoveryLink href="/reparations" label="Réparations" />
              <RecoveryLink href="/realisations" label="Nos réalisations" />
              <RecoveryLink href="/conseils" label="Conseils toiture" />
            </nav>

            <a
              href="tel:+33662125611"
              className="group mt-10 flex items-center gap-4"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-anthracite text-white transition-colors group-hover:bg-terracotta">
                <Phone className="h-4 w-4" />
              </span>

              <span>
                <span className="block text-xs uppercase tracking-[0.12em] text-anthracite/40">
                  Contact direct
                </span>

                <span className="mt-1 block font-semibold text-anthracite">
                  06 62 12 56 11
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* Ligne architecturale */}
        <div className="relative border-t border-anthracite/15 pt-6">
          <div className="absolute -top-px left-0 h-px w-1/3 bg-terracotta" />

          <div className="flex flex-col gap-2 font-mono text-xs uppercase tracking-[0.14em] text-anthracite/35 sm:flex-row sm:items-center sm:justify-between">
            <span>Narbonne Toiture</span>
            <span>Narbonne · Aude</span>
          </div>
        </div>
      </div>
    </main>
  );
}

function RecoveryLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between border-b border-anthracite/15 py-5"
    >
      <span className="font-medium text-anthracite transition-colors group-hover:text-terracotta">
        {label}
      </span>

      <ArrowRight className="h-4 w-4 text-anthracite/30 transition-all group-hover:translate-x-1 group-hover:text-terracotta" />
    </Link>
  );
}