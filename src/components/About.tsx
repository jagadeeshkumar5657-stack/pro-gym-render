export function About() {
  return (
    <section id="about" className="bg-muted/40 py-20 lg:py-28">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">About us</span>
        <h2 className="mt-3 text-3xl font-bold text-brand sm:text-4xl lg:text-5xl">
          Trusted gym equipment servicing across India
        </h2>
        <div className="mt-6 space-y-4 text-left text-foreground/80 leading-relaxed">
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
    </section>
  );
}
