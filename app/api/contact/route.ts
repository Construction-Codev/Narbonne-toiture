import { NextResponse } from "next/server";
import { Resend } from "resend";

import ContactConfirmationEmail from "@/emails/ContactConfirmationEmail";
import ContactNotificationEmail from "@/emails/ContactNotificationEmail";
import { validateContactPayload } from "@/lib/contact/validation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = validateContactPayload(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 },
      );
    }

    const data = validation.data;

    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!from || !to) {
      console.error("Contact email configuration is missing.");

      return NextResponse.json(
        { error: "Le service de contact est temporairement indisponible." },
        { status: 500 },
      );
    }

    const receivedAt = new Intl.DateTimeFormat("fr-FR", {
      dateStyle: "long",
      timeStyle: "short",
      timeZone: "Europe/Paris",
    }).format(new Date());

    const internalEmail = await resend.emails.send({
      from,
      to,
      subject: `[Narbonne Toiture] Nouvelle demande — ${data.service} — ${data.city}`,
      react: ContactNotificationEmail({
        ...data,
        receivedAt,
      }),
      replyTo: data.email,
    });

    if (internalEmail.error) {
      console.error("Resend internal email error:", internalEmail.error);

      return NextResponse.json(
        { error: "Impossible d'envoyer votre demande." },
        { status: 500 },
      );
    }

    // L'accusé de réception est secondaire :
    // une erreur ici ne doit pas faire croire au prospect
    // que sa demande principale n'a pas été envoyée.
    if (data.email) {
      const confirmation = await resend.emails.send({
        from,
        to: data.email,
        subject: "Votre demande a bien été reçue | Narbonne Toiture",
        react: ContactConfirmationEmail({
          name: data.name,
          city: data.city,
          service: data.service,
        }),
      });

      if (confirmation.error) {
        console.error(
          "Resend confirmation email error:",
          confirmation.error,
        );
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Une erreur est survenue." },
      { status: 500 },
    );
  }
}