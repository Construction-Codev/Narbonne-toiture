import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Quand faut-il nettoyer sa toiture ?",
    answer:
      "Il n’existe pas une fréquence identique pour toutes les toitures. L’exposition, l’environnement, le matériau de couverture et la présence de mousses, lichens ou salissures influencent les besoins d’entretien.",
  },
  {
    question: "Quelle est la différence entre nettoyage et démoussage ?",
    answer:
      "Le nettoyage concerne l’entretien général de la couverture et le retrait des salissures et dépôts. Le démoussage cible plus spécifiquement les mousses, lichens et végétaux présents sur la toiture.",
  },
  {
    question: "Faut-il appliquer un hydrofuge après un nettoyage ?",
    answer:
      "Pas systématiquement. Un traitement hydrofuge peut être envisagé lorsque l’état et le matériau de la couverture s’y prêtent. Le besoin doit donc être évalué en fonction de la toiture.",
  },
  {
    question: "Peut-on nettoyer toutes les toitures de la même manière ?",
    answer:
      "Non. Les matériaux et leur état peuvent être différents d’une toiture à l’autre. La méthode d’entretien doit être adaptée à la couverture concernée.",
  },
  {
    question: "Intervenez-vous uniquement à Narbonne ?",
    answer:
      "Non. Narbonne Toiture intervient à Narbonne ainsi que dans l’ensemble du département de l’Aude, notamment autour de Gruissan, Coursan, Sigean, Port-la-Nouvelle, Lézignan-Corbières et Carcassonne.",
  },
  {
    question: "Que faire si des tuiles sont endommagées ?",
    answer:
      "Un nettoyage ne remplace pas une réparation. Si certains éléments de la couverture sont endommagés ou dégradés, une intervention de réparation peut être nécessaire.",
  },
];

export default function CleaningFAQ() {
  return (
    <section className="bg-ivory py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
              Questions fréquentes
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-[1.03] tracking-[-0.04em] text-anthracite sm:text-5xl">
              Nettoyage
              <br />
              <span className="text-terracotta">de toiture.</span>
            </h2>

            <p className="mt-6 max-w-sm text-base leading-7 text-anthracite/60">
              Quelques réponses aux questions courantes avant de faire
              entretenir une toiture à Narbonne ou dans l&apos;Aude.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-anthracite/10">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border-b border-anthracite/10"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 font-bold text-anthracite marker:content-none sm:text-lg">
                    <span>{faq.question}</span>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-anthracite/10 text-terracotta">
                      <ChevronDown
                        size={17}
                        className="transition-transform duration-300 group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </span>
                  </summary>

                  <div className="max-w-2xl pb-7 pr-12 text-sm leading-7 text-anthracite/60 sm:text-base">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}