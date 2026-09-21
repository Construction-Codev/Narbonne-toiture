import type { MetadataRoute } from "next";

import { adviceArticles } from "@/data/conseils";
import { realisations } from "@/data/realisations";

const SITE_URL = "https://www.narbonnetoiture.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/services`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/couverture`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/reparations`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/fuites`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/nettoyage-toiture`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/demoussage-toiture`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/hydrofuge-toiture`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/zinguerie`,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/charpente`,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/realisations`,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/conseils`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/a-propos`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contact`,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/mentions-legales`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/confidentialite`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const realizationPages: MetadataRoute.Sitemap = realisations.map(
    (realisation) => ({
      url: `${SITE_URL}/realisations/${realisation.slug}`,
      changeFrequency: "monthly",
      priority: 0.75,
    }),
  );

  const advicePages: MetadataRoute.Sitemap = adviceArticles.map(
    (article) => ({
      url: `${SITE_URL}/conseils/${article.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  return [...staticPages, ...realizationPages, ...advicePages];
}