const faqs = [
  {
    question: "Quel est le rôle de la zinguerie sur une toiture ?",
    answer:
      "La zinguerie participe notamment à la gestion des eaux de pluie et aux raccords entre différents éléments de la toiture. Elle complète ainsi le travail réalisé sur la couverture.",
  },
  {
    question: "La zinguerie est-elle liée à l’étanchéité de la toiture ?",
    answer:
      "Certains éléments de zinguerie se trouvent au niveau de raccords et de points particuliers où la maîtrise du passage de l’eau est importante. La couverture et la zinguerie doivent donc être considérées comme des éléments complémentaires.",
  },
  {
    question: "Une infiltration peut-elle provenir d’un raccord de toiture ?",
    answer:
      "Oui, une infiltration peut concerner différents éléments de la toiture, dont certains raccords. La zone où l’eau devient visible à l’intérieur ne correspond toutefois pas nécessairement à son point d’entrée.",
  },
  {
    question: "Intervenez-vous sur la zinguerie à Narbonne ?",
    answer:
      "Oui. Narbonne Toiture réalise des travaux de zinguerie associés à la toiture à Narbonne et intervient également dans le département de l’Aude.",
  },
  {
    question: "Couverture et zinguerie peuvent-elles être réalisées ensemble ?",
    answer:
      "Oui. Lors de travaux de toiture, la couverture, les raccords et les éléments liés à l’évacuation de l’eau peuvent faire partie d’une même intervention selon la configuration et les travaux nécessaires.",
  },
];

export default function ZinguerieFAQ() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              Questions fréquentes
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-anthracite sm:text-5xl">
              Zinguerie et toiture.
            </h2>

            <p className="mt-6 max-w-sm leading-7 text-anthracite/60">
              Quelques repères pour mieux comprendre le rôle des éléments de
              zinguerie sur une couverture.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-anthracite/15">
              {faqs.map((faq, index) => (
                <article
                  key={faq.question}
                  className="grid gap-4 border-b border-anthracite/15 py-8 sm:grid-cols-[52px_minmax(0,1fr)] sm:gap-7"
                >
                  <span className="font-mono text-xs text-terracotta">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-anthracite">
                      {faq.question}
                    </h3>

                    <p className="mt-3 max-w-2xl leading-7 text-anthracite/65">
                      {faq.answer}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}