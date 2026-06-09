import { MessageCircle, Phone } from "lucide-react";
import { PHONE, PHONE_TEL, WHATSAPP_URL } from "@/lib/whatsapp";

export function CTASection() {
  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div
          className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl p-10 text-center text-white shadow-[var(--shadow-elegant)] sm:p-16"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Need Gym Equipment Repair?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/80">
              Get expert service for your fitness equipment today. Our technicians are ready to restore your machines
              to peak performance.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" /> Book a Service
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                <Phone className="h-5 w-5" /> Call Narendra · {PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
