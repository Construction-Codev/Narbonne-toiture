import { Phone } from "lucide-react";

import Breadcrumb from "@/components/ui/Breadcrumb";

export default function ContactHero() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-6 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Contact" },
          ]}
        />

        <div className="grid gap-12 pt-12 lg:grid-cols-12 lg:items-end lg:gap-16 lg:pt-16">
          <div className="lg:col-span-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              Contact &amp; devis
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.055em] text-anthracite sm:text-6xl lg:text-7xl">
              Parlons de votre toiture.
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="max-w-md text-lg leading-8 text-anthracite/65">
              Entretien, fuite, réparation, couverture, zinguerie ou
              charpente : présentez-nous votre besoin pour obtenir un premier
              contact.
            </p>

            <a
              href="tel:+33662125611"
              className="mt-8 inline-flex items-center gap-3 text-lg font-semibold text-anthracite transition-colors hover:text-terracotta"
            >
              <Phone className="h-5 w-5 text-terracotta" />
              06 62 12 56 11
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}