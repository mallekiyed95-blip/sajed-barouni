const steps = [
  { num: "01", title: "Strategy Call", desc: "We map your brand goals to a custom video strategy." },
  { num: "02", title: "Content Plan (Ideation & Scripting)", desc: "We create optimized concepts and scripts for impact." },
  { num: "03", title: "Shooting & Editing", desc: "We produce and refine every frame for maximum result." },
  { num: "04", title: "Scale & Dominate", desc: "We optimize monthly for consistent client growth." },
];

const HowItWorks = () => {
  return (
    <section id="process" className="py-24 md:py-36 relative overflow-hidden">
      <div className="ghost-number -top-10 right-[10%]">05</div>
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="slide-left mb-16">
          <div className="label-rotated text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            Process
          </div>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black leading-[1.05] mb-4">
            Your 4-Step <span className="gold-gradient-text">Growth Engine</span>
          </h2>
          <p className="text-muted-foreground text-base font-light max-w-md">
            From Strategy Call to 2x Leads — Guaranteed.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-[31px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent hidden md:block" />
          <div className="space-y-10 stagger-children">
            {steps.map((s, i) => (
              <div
                key={i}
                className="slide-right relative flex gap-6 md:gap-10 items-start"
                style={{ marginLeft: `${i * 20}px` }}
              >
                <div className="relative z-10 w-16 h-16 border border-primary/30 bg-card flex items-center justify-center shrink-0" style={{ borderRadius: "2px" }}>
                  <span className="font-heading text-lg font-black gold-gradient-text">{s.num}</span>
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm font-light">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
