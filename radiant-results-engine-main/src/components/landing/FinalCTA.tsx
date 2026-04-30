const FinalCTA = () => {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden diagonal-cut" style={{ background: "hsl(20 10% 6%)" }}>
      <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
        <div className="blur-reveal">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.05]">
            Ready to Turn Viewers
            <br />Into Your{" "}
            <span className="gold-gradient-text hand-underline">Clients?</span>
          </h2>
          <p className="text-muted-foreground text-base mb-12 max-w-lg mx-auto font-light">
            Book your strategy call and let's build a video system that brings you cash.
          </p>
          <div className="section-fade delay-300 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/sajedbarouni/strategy-call" target="_blank" rel="noopener noreferrer" className="btn-filled">
              Book a Call
            </a>
            <a href="#process" className="btn-raw">
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
