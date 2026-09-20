const faqs = [
  {
    question: "Une tuile cassée peut-elle être remplacée seule ?",
    answer:
      "Lorsque le problème est limité à une tuile ou à une petite zone et que les éléments environnants sont en état satisfaisant, une intervention localisée peut être envisagée. L’état de la couverture doit néanmoins être observé avant de déterminer la réparation adaptée.",
  },
  {
    question: "Faut-il refaire toute la toiture lorsqu’elle est endommagée ?",
    answer:
      "Non, pas systématiquement. Une réparation ciblée peut être suffisante lorsque le problème reste localisé. Des travaux plus importants peuvent en revanche être nécessaires lorsque plusieurs zones de la couverture sont concernées.",
  },
  {
    question: "Pouvez-vous rechercher l’origine d’une fuite ?",
    answer:
      "Une infiltration peut apparaître à un endroit différent de son point d’entrée. Il est donc important d’examiner la toiture afin de rechercher l’origine probable du problème avant d’envisager la réparation.",
  },
  {
    question: "Intervenez-vous aussi sur la zinguerie ?",
    answer:
      "Oui. Narbonne Toiture réalise également des travaux de zinguerie. Selon la configuration de la toiture, certains raccords ou éléments métalliques peuvent faire partie des zones à examiner.",
  },
  {
    question: "Dans quelles villes intervenez-vous ?",
    answer:
      "Narbonne Toiture intervient à Narbonne et dans l’ensemble du département de l’Aude, notamment dans les secteurs de Coursan, Gruissan, Sigean, Port-la-Nouvelle, Lézignan-Corbières et Carcassonne.",
  },
];

export default function RepairFAQ() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              Questions fréquentes
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-anthracite sm:text-5xl">
              Avant une réparation de toiture.
            </h2>

            <p className="mt-6 max-w-sm leading-7 text-anthracite/60">
              Quelques réponses aux questions qui se posent lorsqu’un problème
              apparaît sur une couverture.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-anthracite/15">
              {faqs.map((faq, index) => (
                <article
                  key={faq.question}
                  className="grid gap-4 border-b border-anthracite/15 py-8 sm:grid-cols-[52px_1fr] sm:gap-7"
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