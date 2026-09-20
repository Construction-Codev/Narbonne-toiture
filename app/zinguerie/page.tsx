import type { Metadata } from "next";

import ZinguerieHero from "@/components/zinguerie/ZinguerieHero";
import ZinguerieRole from "@/components/zinguerie/ZinguerieRole";
import ZinguerieElements from "@/components/zinguerie/ZinguerieElements";
import ZinguerieWater from "@/components/zinguerie/ZinguerieWater";
import ZinguerieProject from "@/components/zinguerie/ZinguerieProject";
import ZinguerieLocalArea from "@/components/zinguerie/ZinguerieLocalArea";
import ZinguerieFAQ from "@/components/zinguerie/ZinguerieFAQ";

const SITE_URL = "https://www.narbonnetoiture.fr";

export const metadata: Metadata = {
  title: "Zinguerie Narbonne | Travaux de toiture dans l'Aude",
  description:
    "Travaux de zinguerie à Narbonne : raccords, gestion et évacuation des eaux pluviales sur toiture. Intervention à Narbonne et dans l'Aude.",
  alternates: {
    canonical: `${SITE_URL}/zinguerie`,
  },
  openGraph: {
    title: "Zinguerie à Narbonne | Narbonne Toiture",
    description:
      "Travaux de zinguerie associés à la couverture et à l'évacuation des eaux de toiture à Narbonne et dans l'Aude.",
    url: `${SITE_URL}/zinguerie`,
    type: "website",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Travaux de zinguerie à Narbonne",
  description:
    "Travaux de zinguerie associés à la couverture, aux raccords et à l'évacuation des eaux de toiture à Narbonne et dans l'Aude.",
  url: `${SITE_URL}/zinguerie`,
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
  serviceType: "Travaux de zinguerie",
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
      name: "Zinguerie",
      item: `${SITE_URL}/zinguerie`,
    },
  ],
};

export default function ZingueriePage() {
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
        <ZinguerieHero />
        <ZinguerieRole />
        <ZinguerieElements />
        <ZinguerieWater />
        <ZinguerieProject />
        <ZinguerieLocalArea />
        <ZinguerieFAQ />
      </main>
    </>
  );
}