import { Check } from "lucide-react";

const points = [
  "Experienced Technicians",
  "Genuine Spare Parts",
  "Fast Service Response",
  "Affordable Pricing",
  "Multi-Brand Expertise",
  "AMC Packages Available",
  "Commercial & Residential Support",
  "Reliable Customer Service",
];

export function WhyUs() {
  return (
    <section id="why" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Why choose us</span>
          <h2 className="mt-3 text-3xl font-bold text-brand sm:text-4xl lg:text-5xl">
            Why Choose Next Level Gym & Services?
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
          {points.map((p) => (
            <div
              key={p}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-sm transition hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-4 w-4" strokeWidth={3} />
              </div>
              <span className="font-medium text-foreground">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
