import { Play, Video, Target } from "lucide-react";

const services = [
  {
    icon: Play,
    number: "01",
    title: "Short-Form Growth Engine",
    desc: "Reels, TikToks, and Shorts engineered to go viral and drive followers into your funnel.",
    points: ["Hook-first editing", "Trend integration", "Platform-native formats"],
  },
  {
    icon: Video,
    number: "02",
    title: "Sales Video System",
    desc: "Long-form content, VSLs, and webinars edited to educate, build trust, and close.",
    points: ["Story-driven structure", "CTA optimization", "Retention pacing"],
  },
  {
    icon: Target,
    number: "03",
    title: "Strategic Tracked Ads",
    desc: "Data-driven ad creatives designed to convert cold traffic into paying clients.",
    points: ["Performance tracking", "A/B tested creatives", "ROI-focused editing"],
  },
];

const Services = () => {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden" style={{ background: "hsl(20 10% 6%)" }}>
      <div className="ghost-number bottom-0 left-[5%]">03</div>
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="slide-left mb-16">
          <div className="label-rotated text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            Services
          </div>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black leading-[1.05] mb-4">
            What We <span className="gold-gradient-text">Deliver</span>
          </h2>
          <p className="text-muted-foreground text-base font-light max-w-md">
            Three systems designed to grow your brand and your revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {services.map((s, i) => (
            <div
              key={i}
              className="scale-reveal card-luxury group flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-500" style={{ borderRadius: "2px" }}>
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-heading text-5xl font-black text-primary/10">{s.number}</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light mb-6">{s.desc}</p>
              <ul className="mt-auto space-y-2">
                {s.points.map((point, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
