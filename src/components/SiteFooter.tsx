import { Phone, MessageCircle, Clock } from "lucide-react";
import { PHONE, PHONE_TEL, WHATSAPP_URL } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-brand text-brand-foreground">
      <div className="container mx-auto grid gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl text-base font-black tracking-tight text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-accent)" }}
            >
              NK
            </div>

            <div className="text-lg font-bold">NEXT LEVEL</div>
          </div>
          <p className="mt-3 text-sm text-white/70">Your Fitness, Our Priority!</p>
          <p className="mt-4 text-sm text-white/60">
            Professional gym equipment repair, maintenance, and AMC services across India.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>Treadmill Repair</li>
            <li>Motor & PCB Repair</li>
            <li>Belt Replacement</li>
            <li>Multi-Gym Servicing</li>
            <li>AMC Packages</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href={`tel:${PHONE_TEL}`} className="hover:text-white">{PHONE}</a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              9:00 AM – 8:00 PM (Daily)
            </li>
            <li className="text-white/60">Proprietor: Narendra</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Get Instant Quote</h4>
          <p className="mt-4 text-sm text-white/70">
            WhatsApp Narendra directly for the fastest response.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Next Level Gym & Services. All rights reserved.
      </div>
    </footer>
  );
}
