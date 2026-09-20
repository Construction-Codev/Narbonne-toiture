export default function ContactArea() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              Zone d&apos;intervention
            </p>

            <h2 className="mt-5 text-5xl font-semibold tracking-[-0.055em] text-anthracite sm:text-6xl">
              Narbonne
              <span className="block text-anthracite/25">&amp; tout l’Aude.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="leading-7 text-anthracite/60">
              Narbonne Toiture intervient à Narbonne ainsi que dans l’ensemble
              du département de l’Aude pour les travaux et l’entretien de
              toiture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}