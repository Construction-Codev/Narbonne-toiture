const approach = [
  {
    number: "01",
    title: "Observer",
    text: "Comprendre la configuration de la toiture et regarder les éléments concernés avant de définir l’intervention.",
  },
  {
    number: "02",
    title: "Comprendre",
    text: "Distinguer un besoin d’entretien, une réparation localisée ou des travaux plus importants selon la situation rencontrée.",
  },
  {
    number: "03",
    title: "Intervenir",
    text: "Adapter les travaux à la couverture, à son état et aux éléments de toiture réellement concernés.",
  },
];

export default function AboutApproach() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              La manière de travailler
            </p>

            <h2 className="mt-5 max-w-md text-4xl font-semibold tracking-[-0.045em] text-anthracite sm:text-5xl">
              Comprendre avant d’intervenir.
            </h2>

            <p className="mt-6 max-w-sm leading-7 text-anthracite/60">
              Une toiture forme un ensemble. Une intervention pertinente
              commence par la compréhension de la situation rencontrée.
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border-t border-anthracite/15">
              {approach.map((item) => (
                <div
                  key={item.number}
                  className="grid grid-cols-[52px_minmax(0,1fr)] gap-5 border-b border-anthracite/15 py-8 sm:grid-cols-[70px_180px_minmax(0,1fr)] sm:gap-6"
                >
                  <span className="font-mono text-xs text-terracotta">
                    {item.number}
                  </span>

                  <h3 className="text-xl font-semibold tracking-[-0.025em] text-anthracite">
                    {item.title}
                  </h3>

                  <p className="col-start-2 leading-7 text-anthracite/60 sm:col-start-auto">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}