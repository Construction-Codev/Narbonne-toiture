import Link from "next/link";
import { ArrowRight, HelpCircle, Plus } from "lucide-react";

const faqs = [
  {
    question: "Quand faut-il faire nettoyer sa toiture ?",
    answer:
      "La fréquence dépend de l’environnement, du matériau de couverture et de son état. L’apparition de mousses, lichens, dépôts ou salissures peut notamment justifier un contrôle et, si nécessaire, un nettoyage adapté.",
  },
  {
    question: "Pourquoi démousser une toiture ?",
    answer:
      "Le démoussage permet de retirer les mousses, lichens et autres végétaux présents sur la couverture. L’intervention doit être adaptée au type de toiture afin de nettoyer les matériaux sans employer une méthode inappropriée.",
  },
  {
    question: "À quoi sert un traitement hydrofuge ?",
    answer:
      "Selon le matériau et l’état de la couverture, un traitement hydrofuge peut être envisagé après l’entretien afin de renforcer la protection de la surface face à l’eau. Sa pertinence doit être évaluée en fonction de la toiture.",
  },
  {
    question: "Intervenez-vous uniquement à Narbonne ?",
    answer:
      "Non. Narbonne Toiture intervient à Narbonne ainsi que dans l’ensemble du département de l’Aude, notamment autour de Gruissan, Coursan, Sigean, Port-la-Nouvelle, Lézignan-Corbières et Carcassonne.",
  },
  {
    question: "Que faire en cas de fuite de toiture ?",
    answer:
      "Une infiltration peut avoir différentes origines : tuile déplacée ou endommagée, défaut d’étanchéité, raccord ou élément de zinguerie. Il est préférable d’identifier l’origine du problème avant de déterminer la réparation à effectuer.",
  },
  {
    question: "Narbonne Toiture réalise-t-elle aussi des travaux de couverture ?",
    answer:
      "Oui. En complément de l’entretien et de la protection des toitures, Narbonne Toiture intervient pour les travaux de couverture, les réparations, la recherche de fuite, la zinguerie et la charpente.",
  },
];

export default function HomeFAQ() {
  return (
    <section className="bg-anthracite py-20 text-white sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Introduction */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-3">
                <HelpCircle
                  size={17}
                  className="text-terracotta-light"
                  aria-hidden="true"
                />

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-terracotta-light">
                  Questions fréquentes
                </p>
              </div>

              <h2 className="mt-6 max-w-xl text-4xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Parlons
                <br />
                <span className="text-terracotta-light">toiture.</span>
              </h2>

              <p className="mt-7 max-w-md text-base leading-7 text-white/60">
                Entretien, démoussage, hydrofuge ou réparation : voici les
                réponses aux questions les plus courantes avant une
                intervention.
              </p>

              <div className="mt-9">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-4 font-bold text-white"
                >
                  Poser une question

                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-terracotta transition-colors group-hover:bg-terracotta-light">
                    <ArrowRight
                      size={18}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="lg:col-span-7">
            <div className="border-t border-white/15">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group border-b border-white/15"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-7 marker:hidden sm:py-8 [&::-webkit-details-marker]:hidden">
                    <div className="flex gap-5 sm:gap-7">
                      <span className="mt-1 text-xs font-bold tracking-[0.12em] text-terracotta-light">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="max-w-xl text-lg font-bold leading-snug tracking-[-0.015em] text-white sm:text-xl">
                        {faq.question}
                      </h3>
                    </div>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition duration-300 group-open:rotate-45 group-open:border-terracotta group-open:bg-terracotta">
                      <Plus size={17} aria-hidden="true" />
                    </span>
                  </summary>

                  <div className="pb-8 pl-10 pr-12 sm:pl-[4.75rem] sm:pr-16">
                    <p className="max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>

            {/* Contact mobile / complément */}
            <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 sm:p-7">
              <p className="text-sm font-bold text-white">
                Vous ne trouvez pas votre réponse ?
              </p>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Présentez-nous votre besoin afin d&apos;échanger sur votre
                toiture.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-terracotta-light transition hover:text-white"
              >
                Nous contacter
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}