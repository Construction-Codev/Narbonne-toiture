import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { realisations } from "@/data/realisations";

export default function RealisationsGrid() {
  return (
    <section className="overflow-hidden bg-ivory-light pb-24 pt-8 sm:pb-28 lg:pb-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="space-y-20 sm:space-y-24 lg:space-y-32">
          {realisations.map((realisation, index) => {
            const reversed = index % 2 !== 0;
            const featured = index === 0;

            return (
              <article
                key={realisation.slug}
                className={[
                  "grid items-center gap-8 lg:grid-cols-12 lg:gap-12",
                  featured ? "lg:min-h-[650px]" : "",
                ].join(" ")}
              >
                <Link
                  href={`/realisations/${realisation.slug}`}
                  className={[
                    "group relative overflow-hidden bg-anthracite",
                    featured
                      ? "min-h-[500px] sm:min-h-[620px] lg:col-span-8 lg:min-h-[700px]"
                      : "min-h-[420px] sm:min-h-[520px] lg:col-span-7 lg:min-h-[580px]",
                    reversed
                      ? "lg:col-start-6 lg:row-start-1"
                      : "lg:col-start-1",
                  ].join(" ")}
                >
                  <Image
                    src={realisation.heroImage.src}
                    alt={realisation.heroImage.alt}
                    fill
                    sizes={
                      featured
                        ? "(max-width: 1024px) 100vw, 66vw"
                        : "(max-width: 1024px) 100vw, 58vw"
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-anthracite/55 via-transparent to-transparent" />

                  <div className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center bg-white text-anthracite transition group-hover:bg-terracotta group-hover:text-white sm:bottom-8 sm:right-8">
                    <ArrowUpRight size={19} aria-hidden="true" />
                  </div>
                </Link>

                <div
                  className={[
                    featured
                      ? "lg:col-span-4"
                      : "lg:col-span-4",
                    reversed
                      ? "lg:col-start-1 lg:row-start-1"
                      : "lg:col-start-9",
                  ].join(" ")}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
                      {realisation.seoLocation}
                    </span>

                    <span className="h-px flex-1 bg-border" />
                  </div>

                  <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-anthracite sm:text-4xl">
                    {realisation.shortTitle}
                  </h2>

                  <p className="mt-5 text-base leading-8 text-muted">
                    {realisation.description}
                  </p>

                  <Link
                    href={`/realisations/${realisation.slug}`}
                    className="group mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-anthracite transition hover:text-terracotta"
                  >
                    Découvrir le chantier
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}