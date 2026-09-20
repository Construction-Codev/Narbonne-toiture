import type { Metadata } from "next";
import { notFound } from "next/navigation";

import RealisationHero from "@/components/realisations/RealisationHero";
import RealisationStory from "@/components/realisations/RealisationStory";
import RealisationSteps from "@/components/realisations/RealisationSteps";
import RealisationGallery from "@/components/realisations/RealisationGallery";
import RealisationServices from "@/components/realisations/RealisationServices";
import RealisationLocalArea from "@/components/realisations/RealisationLocalArea";

import {
  getRealisationBySlug,
  realisations,
} from "@/data/realisations";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return realisations.map((realisation) => ({
    slug: realisation.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const realisation = getRealisationBySlug(slug);

  if (!realisation) {
    return {};
  }

  return {
    title: realisation.metaTitle,
    description: realisation.metaDescription,

    alternates: {
      canonical: `/realisations/${realisation.slug}`,
    },

    openGraph: {
      title: realisation.metaTitle,
      description: realisation.metaDescription,
      url: `/realisations/${realisation.slug}`,
      type: "article",
      images: [
        {
          url: realisation.heroImage.src,
          alt: realisation.heroImage.alt,
        },
      ],
    },
  };
}

export default async function RealisationPage({ params }: PageProps) {
  const { slug } = await params;
  const realisation = getRealisationBySlug(slug);

  if (!realisation) {
    notFound();
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://www.narbonnetoiture.fr/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Réalisations",
        item: "https://www.narbonnetoiture.fr/realisations",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: realisation.title,
        item: `https://www.narbonnetoiture.fr/realisations/${realisation.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <RealisationHero realisation={realisation} />
      <RealisationStory realisation={realisation} />
      <RealisationSteps realisation={realisation} />
      <RealisationGallery realisation={realisation} />
      <RealisationServices realisation={realisation} />
      <RealisationLocalArea realisation={realisation} />
    </>
  );
}