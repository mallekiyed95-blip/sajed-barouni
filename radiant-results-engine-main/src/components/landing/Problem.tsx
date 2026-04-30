import { AlertCircle } from "lucide-react";

const painPoints = [
  "You're posting content but getting zero leads or DMs",
  "Your videos look good but don't convert viewers into buyers",
  "You don't have time to plan, shoot, edit, and optimize yourself",
  "You're missing the strategy that turns attention into revenue",
];

const Problem = () => {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      <div className="ghost-number -top-10 -left-10">01</div>
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="slide-left mb-16 md:pl-[5%]">
          <div className="label-rotated text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            The Problem
          </div>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black leading-[1.05] mb-4">
            Why Your Content{" "}
            <span className="gold-gradient-text">Isn't Bringing</span>
            <br />Results
          </h2>
          <p className="text-muted-foreground text-base font-light max-w-md">
            Sound familiar? You're not alone.
          </p>
        </div>
        <div className="grid gap-4 stagger-children md:pl-[10%]">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="section-fade card-luxury flex items-start gap-4 md:max-w-xl"
              style={{ marginLeft: `${i * 12}px` }}
            >
              <AlertCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-secondary-foreground text-sm md:text-base font-light">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
