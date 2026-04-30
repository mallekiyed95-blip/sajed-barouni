const stats = [
  { value: "247%", label: "Engagement Rate", desc: "Short-form client videos spiked Instagram interactions 247% in 30 days." },
  { value: "2x", label: "Lead Conversion", desc: "Doubled booked consultations via optimized talking-head explainers." },
  { value: "+112%", label: "Retention", desc: "Held viewers 112% longer with strategic cuts and light wrap." },
];

const Results = () => {
  return (
    <section id="results" className="py-24 md:py-36 relative overflow-hidden diagonal-cut" style={{ background: "hsl(20 10% 6%)" }}>
      <div className="ghost-number top-0 left-1/2 -translate-x-1/2">04</div>
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="blur-reveal text-center mb-16">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            Results
          </div>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black mb-4">
            Results That <span className="gold-gradient-text hand-underline">Speak</span>
          </h2>
          <p className="text-muted-foreground text-base font-light">
            Numbers from real client campaigns. No fluff.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {stats.map((s, i) => (
            <div
              key={i}
              className="scale-reveal text-center p-8 border border-border/50 bg-card hover:border-primary/30 transition-all duration-700 hover:-translate-y-2"
              style={{ borderRadius: "2px", transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)` }}
            >
              <div className="font-heading text-3xl md:text-5xl font-black gold-gradient-text mb-2 tracking-tight">
                {s.value}
              </div>
              <p className="text-muted-foreground text-xs tracking-wide uppercase font-medium mb-3">{s.label}</p>
              <p className="text-muted-foreground text-xs font-light leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
