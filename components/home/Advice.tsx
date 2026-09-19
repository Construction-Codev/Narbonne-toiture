import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

const articles = [
  {
    number: "01",
    category: "Entretien",
    title: "Quand faut-il démousser une toiture ?",
    description:
      "Mousses, lichens et dépôts peuvent progressivement s’installer sur une couverture. Découvrez les signes à observer et les moments où un entretien peut être envisagé.",
    href: "/conseils/quand-demousser-toiture",
  },
  {
    number: "02",
    category: "Protection",
    title: "À quoi sert un traitement hydrofuge ?",
    description:
      "Le traitement hydrofuge peut compléter l’entretien de certaines couvertures. Son intérêt dépend notamment du matériau et de l’état de la toiture.",
    href: "/conseils/traitement-hydrofuge-toiture",
  },
  {
    number: "03",
    category: "Réparation",
    title: "Comment repérer une infiltration de toiture ?",
    description:
      "Traces d’humidité, auréoles ou éléments de couverture déplacés peuvent signaler un problème. Voici les principaux indices à surveiller.",
    href: "/conseils/reperer-infiltration-toiture",
  },
];

export default function Advice() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* En-tête */}
        <div className="grid gap-8 border-b border-anthracite/10 pb-10 lg:grid-cols-12 lg:items-end lg:pb-14">
          <div className="lg:col-span-7">
            <div className="mb-5 flex items-center gap-3">
              <BookOpen
                size={17}
                className="text-terracotta"
                aria-hidden="true"
              />

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
                Conseils toiture
              </p>
            </div>

            <h2 className="max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-anthracite sm:text-5xl lg:text-6xl">
              Mieux comprendre
              <br />
              <span className="text-terracotta">votre toiture.</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="max-w-lg text-base leading-7 text-anthracite/65 sm:text-lg">
              Entretien, protection, réparations : retrouvez nos conseils pour
              mieux identifier les besoins de votre couverture.
            </p>

            <Link
              href="/conseils"
              className="group mt-6 inline-flex items-center gap-3 font-bold text-anthracite transition-colors hover:text-terracotta"
            >
              Tous les conseils

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta text-white transition-transform group-hover:translate-x-1">
                <ArrowRight size={17} aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>

        {/* Articles */}
        <div>
          {articles.map((article) => (
            <Link
              key={article.number}
              href={article.href}
              className="group grid gap-5 border-b border-anthracite/10 py-8 transition-colors hover:bg-ivory/50 sm:py-10 lg:grid-cols-12 lg:items-center lg:px-5"
            >
              {/* Numéro */}
              <div className="lg:col-span-1">
                <span className="text-sm font-bold tracking-[0.12em] text-terracotta">
                  {article.number}
                </span>
              </div>

              {/* Catégorie */}
              <div className="lg:col-span-2">
                <span className="inline-flex rounded-full bg-ivory px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-anthracite">
                  {article.category}
                </span>
              </div>

              {/* Titre */}
              <div className="lg:col-span-4">
                <h3 className="max-w-md text-2xl font-bold leading-tight tracking-[-0.025em] text-anthracite transition-colors group-hover:text-terracotta">
                  {article.title}
                </h3>
              </div>

              {/* Description */}
              <div className="lg:col-span-4">
                <p className="max-w-lg text-sm leading-6 text-anthracite/55">
                  {article.description}
                </p>
              </div>

              {/* Flèche */}
              <div className="flex lg:col-span-1 lg:justify-end">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-anthracite/15 text-anthracite transition-all duration-300 group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-white">
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bas de section */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-xs leading-5 text-anthracite/40">
            Ces contenus ont vocation à informer. L&apos;état réel d&apos;une
            toiture doit être apprécié en fonction de sa couverture et de sa
            situation.
          </p>

          <Link
            href="/contact"
            className="text-sm font-bold text-anthracite transition hover:text-terracotta"
          >
            Une question sur votre toiture ?
          </Link>
        </div>
      </div>
    </section>
  );
}