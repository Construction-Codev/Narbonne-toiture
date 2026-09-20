import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  adviceArticles,
  type AdviceArticle,
} from "@/data/conseils";

type ArticleRelatedProps = {
  article: AdviceArticle;
};

export default function ArticleRelated({
  article,
}: ArticleRelatedProps) {
  const related = article.relatedSlugs
    .map((slug) =>
      adviceArticles.find((candidate) => candidate.slug === slug),
    )
    .filter((candidate): candidate is AdviceArticle => Boolean(candidate));

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="bg-anthracite text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sand">
              Pour aller plus loin
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Continuer à comprendre votre toiture.
            </h2>
          </div>

          <Link
            href="/conseils"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-sand"
          >
            Tous les conseils
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-8">
          {related.map((relatedArticle) => (
            <article
              key={relatedArticle.slug}
              className="border-t border-white/15 pt-6"
            >
              <Link
                href={`/conseils/${relatedArticle.slug}`}
                className="group block"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={relatedArticle.image.src}
                    alt={relatedArticle.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="mt-6 flex items-start justify-between gap-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sand">
                      {relatedArticle.eyebrow}
                    </p>

                    <h3 className="mt-3 max-w-lg text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      {relatedArticle.title}
                    </h3>
                  </div>

                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-sand transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}