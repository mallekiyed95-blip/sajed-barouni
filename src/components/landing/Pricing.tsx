import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    desc: "Perfect for creators getting started with professional content.",
    features: ["4 short-form videos/month", "Basic hook optimization", "1 revision per video", "Platform formatting"],
    highlighted: false,
  },
  {
    name: "Growth",
    desc: "For brands ready to turn content into a real growth channel.",
    features: ["8 short-form + 2 long-form/month", "Full 4-pillar editing system", "Content strategy sessions", "Unlimited revisions", "Priority support"],
    highlighted: true,
  },
  {
    name: "Scale",
    desc: "For businesses that want a complete content machine.",
    features: ["Unlimited video editing", "Dedicated editor & strategist", "Daily content pipeline", "Performance analytics", "Brand identity system", "Direct Slack channel"],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-36 relative overflow-hidden diagonal-cut" style={{ background: "hsl(20 10% 6%)" }}>
      <div className="ghost-number top-0 left-[5%]">06</div>
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="blur-reveal text-center mb-16">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            Pricing
          </div>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black mb-4">
            Choose Your <span className="gold-gradient-text">Plan</span>
          </h2>
          <p className="text-muted-foreground text-base font-light">
            Every plan is custom-quoted based on your needs. Book a call to get started.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 stagger-children items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`scale-reveal p-8 flex flex-col transition-all duration-700 ${
                plan.highlighted
                  ? "bg-card border-2 border-primary/40 shadow-[var(--shadow-gold)] md:-mt-4"
                  : "bg-card border border-border/50 hover:border-primary/20"
              }`}
              style={{ borderRadius: "2px" }}
            >
              {plan.highlighted && (
                <div className="label-rotated text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="font-heading text-2xl font-black mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed font-light">{plan.desc}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-xs text-secondary-foreground tracking-wide">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={plan.highlighted ? "btn-filled text-center text-xs" : "btn-raw text-center text-xs"}
              >
                Book a Call
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
