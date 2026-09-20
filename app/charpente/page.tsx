import type { Metadata } from "next";

import CharpenteHero from "@/components/charpente/CharpenteHero";
import CharpenteStructure from "@/components/charpente/CharpenteStructure";
import CharpenteSigns from "@/components/charpente/CharpenteSigns";
import CharpenteIntervention from "@/components/charpente/CharpenteIntervention";
import CharpenteProject from "@/components/charpente/CharpenteProject";
import CharpenteLocalArea from "@/components/charpente/CharpenteLocalArea";
import CharpenteFAQ from "@/components/charpente/CharpenteFAQ";

const SITE_URL = "https://www.narbonnetoiture.fr";

export const metadata: Metadata = {
  title: "Charpente Narbonne | Travaux de toiture dans l'Aude",
  description:
    "Travaux de charpente associés à la toiture à Narbonne et dans l'Aude. Structure bois, couverture et interventions adaptées à l'état de la toiture.",
  alternates: {
    canonical: `${SITE_URL}/charpente`,
  },
  openGraph: {
    title: "Charpente à Narbonne | Narbonne Toiture",
    description:
      "Travaux de charpente associés à la couverture à Narbonne et dans le département de l'Aude.",
    url: `${SITE_URL}/charpente`,
    type: "website",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Travaux de charpente à Narbonne",
  description:
    "Travaux de charpente associés à la toiture à Narbonne et dans le département de l'Aude.",
  url: `${SITE_URL}/charpente`,
  provider: {
    "@type": "RoofingContractor",
    name: "Narbonne Toiture",
    url: SITE_URL,
    telephone: "+33662125611",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Aude",
  },
  serviceType: "Travaux de charpente",
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
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Charpente",
      item: `${SITE_URL}/charpente`,
    },
  ],
};

export default function CharpentePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <main>
        <CharpenteHero />
        <CharpenteStructure />
        <CharpenteSigns />
        <CharpenteIntervention />
        <CharpenteProject />
        <CharpenteLocalArea />
        <CharpenteFAQ />
      </main>
    </>
  );
}