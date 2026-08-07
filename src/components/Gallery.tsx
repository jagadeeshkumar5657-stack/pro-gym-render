import posterAsset from "@/assets/gym-poster.jpg.asset.json";
import floorAsset from "@/assets/gym-floor.jpg.asset.json";
import equipAsset from "@/assets/gym-equipment.jpg.asset.json";

const shots = [
  {
    src: posterAsset.url,
    alt: "Next Level Gym poster with contact number and timings",
    caption: "Next Level Gym",
    sub: "Morning 5:30–11:00 AM · Evening 4:00–9:00 PM",
    span: "lg:col-span-2 lg:row-span-2",
    ratio: "aspect-square",
  },
  {
    src: floorAsset.url,
    alt: "Gym floor with treadmills, benches and strength machines",
    caption: "Fully equipped floor",
    sub: "Cardio, strength & free weights",
    span: "",
    ratio: "aspect-[16/10]",
  },
  {
    src: equipAsset.url,
    alt: "Rows of well-maintained gym equipment and weight plates",
    caption: "Serviced & ready",
    sub: "Every machine maintained by our team",
    span: "",
    ratio: "aspect-[16/10]",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-secondary py-20 lg:py-28">
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

        <div className="mt-14 grid gap-6 lg:grid-cols-4 lg:grid-rows-2">
          {shots.map((s) => (
            <figure
              key={s.src}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] ${s.span}`}
            >
              <div className={`${s.ratio} w-full overflow-hidden lg:h-full lg:aspect-auto`}>
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand/85 via-brand/20 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <div className="text-lg font-bold text-brand-foreground">{s.caption}</div>
                <div className="text-sm text-brand-foreground/80">{s.sub}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
