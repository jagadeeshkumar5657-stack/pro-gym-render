import { Phone } from "lucide-react";
import { PHONE, PHONE_TEL, WHATSAPP_URL } from "@/lib/whatsapp";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl text-base font-black tracking-tight text-primary-foreground shadow-[var(--shadow-glow)]"
            style={{ backgroundImage: "var(--gradient-accent)" }}
          >
            NK
          </div>

          <div className="leading-tight">
            <div className="text-sm font-bold tracking-tight text-brand">NEXT LEVEL</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Gym & Services</div>
          </div>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-foreground/80 md:flex">
          <a href="#services" className="hover:text-primary transition">Services</a>
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#process" className="hover:text-primary transition">Process</a>
          <a href="#why" className="hover:text-primary transition">Why Us</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-primary transition"
          >
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md hover:opacity-90 transition"
          >
            Book Service
          </a>
        </div>
      </div>
    </header>
  );
}
