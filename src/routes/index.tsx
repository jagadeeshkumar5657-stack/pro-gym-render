import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { Gallery } from "@/components/Gallery";
import { CTASection } from "@/components/CTASection";
import { LocationMap } from "@/components/LocationMap";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const title = "Next Level Gym & Services | Professional Gym Equipment Repair & Maintenance";
const description =
  "Expert gym equipment repair, treadmill servicing, motor repair, PCB repair, belt replacement, and AMC services. Fast and reliable fitness equipment maintenance. Call Narendra: +91 9885006599.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "gym equipment repair, treadmill repair, gym equipment service, fitness equipment maintenance, treadmill motor repair, gym AMC services, fitness equipment technician",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Next Level Gym & Services",
          description,
          telephone: "+919885006599",
          slogan: "Your Fitness, Our Priority!",
          openingHours: "Mo-Su 09:00-20:00",
          founder: { "@type": "Person", name: "Narendra" },
          areaServed: "IN",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Process />
        <Gallery />
        <CTASection />
        <LocationMap />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
