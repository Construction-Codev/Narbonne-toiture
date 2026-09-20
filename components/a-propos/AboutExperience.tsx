export default function AboutExperience() {
  return (
    <section className="overflow-hidden bg-anthracite text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-sand">
              L’expérience du terrain
            </p>

            <div className="mt-6 text-[9rem] font-semibold leading-[0.75] tracking-[-0.08em] text-white sm:text-[12rem] lg:text-[15rem]">
              20
            </div>

            <p className="mt-5 text-lg font-medium text-sand">
              ans de métier
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Une expérience qui se construit toiture après toiture.
            </h2>

            <div className="mt-8 max-w-xl space-y-6 text-lg leading-8 text-white/65">
              <p>
                Chaque toiture présente sa propre configuration : pente,
                couverture, raccords, structure, exposition et état général.
              </p>

              <p>
                Vingt années de métier permettent d’avoir rencontré des
                situations très différentes et d’aborder un chantier en tenant
                compte de l’ensemble de la toiture, plutôt que d’un seul
                élément pris isolément.
              </p>
            </div>

            <div className="mt-12 border-t border-white/15 pt-6">
              <p className="max-w-lg text-sm leading-6 text-white/45">
                Cette expérience concerne aussi bien les travaux de couverture
                que l’entretien, les réparations, les problèmes d’infiltration,
                la zinguerie et les interventions liées à la charpente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}