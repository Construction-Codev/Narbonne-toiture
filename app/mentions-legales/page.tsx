import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/ui/Breadcrumb";

const SITE_URL = "https://www.narbonnetoiture.fr";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site Narbonne Toiture : éditeur, hébergement et informations relatives à l'entreprise.",
  alternates: {
    canonical: `${SITE_URL}/mentions-legales`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return (
    <main className="bg-ivory">
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-6 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Mentions légales" },
          ]}
        />

        <header className="max-w-4xl pb-16 pt-12 sm:pt-16 lg:pb-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
            Informations légales
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.055em] text-anthracite sm:text-6xl lg:text-7xl">
            Mentions légales
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-anthracite/60">
            Informations relatives à l&apos;éditeur et à l&apos;hébergement du
            site narbonnetoiture.fr.
          </p>
        </header>

        <div className="grid gap-16 border-t border-anthracite/15 pt-12 lg:grid-cols-12 lg:gap-20">
          <aside className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-anthracite/40">
              narbonnetoiture.fr
            </p>
          </aside>

          <div className="space-y-16 lg:col-span-8 lg:col-start-5">
            <LegalSection number="01" title="Éditeur du site">
              <p>
                Le site <strong>narbonnetoiture.fr</strong> est édité dans le
                cadre de l&apos;activité de :
              </p>

              <dl className="mt-7 space-y-3">
                <LegalRow label="Nom" value="Gregory José Robles" />
                <LegalRow label="Statut" value="Entrepreneur individuel (EI)" />
                <LegalRow label="SIREN" value="834 799 751" />
                <LegalRow label="SIRET" value="834 799 751 00013" />
                <LegalRow
                  label="Activité principale"
                  value="Travaux de couverture"
                />
                <LegalRow label="Code APE" value="4391B" />
                <LegalRow
                  label="Adresse"
                  value="88 Cami de Las Carretas, 66380 Pia, France"
                />
                <LegalRow label="Téléphone" value="06 62 12 56 11" />
                <LegalRow
                  label="E-mail"
                  value="contact@narbonnetoiture.fr"
                />
              </dl>

              <p className="mt-7">
                L&apos;entreprise est immatriculée au Registre national des
                entreprises depuis le 23 janvier 2018.
              </p>
            </LegalSection>

            <LegalSection number="02" title="Responsable de la publication">
              <p>
                Le responsable de la publication du site est Gregory José
                Robles, en qualité d&apos;entrepreneur individuel.
              </p>
            </LegalSection>

            <LegalSection number="03" title="Hébergement">
              <p>Le site est hébergé par :</p>

              <div className="mt-6">
                <p className="font-semibold text-anthracite">Vercel Inc.</p>
                <p className="mt-2">
                  440 N Barranca Ave #4133
                  <br />
                  Covina, CA 91723
                  <br />
                  États-Unis
                </p>
              </div>
            </LegalSection>

            <LegalSection number="04" title="Propriété intellectuelle">
              <p>
                Les contenus présents sur ce site, notamment les textes,
                photographies, éléments graphiques, logos et éléments de mise
                en page, sont protégés par les règles applicables à la
                propriété intellectuelle.
              </p>

              <p className="mt-4">
                Toute reproduction, représentation ou utilisation de tout ou
                partie du site sans autorisation préalable du titulaire des
                droits concernés est interdite, sauf dans les cas prévus par
                la loi.
              </p>
            </LegalSection>

            <LegalSection number="05" title="Données personnelles">
              <p>
                Le site comporte un formulaire permettant de transmettre une
                demande de contact ou de devis. Les informations communiquées
                sont utilisées afin de traiter et répondre à cette demande.
              </p>

              <p className="mt-4">
                Pour connaître les modalités de traitement de vos données et
                l&apos;exercice de vos droits, consultez notre{" "}
                <Link
                  href="/confidentialite"
                  className="font-semibold text-terracotta underline decoration-terracotta/30 underline-offset-4"
                >
                  politique de confidentialité
                </Link>
                .
              </p>
            </LegalSection>
          </div>
        </div>
      </div>
    </main>
  );
}

function LegalSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-baseline gap-4 border-b border-anthracite/15 pb-5">
        <span className="font-mono text-xs text-terracotta">{number}</span>
        <h2 className="text-2xl font-semibold tracking-[-0.025em] text-anthracite">
          {title}
        </h2>
      </div>

      <div className="mt-6 leading-7 text-anthracite/65">{children}</div>
    </section>
  );
}

function LegalRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="grid gap-1 border-b border-anthracite/10 pb-3 sm:grid-cols-[180px_1fr]">
      <dt className="text-sm text-anthracite/45">{label}</dt>
      <dd className="font-medium text-anthracite">{value}</dd>
    </div>
  );
}