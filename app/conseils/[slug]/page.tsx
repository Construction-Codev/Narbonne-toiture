import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ArticleHero from "@/components/conseils/ArticleHero";
import ArticleContent from "@/components/conseils/ArticleContent";
import ArticleRelated from "@/components/conseils/ArticleRelated";

import {
  adviceArticles,
  getAdviceArticle,
} from "@/data/conseils";

const SITE_URL = "https://www.narbonnetoiture.fr";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return adviceArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getAdviceArticle(slug);

  if (!article) {
    return {};
  }

  const url = `${SITE_URL}/conseils/${article.slug}`;

  return {
    title: article.metaTitle,
    description: article.metaDescription,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url,
      type: "article",
      images: [
        {
          url: article.image.src,
          alt: article.image.alt,
        },
      ],
    },
  };
}

export default async function AdviceArticlePage({
  params,
}: PageProps) {
  const { slug } = await params;
  const article = getAdviceArticle(slug);

  if (!article) {
    notFound();
  }

  const url = `${SITE_URL}/conseils/${article.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: [`${SITE_URL}${article.image.src}`],
    author: {
      "@type": "Organization",
      name: "Narbonne Toiture",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Narbonne Toiture",
      url: SITE_URL,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Conseils",
        item: `${SITE_URL}/conseils`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.shortTitle,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <main>
        <ArticleHero article={article} />
        <ArticleContent article={article} />
        <ArticleRelated article={article} />
      </main>
    </>
  );
}