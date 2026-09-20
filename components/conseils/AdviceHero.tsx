import Breadcrumb from "@/components/ui/Breadcrumb";

export default function AdviceHero() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-6 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Conseils" },
          ]}
        />

        <div className="grid gap-10 pt-12 lg:grid-cols-12 lg:items-end lg:gap-16 lg:pt-16">
          <div className="lg:col-span-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              Conseils toiture
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.055em] text-anthracite sm:text-6xl lg:text-7xl">
              Comprendre sa toiture pour mieux l’entretenir.
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="max-w-md text-lg leading-8 text-anthracite/60">
              Entretien, démoussage, protection, fuites et travaux de
              couverture : des repères pour mieux comprendre les différents
              éléments d’une toiture.
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-anthracite/15 pt-5 lg:mt-16">
          <div className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs uppercase tracking-[0.15em] text-anthracite/40">
            <span>Entretenir</span>
            <span>Comprendre</span>
            <span>Protéger</span>
            <span>Réparer</span>
          </div>
        </div>
      </div>
    </section>
  );
}