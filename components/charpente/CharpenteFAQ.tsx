const faqs = [
  {
    question: "Quel est le rôle de la charpente dans une toiture ?",
    answer:
      "La charpente constitue la structure située sous la couverture. Elle fait partie de l’ensemble sur lequel reposent les différents éléments de la toiture.",
  },
  {
    question: "Comment savoir si une charpente doit être examinée ?",
    answer:
      "Une déformation visible, des éléments en bois présentant une dégradation ou une anomalie découverte pendant des travaux de toiture peuvent conduire à examiner plus précisément la zone concernée.",
  },
  {
    question:
      "Un problème de charpente oblige-t-il à refaire toute la toiture ?",
    answer:
      "Pas nécessairement. L’ampleur des travaux dépend de la partie concernée, de son état et de sa relation avec le reste de la toiture. La situation doit être examinée avant de déterminer l’intervention adaptée.",
  },
  {
    question:
      "Peut-on intervenir sur la charpente pendant des travaux de couverture ?",
    answer:
      "Selon la situation, des travaux concernant la charpente peuvent être envisagés en même temps que des travaux de couverture lorsque les différentes parties de la toiture sont concernées.",
  },
  {
    question: "Intervenez-vous sur les charpentes à Narbonne ?",
    answer:
      "Oui. Narbonne Toiture réalise des travaux de charpente associés à la toiture à Narbonne et intervient également dans le département de l’Aude.",
  },
];

export default function CharpenteFAQ() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              Questions fréquentes
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-anthracite sm:text-5xl">
              Charpente et toiture.
            </h2>

            <p className="mt-6 max-w-sm leading-7 text-anthracite/60">
              Quelques repères pour comprendre la place de la charpente dans
              l’ensemble de la toiture.
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