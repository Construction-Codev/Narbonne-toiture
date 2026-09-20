import Image from "next/image";
import { Clock } from "lucide-react";

import Breadcrumb from "@/components/ui/Breadcrumb";
import type { AdviceArticle } from "@/data/conseils";

type ArticleHeroProps = {
  article: AdviceArticle;
};

export default function ArticleHero({ article }: ArticleHeroProps) {
  return (
    <header className="bg-ivory">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-6 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Conseils", href: "/conseils" },
            { label: article.shortTitle },
          ]}
        />

        <div className="grid gap-10 pt-12 lg:grid-cols-12 lg:gap-16 lg:pt-16">
          <div className="lg:col-span-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              {article.eyebrow}
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.055em] text-anthracite sm:text-6xl lg:text-7xl">
              {article.title}
            </h1>
          </div>

          <div className="flex flex-col justify-end lg:col-span-4">
            <p className="max-w-md text-lg leading-8 text-anthracite/65">
              {article.introduction}
            </p>

            <div className="mt-7 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-anthracite/40">
              <Clock className="h-4 w-4" />
              Lecture · {article.readingTime}
            </div>
          </div>
        </div>

        <div className="relative mt-14 aspect-[4/3] overflow-hidden sm:aspect-[16/9] lg:mt-16 lg:aspect-[16/7]">
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </header>
  );
}