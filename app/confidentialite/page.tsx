import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/ui/Breadcrumb";

const SITE_URL = "https://www.narbonnetoiture.fr";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du site Narbonne Toiture et informations relatives au traitement des données transmises via le formulaire de contact.",
  alternates: {
    canonical: `${SITE_URL}/confidentialite`,
  },
};

export default function ConfidentialitePage() {
  return (
    <main className="bg-ivory">
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-6 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Politique de confidentialité" },
          ]}
        />

        <header className="max-w-4xl pb-16 pt-12 sm:pt-16 lg:pb-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
            Données personnelles
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.055em] text-anthracite sm:text-6xl lg:text-7xl">
            Politique de confidentialité
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-anthracite/60">
            Cette page explique quelles informations peuvent être collectées
            lorsque vous utilisez narbonnetoiture.fr et dans quel but elles
            sont utilisées.
          </p>
        </header>

        <div className="grid gap-16 border-t border-anthracite/15 pt-12 lg:grid-cols-12 lg:gap-20">
          <aside className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-anthracite/40">
              Narbonne Toiture
            </p>
          </aside>

          <div className="space-y-16 lg:col-span-8 lg:col-start-5">
            <LegalSection number="01" title="Responsable du traitement">
              <p>
                Les données personnelles collectées par l&apos;intermédiaire
                du site narbonnetoiture.fr sont traitées sous la responsabilité
                de :
              </p>

              <div className="mt-6 border-l-2 border-terracotta pl-5">
                <p className="font-semibold text-anthracite">
                  Gregory José Robles
                </p>
                <p className="mt-1">Entrepreneur individuel</p>
                <p>88 Cami de Las Carretas</p>
                <p>66380 Pia, France</p>
                <p className="mt-3">
                  <a
                    href="mailto:contact@narbonnetoiture.fr"
                    className="font-semibold text-terracotta"
                  >
                    contact@narbonnetoiture.fr
                  </a>
                </p>
              </div>
            </LegalSection>

            <LegalSection number="02" title="Données collectées">
              <p>
                Lorsque vous utilisez le formulaire de contact, les
                informations suivantes peuvent être collectées :
              </p>

              <ul className="mt-6 space-y-2">
                <li>— nom ;</li>
                <li>— numéro de téléphone ;</li>
                <li>— adresse e-mail, lorsqu&apos;elle est renseignée ;</li>
                <li>— commune ;</li>
                <li>— type de travaux sélectionné ;</li>
                <li>— contenu du message transmis.</li>
              </ul>

              <p className="mt-6">
                Il est recommandé de ne pas communiquer dans le champ libre
                d&apos;informations sensibles ou sans rapport avec votre
                demande de travaux.
              </p>
            </LegalSection>

            <LegalSection number="03" title="Finalité du traitement">
              <p>
                Ces informations sont utilisées afin de recevoir votre demande,
                comprendre la nature de votre besoin et permettre à Narbonne
                Toiture de vous contacter pour y répondre.
              </p>

              <p className="mt-4">
                Elles ne sont pas collectées par l&apos;intermédiaire de ce
                formulaire à des fins de prospection commerciale indépendante
                de votre demande.
              </p>
            </LegalSection>

            <LegalSection number="04" title="Base juridique">
              <p>
                Le traitement des informations transmises dans le cadre
                d&apos;une demande de contact ou de devis repose sur les
                démarches précontractuelles effectuées à votre demande.
              </p>
            </LegalSection>

            <LegalSection number="05" title="Destinataires">
              <p>
                Les informations sont destinées à Narbonne Toiture afin de
                permettre le traitement de votre demande.
              </p>

              <p className="mt-4">
                Des prestataires techniques peuvent également intervenir dans
                le fonctionnement du site et la transmission des messages,
                notamment l&apos;hébergeur du site et le service utilisé pour
                l&apos;envoi des e-mails.
              </p>
            </LegalSection>

            <LegalSection number="06" title="Conservation">
              <p>
                Les données sont conservées pendant la durée nécessaire au
                traitement de la demande puis, lorsque cela est nécessaire,
                pendant les durées permettant d&apos;assurer le suivi de la
                relation ou de respecter les obligations légales applicables.
              </p>

              <p className="mt-4">
                Les informations qui deviennent nécessaires dans le cadre
                d&apos;une relation contractuelle peuvent faire l&apos;objet
                d&apos;une conservation distincte conformément aux obligations
                légales de l&apos;entreprise.
              </p>
            </LegalSection>

            <LegalSection
              number="07"
              title="Prestataires techniques et transferts"
            >
              <p>
                Le site est hébergé à l&apos;aide de l&apos;infrastructure
                Vercel et le formulaire utilise le service Resend pour
                transmettre les messages électroniques.
              </p>

              <p className="mt-4">
                Ces prestataires peuvent traiter certaines données techniques
                ou données nécessaires à la fourniture de leurs services. Les
                modalités applicables à ces traitements et, le cas échéant,
                aux transferts internationaux de données sont encadrées par
                leurs engagements contractuels et les mécanismes prévus par la
                réglementation applicable.
              </p>
            </LegalSection>

            <LegalSection number="08" title="Vos droits">
              <p>
                Conformément à la réglementation applicable à la protection des
                données personnelles, vous pouvez, selon votre situation,
                exercer notamment vos droits d&apos;accès, de rectification,
                d&apos;effacement, de limitation ou d&apos;opposition, ainsi
                que les autres droits prévus par la réglementation.
              </p>

              <p className="mt-4">
                Pour exercer vos droits ou poser une question concernant vos
                données personnelles, vous pouvez écrire à :
              </p>

              <a
                href="mailto:contact@narbonnetoiture.fr"
                className="mt-4 inline-block font-semibold text-terracotta underline decoration-terracotta/30 underline-offset-4"
              >
                contact@narbonnetoiture.fr
              </a>

              <p className="mt-6">
                Si vous estimez, après nous avoir contactés, que vos droits ne
                sont pas respectés, vous pouvez également introduire une
                réclamation auprès de la CNIL.
              </p>
            </LegalSection>

            <LegalSection number="09" title="Cookies et mesure d’audience">
              <p>
                Le site peut utiliser des technologies strictement nécessaires
                à son fonctionnement ainsi que des outils de mesure technique
                et de performance.
              </p>

              <p className="mt-4">
                Si des outils nécessitant le recueil préalable du consentement
                sont ajoutés ultérieurement, le site sera adapté afin de
                permettre leur gestion conformément à la réglementation
                applicable.
              </p>
            </LegalSection>

            <LegalSection number="10" title="Informations complémentaires">
              <p>
                Pour les informations relatives à l&apos;éditeur et à
                l&apos;hébergeur du site, vous pouvez consulter les{" "}
                <Link
                  href="/mentions-legales"
                  className="font-semibold text-terracotta underline decoration-terracotta/30 underline-offset-4"
                >
                  mentions légales
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