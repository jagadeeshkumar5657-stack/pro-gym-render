import equipImg from "@/assets/service-equipment.jpg";
import maintImg from "@/assets/service-maintenance.jpg";
import motorImg from "@/assets/service-motor.jpg";
import pcbImg from "@/assets/service-pcb.jpg";
import beltImg from "@/assets/service-belt.jpg";
import amcImg from "@/assets/service-amc.jpg";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const services = [
  {
    img: equipImg,
    title: "Multi-Brand Equipment Servicing",
    desc: "Expert servicing for all major fitness equipment brands and models — treadmills, ellipticals, exercise cycles, and multi-gym stations.",
  },
  {
    img: maintImg,
    title: "General Servicing & Maintenance",
    desc: "Complete machine cleaning, lubrication, inspection, calibration, and preventive maintenance for smooth performance and longer life.",
  },
  {
    img: motorImg,
    title: "Treadmill Motor Repair",
    desc: "Professional treadmill motor diagnostics, winding, repair, restoration, and performance optimization by certified technicians.",
  },
  {
    img: pcbImg,
    title: "Control Board (PCB) Repair",
    desc: "Electronic board troubleshooting, testing, component-level repair, and replacement solutions for all console types.",
  },
  {
    img: beltImg,
    title: "Running Belt & Deck Replacement",
    desc: "Replacement of damaged treadmill belts and decks using high-quality genuine spare parts for optimal performance.",
  },
  {
    img: amcImg,
    title: "Annual Maintenance Contract (AMC)",
    desc: "Customized yearly maintenance packages for commercial gyms and fitness centers — uninterrupted operation guaranteed.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">What we do</span>
          <h2 className="mt-3 text-3xl font-bold text-brand sm:text-4xl lg:text-5xl">
            Complete gym equipment service solutions
          </h2>
          <p className="mt-4 text-muted-foreground">
            From routine maintenance to complex motor and electronics repair — one trusted partner for everything.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="relative aspect-[5/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={614}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-brand">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                >
                  Get instant support →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
