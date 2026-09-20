import type { Metadata } from "next";
import ServiceComparison from "@/components/services/ServiceComparison";
import CleaningFAQ from "@/components/services/CleaningFAQ";
import CleaningHero from "@/components/services/CleaningHero";
import CleaningLocalArea from "@/components/services/CleaningLocalArea";
import CleaningProcess from "@/components/services/CleaningProcess";
import CleaningWhy from "@/components/services/CleaningWhy";

const SITE_URL = "https://www.narbonnetoiture.fr";

export const metadata: Metadata = {
  title: "Nettoyage de toiture à Narbonne",
  description:
    "Nettoyage et entretien de toiture à Narbonne et dans l’Aude : mousses, lichens et salissures. Découvrez les services de Narbonne Toiture.",
  alternates: {
    canonical: "/nettoyage-toiture",
  },
  openGraph: {
    title: "Nettoyage de toiture à Narbonne | Narbonne Toiture",
    description:
      "Nettoyage et entretien de toiture à Narbonne et dans l’Aude : mousses, lichens et salissures.",
    url: "/nettoyage-toiture",
    type: "website",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Nettoyage de toiture à Narbonne",
  description:
    "Service de nettoyage et d’entretien de toiture à Narbonne et dans le département de l’Aude.",
  url: `${SITE_URL}/nettoyage-toiture`,
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
      name: "Nettoyage de toiture",
      item: `${SITE_URL}/nettoyage-toiture`,
    },
  ],
};

export default function NettoyageToiturePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <CleaningHero />
      <CleaningWhy />
      <CleaningProcess />
      <ServiceComparison current="cleaning" />
      <CleaningLocalArea />
      <CleaningFAQ />
    </>
  );
}