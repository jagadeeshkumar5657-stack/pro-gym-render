import { Award, Users, Wrench, Building2 } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Gyms Served" },
  { icon: Wrench, value: "10K+", label: "Repairs Completed" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Building2, value: "Multi", label: "Brand Expertise" },
];

export function About() {
  return (
    <section id="about" className="bg-muted/40 py-20 lg:py-28">
      <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">About us</span>
          <h2 className="mt-3 text-3xl font-bold text-brand sm:text-4xl lg:text-5xl">
            Trusted gym equipment servicing across India
          </h2>
          <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
            <p>
              At <strong className="text-brand">Next Level Gym & Services</strong>, we provide top-tier gym equipment
              servicing and repair solutions for commercial gyms, fitness centers, residential fitness setups, and
              sports facilities.
            </p>
            <p>
              Under the leadership of our proprietor, <strong className="text-brand">Mr. Narendra</strong>, our
              experienced technicians specialize in diagnosing, repairing, maintaining, and restoring fitness equipment
              to peak performance.
            </p>
            <p>
              Our commitment to quality spare parts, affordable pricing, quick turnaround times, and reliable customer
              support has made us a trusted service provider for gym owners and fitness enthusiasts.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gradient-accent)] text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-3xl font-bold text-brand">{value}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
