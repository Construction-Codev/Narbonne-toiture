const faqs = [
  {
    question: "Comment trouver l’origine d’une fuite de toiture ?",
    answer:
      "La zone où l’eau devient visible à l’intérieur ne correspond pas nécessairement à son point d’entrée. Il faut examiner la couverture, les raccords et les différents points susceptibles de laisser passer l’eau afin de rechercher l’origine de l’infiltration.",
  },
  {
    question: "Une tuile cassée peut-elle provoquer une infiltration ?",
    answer:
      "Une tuile cassée, déplacée ou manquante peut créer un point de passage pour l’eau. Il faut également observer les éléments situés autour de la zone concernée afin de déterminer l’étendue de l’intervention.",
  },
  {
    question: "Pourquoi une toiture peut-elle fuir lorsqu’il pleut ?",
    answer:
      "Une infiltration peut être liée à différents éléments de la toiture, notamment la couverture, certains raccords ou des points particuliers. L’origine doit être recherchée sur la toiture avant de déterminer la réparation adaptée.",
  },
  {
    question: "Une fuite signifie-t-elle qu’il faut refaire toute la toiture ?",
    answer:
      "Non, pas systématiquement. Lorsque le problème reste localisé et que le reste de la couverture ne nécessite pas de travaux importants, une réparation ciblée peut être envisagée. Une intervention plus étendue peut être nécessaire lorsque plusieurs zones sont concernées.",
  },
  {
    question: "Intervenez-vous pour les fuites de toiture à Narbonne ?",
    answer:
      "Oui. Narbonne Toiture intervient à Narbonne et dans le département de l’Aude pour rechercher l’origine des infiltrations et réaliser les travaux de toiture adaptés à la zone concernée.",
  },
];

export default function LeakFAQ() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              Questions fréquentes
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-anthracite sm:text-5xl">
              Fuite et infiltration de toiture.
            </h2>

            <p className="mt-6 max-w-sm leading-7 text-anthracite/60">
              Les principaux points à comprendre lorsqu’une infiltration
              apparaît dans un bâtiment.
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