import { MapPin, Navigation } from "lucide-react";

const MAP_LINK = "https://maps.app.goo.gl/sEYx68GyiBiebQt39";
const EMBED_SRC =
  "https://www.google.com/maps?q=Next+Level+Gym+Treadmill+Repairs+Nagarampalem+Rd+Kanna+Vari+Thota+Guntur+Andhra+Pradesh+522004&output=embed";

export function LocationMap() {
  return (
    <section id="location" className="bg-background py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Visit us</span>
          <h2 className="mt-3 text-3xl font-bold text-brand sm:text-4xl">Find Next Level Gym & Services</h2>
          <p className="mt-3 text-foreground/70">
            Nagarampalem Rd, Kanna Vari Thota, Guntur, Andhra Pradesh 522004
          </p>
        </div>

        <div className="mt-10 grid gap-6 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] lg:grid-cols-[1.4fr_1fr]">
          <div className="aspect-[4/3] w-full lg:aspect-auto lg:h-[420px]">
            <iframe
              src={EMBED_SRC}
              title="Next Level Gym & Services location"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col justify-center gap-5 p-8">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--gradient-accent)] text-primary-foreground">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Address</div>
                <div className="mt-1 text-base font-medium text-brand">
                  Nagarampalem Rd, Kanna Vari Thota,
                  <br />
                  Guntur, Andhra Pradesh 522004
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-brand">
                <Navigation className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Hours</div>
                <div className="mt-1 text-base font-medium text-brand">Open Daily · 9:00 AM – 8:00 PM</div>
              </div>
            </div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-[1.02]"
            >
              <Navigation className="h-4 w-4" /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
