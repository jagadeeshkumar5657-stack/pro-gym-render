const steps = [
  { n: "01", t: "Book a Service Request", d: "Reach us via WhatsApp or call for instant booking." },
  { n: "02", t: "Equipment Inspection", d: "Our technician inspects the machine on-site." },
  { n: "03", t: "Diagnosis & Cost Estimate", d: "Transparent diagnosis with upfront pricing." },
  { n: "04", t: "Repair & Replacement", d: "Genuine parts, expert workmanship." },
  { n: "05", t: "Quality Testing", d: "Full performance test to ensure peak operation." },
  { n: "06", t: "Service Completion", d: "Back to peak performance — guaranteed." },
];

export function Process() {
  return (
    <section id="process" className="bg-brand py-20 text-brand-foreground lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">How it works</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">Our Service Process</h2>
          <p className="mt-4 text-white/70">Simple, transparent, and built to get your equipment running fast.</p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <div className="text-5xl font-black text-primary/80">{s.n}</div>
              <h3 className="mt-3 text-lg font-bold">{s.t}</h3>
              <p className="mt-1.5 text-sm text-white/70">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
