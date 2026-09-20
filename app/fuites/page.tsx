import type { Metadata } from "next";

import LeakHero from "@/components/fuites/LeakHero";
import LeakOrigin from "@/components/fuites/LeakOrigin";
import LeakWeakPoints from "@/components/fuites/LeakWeakPoints";
import LeakDiagnostic from "@/components/fuites/LeakDiagnostic";
import LeakDecision from "@/components/fuites/LeakDecision";
import LeakProject from "@/components/fuites/LeakProject";
import LeakLocalArea from "@/components/fuites/LeakLocalArea";
import LeakFAQ from "@/components/fuites/LeakFAQ";

const SITE_URL = "https://www.narbonnetoiture.fr";

export const metadata: Metadata = {
  title: "Fuite toiture Narbonne | Recherche d'infiltration",
  description:
    "Fuite ou infiltration de toiture à Narbonne ? Recherche de l'origine du problème et travaux de toiture adaptés à Narbonne et dans l'Aude.",
  alternates: {
    canonical: `${SITE_URL}/fuites`,
  },
  openGraph: {
    title: "Fuite de toiture à Narbonne | Narbonne Toiture",
    description:
      "Recherche de l'origine d'une infiltration et travaux de toiture à Narbonne et dans le département de l'Aude.",
    url: `${SITE_URL}/fuites`,
    type: "website",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Recherche de fuite de toiture à Narbonne",
  description:
    "Recherche de l'origine des infiltrations et travaux de toiture à Narbonne et dans le département de l'Aude.",
  url: `${SITE_URL}/fuites`,
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
  serviceType: "Recherche de fuite et infiltration de toiture",
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
      name: "Fuites de toiture",
      item: `${SITE_URL}/fuites`,
    },
  ],
};

export default function LeakPage() {
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
        <LeakHero />
        <LeakOrigin />
        <LeakWeakPoints />
        <LeakDiagnostic />
        <LeakDecision />
        <LeakProject />
        <LeakLocalArea />
        <LeakFAQ />
      </main>
    </>
  );
}