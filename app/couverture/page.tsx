import type { Metadata } from "next";

import CoverageHero from "@/components/services/Coverage/CoverageHero";
import CoverageSystem from "@/components/services/Coverage/CoverageSystem";
import CoverageWork from "@/components/services/Coverage/CoverageWork";
import CoverageDecision from "@/components/services/Coverage/CoverageDecision";
import CoverageGallery from "@/components/services/Coverage/CoverageGallery";
import CoverageLocalArea from "@/components/services/Coverage/CoverageLocalArea";
import CoverageFAQ from "@/components/services/Coverage/CoverageFAQ";


const SITE_URL = "https://www.narbonnetoiture.fr";

export const metadata: Metadata = {
  title: "Couvreur à Narbonne | Travaux de couverture",
  description:
    "Travaux de couverture à Narbonne et dans l’Aude. Narbonne Toiture intervient pour l’entretien, la réparation et les besoins concernant votre toiture.",
  alternates: {
    canonical: "/couverture",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${SITE_URL}/couverture`,
    title: "Couvreur à Narbonne | Travaux de couverture",
    description:
      "Travaux de couverture à Narbonne et dans l’Aude : entretien, réparation et interventions sur votre toiture.",
    images: [
      {
        url: "/images/services/couverture-narbonne.webp",
        alt: "Toiture méditerranéenne en tuiles dans l’Aude",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Travaux de couverture à Narbonne",
  description:
    "Travaux de couverture à Narbonne et dans le département de l’Aude.",
  url: `${SITE_URL}/couverture`,
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Aude",
  },
  provider: {
    "@type": "Organization",
    name: "Narbonne Toiture",
    url: SITE_URL,
    telephone: "+33662125611",
  },
};

const breadcrumbSchema = {
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
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Couverture",
      item: `${SITE_URL}/couverture`,
    },
  ],
};

export default function CouverturePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <CoverageHero />
      <CoverageSystem />
      <CoverageWork />
      <CoverageDecision />
      <CoverageGallery />
      <CoverageLocalArea />
      <CoverageFAQ />
    </>
  );
}