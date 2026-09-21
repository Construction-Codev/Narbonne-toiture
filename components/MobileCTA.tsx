"use client";

import { FileText, Phone } from "lucide-react";

import TrackedAnchor from "@/components/analytics/TrackedAnchor";
import TrackedLink from "@/components/analytics/TrackedLink";

export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-anthracite/10 bg-ivory/95 p-3 backdrop-blur-md md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <TrackedAnchor
          href="tel:+33662125611"
          eventName="phone_click"
          eventData={{
            location: "mobile_cta",
          }}
          aria-label="Appeler Narbonne Toiture au 06 62 12 56 11"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-anthracite/15 bg-white px-4 text-sm font-bold text-anthracite transition active:scale-[0.98]"
        >
          <Phone size={17} aria-hidden="true" />
          Appeler
        </TrackedAnchor>

        <TrackedLink
          href="/contact"
          eventName="quote_click"
          eventData={{
            location: "mobile_cta",
          }}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-terracotta px-4 text-sm font-bold text-white transition active:scale-[0.98]"
        >
          <FileText size={17} aria-hidden="true" />
          Devis
        </TrackedLink>
      </div>
    </div>
  );
}