export default function RealisationsIntro() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta">
              Le métier en images
            </span>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-anthracite sm:text-5xl lg:text-6xl">
              Chaque toiture raconte un chantier différent.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:pt-12">
            <p className="text-base leading-8 text-muted sm:text-lg">
              Maison, couverture ancienne, rénovation plus importante ou
              intervention ciblée : ces réalisations donnent un aperçu concret
              du travail effectué sur différents types de toitures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}