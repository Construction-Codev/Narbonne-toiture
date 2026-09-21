"use client";

import { FormEvent, useState } from "react";
import { Check, LoaderCircle } from "lucide-react";
import { track } from "@vercel/analytics";

const services = [
  "Couverture",
  "Réparation de toiture",
  "Fuite / infiltration",
  "Nettoyage de toiture",
  "Démoussage",
  "Hydrofuge",
  "Zinguerie",
  "Charpente",
  "Autre demande",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Impossible d'envoyer votre demande.",
        );
      }

      track("contact_form_success", {
        location: "contact_page",
      });

      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");

      setError(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue. Vous pouvez nous contacter par téléphone.",
      );
    }
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              Votre demande
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-anthracite sm:text-5xl">
              Quelques informations suffisent.
            </h2>

            <p className="mt-6 max-w-sm leading-7 text-anthracite/60">
              Indiquez la nature de votre besoin et la commune concernée. Vous
              pourrez détailler la situation dans votre message.
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {status === "success" ? (
              <div
                role="status"
                className="border-l-2 border-terracotta bg-ivory px-7 py-8"
              >
                <Check className="h-6 w-6 text-terracotta" />

                <h3 className="mt-5 text-2xl font-semibold text-anthracite">
                  Votre demande a bien été envoyée.
                </h3>

                <p className="mt-3 max-w-lg leading-7 text-anthracite/60">
                  Merci d&apos;avoir contacté Narbonne Toiture. Si nécessaire,
                  vous pouvez également nous joindre au 06 62 12 56 11.
                </p>

                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-semibold text-terracotta"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Honeypot anti-spam */}
                <div
                  className="absolute -left-[9999px]"
                  aria-hidden="true"
                >
                  <label>
                    Site internet
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </label>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <Field label="Nom *">
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                      maxLength={100}
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Téléphone *">
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      required
                      maxLength={30}
                      className={inputClass}
                    />
                  </Field>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <Field label="E-mail">
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      maxLength={150}
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Commune *">
                    <input
                      type="text"
                      name="city"
                      autoComplete="address-level2"
                      required
                      maxLength={100}
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field label="Type de travaux *">
                  <select
                    name="service"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Sélectionnez votre besoin
                    </option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Votre message *">
                  <textarea
                    name="message"
                    required
                    minLength={10}
                    maxLength={3000}
                    rows={6}
                    className={`${inputClass} resize-y`}
                    placeholder="Décrivez brièvement votre toiture et les travaux envisagés..."
                  />
                </Field>

                {status === "error" && (
                  <p
                    role="alert"
                    className="border-l-2 border-terracotta pl-4 text-sm leading-6 text-anthracite"
                  >
                    {error}
                  </p>
                )}

                <div className="border-t border-anthracite/15 pt-8">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex min-h-12 items-center justify-center gap-2 bg-terracotta px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "loading" && (
                      <LoaderCircle
                        className="h-4 w-4 animate-spin"
                        aria-hidden="true"
                      />
                    )}

                    {status === "loading"
                      ? "Envoi en cours..."
                      : "Envoyer ma demande"}
                  </button>

                  <p className="mt-4 max-w-xl text-xs leading-5 text-anthracite/45">
                    Les informations transmises sont utilisées pour traiter
                    votre demande. Pour en savoir plus sur leur utilisation et
                    sur vos droits, consultez notre{" "}
                    <a
                      href="/confidentialite"
                      className="font-semibold text-anthracite underline underline-offset-2"
                    >
                      politique de confidentialité
                    </a>
                    .
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full border-0 border-b border-anthracite/20 bg-transparent px-0 py-3 text-base text-anthracite outline-none transition-colors placeholder:text-anthracite/30 focus:border-terracotta focus:ring-0";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-anthracite">
        {label}
      </span>

      {children}
    </label>
  );
}