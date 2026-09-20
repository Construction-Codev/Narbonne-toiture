import { Clock, Phone } from "lucide-react";

export default function ContactDetails() {
  return (
    <section className="bg-anthracite text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-sand">
              Contact direct
            </p>

            <h2 className="mt-6 max-w-lg text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Une question sur votre toiture ?
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border-t border-white/15">
              <a
                href="tel:+33662125611"
                className="group grid grid-cols-[40px_minmax(0,1fr)] gap-5 border-b border-white/15 py-7"
              >
                <Phone className="mt-1 h-5 w-5 text-sand" />

                <div>
                  <p className="text-sm text-white/45">Téléphone</p>
                  <p className="mt-1 text-2xl font-semibold transition-colors group-hover:text-sand">
                    06 62 12 56 11
                  </p>
                </div>
              </a>

              <div className="grid grid-cols-[40px_minmax(0,1fr)] gap-5 border-b border-white/15 py-7">
                <Clock className="mt-1 h-5 w-5 text-sand" />

                <div>
                  <p className="text-sm text-white/45">Horaires</p>
                  <p className="mt-1 text-lg font-medium">
                    Du lundi au samedi
                  </p>
                  <p className="mt-1 text-white/60">6h00 — 20h00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}