import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

import { adviceArticles } from "@/data/conseils";

export default function AdviceGrid() {
  const [featured, ...articles] = adviceArticles;

  if (!featured) {
    return null;
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <article>
          <Link
            href={`/conseils/${featured.slug}`}
            className="group grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16"
          >
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
                <Image
                  src={featured.image.src}
                  alt={featured.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">
                  {featured.eyebrow}
                </span>

                <span className="h-px w-8 bg-anthracite/20" />

                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-anthracite/40">
                  <Clock className="h-3.5 w-3.5" />
                  {featured.readingTime}
                </span>
              </div>

              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-anthracite sm:text-5xl">
                {featured.title}
              </h2>

              <p className="mt-6 max-w-xl leading-7 text-anthracite/60">
                {featured.introduction}
              </p>

              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-terracotta">
                Lire le conseil
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </article>

        <div className="mt-24 border-t border-anthracite/15 pt-12 sm:mt-28 lg:mt-32">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
                À lire également
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-anthracite sm:text-4xl">
                Nos derniers conseils
              </h2>
            </div>

            <span className="hidden font-mono text-xs uppercase tracking-[0.15em] text-anthracite/35 sm:block">
              Entretien · Protection · Diagnostic
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="border-t border-anthracite/15 pt-6"
              >
                <Link
                  href={`/conseils/${article.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={article.image.src}
                      alt={article.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">
                      {article.eyebrow}
                    </span>

                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-anthracite/40">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readingTime}
                    </span>
                  </div>

                  <div className="mt-4 flex items-start justify-between gap-8">
                    <h3 className="max-w-lg text-2xl font-semibold tracking-[-0.03em] text-anthracite sm:text-3xl">
                      {article.title}
                    </h3>

                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-terracotta transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>

                  <p className="mt-5 max-w-xl leading-7 text-anthracite/60">
                    {article.introduction}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}