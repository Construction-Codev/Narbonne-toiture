import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { AdviceArticle } from "@/data/conseils";

type ArticleContentProps = {
  article: AdviceArticle;
};

export default function ArticleContent({ article }: ArticleContentProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-anthracite/40">
                Dans ce conseil
              </p>

              <div className="mt-6 border-t border-anthracite/15">
                {article.sections
                  .filter((section) => section.type === "h2")
                  .map((section, index) => (
                    <div
                      key={`${section.title}-${index}`}
                      className="border-b border-anthracite/15 py-4"
                    >
                      <span className="text-sm leading-6 text-anthracite/60">
                        {section.title}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </aside>

          <article className="lg:col-span-7 lg:col-start-5">
            {article.sections.map((section, index) => {
              if (section.type === "paragraph") {
                return (
                  <p
                    key={index}
                    className="mb-7 text-lg leading-8 text-anthracite/70"
                  >
                    {section.content}
                  </p>
                );
              }

              if (section.type === "h2") {
                return (
                  <div
                    key={index}
                    className="mb-8 mt-16 first:mt-0"
                  >
                    <h2 className="text-3xl font-semibold tracking-[-0.035em] text-anthracite sm:text-4xl">
                      {section.title}
                    </h2>

                    {section.content && (
                      <p className="mt-5 text-lg leading-8 text-anthracite/65">
                        {section.content}
                      </p>
                    )}
                  </div>
                );
              }

              if (section.type === "h3") {
                return (
                  <div key={index} className="mb-8 mt-10">
                    <h3 className="text-2xl font-semibold tracking-[-0.025em] text-anthracite">
                      {section.title}
                    </h3>

                    {section.content && (
                      <p className="mt-4 leading-7 text-anthracite/65">
                        {section.content}
                      </p>
                    )}
                  </div>
                );
              }

              if (section.type === "list") {
                return (
                  <ul
                    key={index}
                    className="my-9 border-y border-anthracite/15"
                  >
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={item}
                        className="grid grid-cols-[42px_minmax(0,1fr)] border-b border-anthracite/10 py-4 last:border-b-0"
                      >
                        <span className="font-mono text-xs text-terracotta">
                          {String(itemIndex + 1).padStart(2, "0")}
                        </span>

                        <span className="leading-7 text-anthracite/70">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                );
              }

              if (section.type === "callout") {
                return (
                  <aside
                    key={index}
                    className="my-12 border-l-2 border-terracotta bg-ivory px-7 py-7 sm:px-9 sm:py-8"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">
                      {section.title}
                    </p>

                    <p className="mt-4 text-lg leading-8 text-anthracite/70">
                      {section.content}
                    </p>
                  </aside>
                );
              }

              return null;
            })}

            <div className="mt-16 border-t border-anthracite/15 pt-8">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-anthracite/40">
                Services associés
              </p>

              <div className="mt-5 flex flex-col gap-3">
                {article.serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between border-b border-anthracite/15 py-4"
                  >
                    <span className="font-medium text-anthracite">
                      {link.label}
                    </span>

                    <ArrowRight className="h-4 w-4 text-terracotta transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}