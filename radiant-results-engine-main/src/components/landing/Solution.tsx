import { Zap, Eye, Brain, Target } from "lucide-react";

const pillars = [
  { icon: Zap, title: "Strategic Ideation", desc: "Every concept sparks from client pain points, engineered for maximum conversion impact." },
  { icon: Brain, title: "Script Optimization", desc: "Every word sharpens the hook, propelling viewers straight to your call-to-action." },
  { icon: Eye, title: "Shooting", desc: "Every angle captures raw emotion, locking eyes until they hit 'book now'." },
  { icon: Target, title: "Retention Editing", desc: "Every cut builds unstoppable momentum, turning watchers into paying clients." },
];

const Solution = () => {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden diagonal-cut" style={{ background: "hsl(20 10% 6%)" }}>
      <div className="ghost-number top-0 right-[5%]">02</div>
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="slide-right mb-16 text-right md:pr-[5%]">
          <div className="label-rotated-pos text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            Our System
          </div>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black leading-[1.05] mb-4">
            We Don't Just Edit —<br />
            We Build Content That{" "}
            <span className="gold-gradient-text hand-underline">Converts</span>
          </h2>
          <p className="text-muted-foreground text-base font-light max-w-lg ml-auto">
            Our 4-pillar system turns your raw content into a client-generating machine.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 stagger-children">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="scale-reveal card-luxury group"
              style={{ transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-500" style={{ borderRadius: "2px" }}>
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-heading text-5xl font-black text-primary/5">0{i + 1}</span>
              </div>
              <h3 className="font-heading text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
