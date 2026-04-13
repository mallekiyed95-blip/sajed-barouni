const About = () => {
  return (
    <section id="about" className="py-24 md:py-36 relative overflow-hidden">
      <div className="ghost-number top-0 right-[5%]">07</div>
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <div className="slide-left md:pl-[5%]">
          <div className="label-rotated text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            About
          </div>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black mb-10 leading-[1.05]">
            Meet{" "}
            <span className="gold-gradient-text hand-underline">Sajed Barouni</span>
          </h2>
          <div className="space-y-6 text-secondary-foreground leading-[1.8] text-sm md:text-base font-light">
            <p className="blur-reveal">
              Mastered sales psych, algorithms, retention → built a system turning footage into client magnets for coaches & business owners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
