import type { Metadata } from "next";

import AboutHero from "@/components/a-propos/AboutHero";
import AboutExperience from "@/components/a-propos/AboutExperience";
import AboutApproach from "@/components/a-propos/AboutApproach";
import AboutExpertise from "@/components/a-propos/AboutExpertise";
import AboutTerritory from "@/components/a-propos/AboutTerritory";
import AboutProjects from "@/components/a-propos/AboutProjects";

const SITE_URL = "https://www.narbonnetoiture.fr";

export const metadata: Metadata = {
  title: "À propos | Couvreur à Narbonne depuis 20 ans",
  description:
    "Découvrez Narbonne Toiture et 20 ans d'expérience dans les travaux de toiture, couverture, entretien et réparation à Narbonne et dans l'Aude.",
  alternates: {
    canonical: `${SITE_URL}/a-propos`,
  },
  openGraph: {
    title: "À propos de Narbonne Toiture",
    description:
      "20 ans de métier dans les travaux de toiture à Narbonne et dans l'Aude.",
    url: `${SITE_URL}/a-propos`,
    type: "website",
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
      name: "À propos",
      item: `${SITE_URL}/a-propos`,
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

     <main>
        <AboutHero />
        <AboutExperience />
        <AboutApproach />
        <AboutExpertise />
        <AboutTerritory />
        <AboutProjects />
    </main>
    </>
  );
}