import Link from "next/link";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "À quoi sert un traitement hydrofuge de toiture ?",
    answer: (
      <>
        Un traitement hydrofuge constitue une protection complémentaire de la
        surface de certains matériaux de couverture. Il peut être envisagé pour
        limiter la pénétration de l’eau en surface lorsque l’état et la nature
        de la toiture s’y prêtent.
      </>
    ),
  },
  {
    question: "Peut-on appliquer un hydrofuge sur toutes les toitures ?",
    answer: (
      <>
        Non. La pertinence d’un traitement dépend notamment du matériau et de
        l’état de la couverture. Il est donc préférable d’examiner la toiture
        avant de déterminer si ce type de protection est approprié.
      </>
    ),
  },
  {
    question: "Faut-il nettoyer la toiture avant un traitement hydrofuge ?",
    answer: (
      <>
        L’état de la surface doit être pris en compte avant toute protection.
        Si la couverture présente des salissures, mousses ou lichens, un{" "}
        <Link
          href="/nettoyage-toiture"
          className="font-semibold text-terracotta underline decoration-terracotta/30 underline-offset-4 transition hover:decoration-terracotta"
        >
          nettoyage
        </Link>{" "}
        ou un{" "}
        <Link
          href="/demoussage-toiture"
          className="font-semibold text-terracotta underline decoration-terracotta/30 underline-offset-4 transition hover:decoration-terracotta"
        >
          démoussage
        </Link>{" "}
        peut devoir être envisagé au préalable.
      </>
    ),
  },
  {
    question: "Un hydrofuge peut-il réparer une toiture qui fuit ?",
    answer: (
      <>
        Non. Un traitement de surface ne remplace pas la recherche de l’origine
        d’une infiltration ni la réparation des éléments concernés. En présence
        d’une fuite, il faut d’abord identifier sa cause.
      </>
    ),
  },
  {
    question: "Peut-on appliquer un hydrofuge sur des tuiles endommagées ?",
    answer: (
      <>
        Des tuiles cassées, déplacées ou présentant une dégradation doivent
        d’abord faire l’objet d’une évaluation et, lorsque cela est nécessaire,
        d’une{" "}
        <Link
          href="/reparations"
          className="font-semibold text-terracotta underline decoration-terracotta/30 underline-offset-4 transition hover:decoration-terracotta"
        >
          réparation de toiture
        </Link>
        . Une protection hydrofuge n’a pas vocation à masquer ces désordres.
      </>
    ),
  },
  {
    question: "Intervenez-vous uniquement à Narbonne ?",
    answer: (
      <>
        Non. Narbonne Toiture intervient à Narbonne ainsi que dans l’ensemble du
        département de l’Aude, notamment à Gruissan, Coursan, Sigean,
        Port-la-Nouvelle, Lézignan-Corbières et Carcassonne.
      </>
    ),
  },
];

export default function HydrofugeFAQ() {
  return (
    <section className="bg-ivory py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          {/* Introduction */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta">
              Questions fréquentes
            </span>

            <h2 className="mt-5 max-w-lg text-4xl font-semibold tracking-[-0.04em] text-anthracite sm:text-5xl lg:text-6xl">
              Avant de protéger votre toiture.
            </h2>

            <p className="mt-7 max-w-md text-base leading-8 text-muted">
              Quelques réponses pour mieux distinguer protection, entretien et
              réparation de la couverture.
            </p>
          </div>

          {/* FAQ */}
          <div className="border-t border-anthracite/15">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-anthracite/15"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-7 sm:py-8 [&::-webkit-details-marker]:hidden">
                  <span className="max-w-2xl text-lg font-semibold leading-7 tracking-[-0.02em] text-anthracite sm:text-xl">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={21}
                    strokeWidth={1.7}
                    className="mt-1 shrink-0 text-terracotta transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>

                <div className="max-w-2xl pb-7 pr-8 text-sm leading-7 text-muted sm:pb-8 sm:text-base">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}