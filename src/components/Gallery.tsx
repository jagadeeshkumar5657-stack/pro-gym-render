import posterImg from "@/assets/gym-poster.jpg";
import floorImg from "@/assets/gym-floor.jpg";
import equipImg from "@/assets/gym-equipment.jpg";

const shots = [
  {
    src: posterImg,
    alt: "Next Level Gym poster with contact number and timings",
    caption: "Next Level Gym",
    sub: "Morning 5:30–11:00 AM · Evening 4:00–9:00 PM",
    contain: true,
  },
  {
    src: floorImg,
    alt: "Gym floor with treadmills, benches and strength machines",
    caption: "Fully equipped floor",
    sub: "Cardio, strength & free weights",
  },
  {
    src: equipImg,
    alt: "Rows of well-maintained gym equipment and weight plates",
    caption: "Serviced & ready",
    sub: "Every machine maintained by our team",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-secondary py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Our gym</span>
          <h2 className="mt-3 text-3xl font-bold text-brand sm:text-4xl lg:text-5xl">
            Inside Next Level Gym
          </h2>
          <p className="mt-4 text-muted-foreground">
            A look at our facility and the equipment we keep running in peak condition.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((s) => (
            <figure
              key={s.src}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className={`aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-105 ${
                  "contain" in s && s.contain ? "bg-brand object-contain" : "object-cover"
                }`}
              />
              <figcaption className="border-t border-border bg-card p-4 sm:p-5">
                <div className="truncate text-base font-bold text-brand sm:text-lg">{s.caption}</div>
                <div className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{s.sub}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
