import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "À quelle fréquence faut-il démousser une toiture ?",
    answer:
      "Il n’existe pas une fréquence identique pour toutes les toitures. L’apparition des mousses et lichens dépend notamment de l’exposition, de l’humidité, de l’environnement du bâtiment, du matériau et de l’état de la couverture.",
  },
  {
    question: "Quelle différence entre mousse et lichen sur une toiture ?",
    answer:
      "Les mousses forment généralement des amas végétaux verts, tandis que les lichens peuvent apparaître sous forme de traces ou de plaques de différentes couleurs. Leur présence et leur développement peuvent varier selon les zones de la toiture.",
  },
  {
    question: "Nettoyage et démoussage, est-ce la même chose ?",
    answer:
      "Pas exactement. Le nettoyage concerne plus largement les salissures et dépôts présents sur la couverture. Le démoussage cible spécifiquement les mousses, lichens et autres végétaux qui s’y sont installés.",
  },
  {
    question: "Faut-il appliquer un hydrofuge après un démoussage ?",
    answer:
      "Pas systématiquement. Une protection hydrofuge peut être envisagée lorsque l’état et le matériau de la couverture s’y prêtent. Son intérêt doit donc être évalué en fonction de la toiture.",
  },
  {
    question: "Toutes les toitures peuvent-elles être démoussées de la même manière ?",
    answer:
      "Non. Le matériau, son état et le niveau de colonisation doivent être pris en compte. L’approche doit être adaptée à la couverture concernée.",
  },
  {
    question: "Où intervenez-vous pour un démoussage de toiture ?",
    answer:
      "Narbonne Toiture intervient à Narbonne et dans l’ensemble du département de l’Aude, notamment autour de Gruissan, Coursan, Sigean, Port-la-Nouvelle, Lézignan-Corbières et Carcassonne.",
  },
  {
    question: "Que faire si des tuiles semblent également endommagées ?",
    answer:
      "Le démoussage est une opération d’entretien et ne remplace pas une réparation. Si des éléments de couverture sont endommagés ou dégradés, leur état doit être pris en compte séparément.",
  },
];

export default function MossFAQ() {
  return (
    <section className="bg-ivory py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
              Questions fréquentes
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-[1.03] tracking-[-0.04em] text-anthracite sm:text-5xl">
              Avant un
              <br />
              <span className="text-terracotta">démoussage.</span>
            </h2>

            <p className="mt-6 max-w-sm text-base leading-7 text-anthracite/60">
              Mousses, lichens, fréquence d&apos;entretien ou protection :
              voici les principales questions concernant le démoussage
              d&apos;une toiture.
            </p>

            <Link
              href="/nettoyage-toiture"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-bold text-anthracite transition-colors hover:text-terracotta"
            >
              Voir le nettoyage de toiture

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
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