const faqs = [
  {
    question: "Quand faut-il envisager de rénover une toiture ?",
    answer:
      "Une rénovation peut être envisagée lorsque la couverture présente des tuiles déplacées ou détériorées, des défauts récurrents ou un état général qui nécessite une intervention plus importante qu’une réparation ponctuelle. L’étendue des travaux dépend de l’état réel de la toiture.",
  },
  {
    question: "Faut-il remplacer toute la couverture en cas de problème ?",
    answer:
      "Pas nécessairement. Certaines situations peuvent être traitées par une intervention localisée. Dans d’autres cas, l’état de plusieurs zones peut justifier des travaux plus étendus. L’objectif est d’adapter l’intervention aux besoins constatés sur la toiture.",
  },
  {
    question: "Intervenez-vous uniquement sur les tuiles ?",
    answer:
      "Non. Les travaux de toiture peuvent également concerner les éléments situés sous la couverture ainsi que différents points associés à son fonctionnement. Narbonne Toiture intervient notamment en couverture, zinguerie, charpente et réparation de toiture.",
  },
  {
    question: "Pouvez-vous intervenir sur une fuite de toiture ?",
    answer:
      "Oui. Une fuite peut nécessiter une recherche de son origine avant de déterminer la réparation appropriée. Une intervention ciblée peut parfois suffire, tandis qu’un problème plus étendu peut nécessiter des travaux supplémentaires sur la couverture.",
  },
  {
    question: "Intervenez-vous en dehors de Narbonne ?",
    answer:
      "Oui. Narbonne Toiture intervient à Narbonne et dans l’ensemble du département de l’Aude, notamment dans les secteurs de Coursan, Gruissan, Sigean, Port-la-Nouvelle, Lézignan-Corbières et Carcassonne.",
  },
];

export default function CoverageFAQ() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              Questions fréquentes
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-anthracite sm:text-5xl">
              Avant des travaux de couverture.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-anthracite/65">
              Quelques repères pour mieux comprendre les interventions
              possibles sur une toiture.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-anthracite/15">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="grid gap-4 border-b border-anthracite/15 py-8 sm:grid-cols-[48px_1fr] sm:gap-6"
                >
                  <span className="font-mono text-sm text-terracotta">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}