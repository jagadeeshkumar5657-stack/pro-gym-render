import { Phone, MessageCircle, ShieldCheck, Clock, Wrench } from "lucide-react";
import { PHONE, PHONE_TEL, WHATSAPP_URL } from "@/lib/whatsapp";
import repairHero from "@/assets/repair-hero.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden text-brand-foreground"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="container relative mx-auto grid gap-12 px-4 py-20 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col justify-center animate-float-up">
          <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Trusted Service · Available 9 AM – 8 PM
          </span>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Professional Gym Equipment{" "}
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              Repair & Maintenance
            </span>{" "}
            Services
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Expert servicing, repair, and maintenance for treadmills, ellipticals, exercise cycles, and multi-gym
            equipment. Fast response, affordable pricing, genuine spare parts, and experienced technicians.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" /> Book Service on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <Phone className="h-5 w-5" /> Call {PHONE}
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/15 pt-6 text-sm">
            {[
              { icon: ShieldCheck, label: "Genuine Parts" },
              { icon: Clock, label: "Fast Response" },
              { icon: Wrench, label: "Multi-Brand Experts" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/90">
                <Icon className="h-5 w-5 text-primary" />
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative animate-float-up">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/40 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/15 shadow-[var(--shadow-elegant)] bg-black">
            <div className="aspect-video w-full bg-black">
              <img
                src={repairHero}
                alt="3D render of technician repairing a treadmill motor"
                width={1280}
                height={720}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between bg-background/95 px-4 py-3 text-foreground backdrop-blur">
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Proprietor</div>
                <div className="text-base font-bold text-brand">Mr. Narendra</div>
              </div>
              <a
                href={`tel:${PHONE_TEL}`}
                className="rounded-full bg-brand px-3 py-1.5 text-xs font-semibold text-brand-foreground"
              >
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
