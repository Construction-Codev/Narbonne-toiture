export const CONTACT_SERVICES = [
  "Couverture",
  "Réparation de toiture",
  "Fuite / infiltration",
  "Nettoyage de toiture",
  "Démoussage",
  "Hydrofuge",
  "Zinguerie",
  "Charpente",
  "Autre demande",
] as const;

export type ContactService = (typeof CONTACT_SERVICES)[number];

export type ContactPayload = {
  name: string;
  phone: string;
  email?: string;
  city: string;
  service: ContactService;
  message: string;
  website?: string;
};

export function validateContactPayload(
  body: unknown,
):
  | { success: true; data: ContactPayload }
  | { success: false; error: string } {
  if (!body || typeof body !== "object") {
    return { success: false, error: "Données invalides." };
  }

  const data = body as Record<string, unknown>;

  const name = clean(data.name);
  const phone = clean(data.phone);
  const email = clean(data.email);
  const city = clean(data.city);
  const service = clean(data.service);
  const message = clean(data.message);
  const website = clean(data.website);

  // Honeypot anti-spam
  if (website) {
    return { success: false, error: "Données invalides." };
  }

  if (name.length < 2 || name.length > 100) {
    return { success: false, error: "Nom invalide." };
  }

  if (phone.length < 8 || phone.length > 30) {
    return { success: false, error: "Téléphone invalide." };
  }

  if (city.length < 2 || city.length > 100) {
    return { success: false, error: "Commune invalide." };
  }

  if (
    !CONTACT_SERVICES.includes(
      service as (typeof CONTACT_SERVICES)[number],
    )
  ) {
    return { success: false, error: "Type de travaux invalide." };
  }

  if (message.length < 10 || message.length > 3000) {
    return {
      success: false,
      error: "Le message doit contenir entre 10 et 3000 caractères.",
    };
  }

  if (email && !isValidEmail(email)) {
    return { success: false, error: "Adresse e-mail invalide." };
  }

  return {
    success: true,
    data: {
      name,
      phone,
      email: email || undefined,
      city,
      service: service as ContactService,
      message,
    },
  };
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}