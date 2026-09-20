import type { Metadata } from "next";

import ContactArea from "@/components/contact/ContactArea";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";

const SITE_URL = "https://www.narbonnetoiture.fr";

export const metadata: Metadata = {
  title: "Contact & devis toiture à Narbonne | Narbonne Toiture",
  description:
    "Contactez Narbonne Toiture pour votre projet de couverture, réparation, fuite, entretien, zinguerie ou charpente à Narbonne et dans l'Aude.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact & devis | Narbonne Toiture",
    description:
      "Présentez votre projet de toiture à Narbonne Toiture. Intervention à Narbonne et dans l'Aude.",
    url: `${SITE_URL}/contact`,
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
      name: "Contact",
      item: `${SITE_URL}/contact`,
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <main>
        <ContactHero />
        <ContactForm />
        <ContactDetails />
        <ContactArea />
      </main>
    </>
  );
}