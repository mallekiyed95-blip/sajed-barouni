import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      <div className="hero-glow top-1/4 left-1/3 animate-pulse-glow parallax-slow" />
      <div className="hero-glow top-1/2 right-0 w-[500px] h-[500px] opacity-50" />

      {/* Ghost text */}
      <div className="ghost-number top-[15%] right-[5%] select-none">SB</div>

      <div className="relative z-10 container mx-auto px-6 md:pl-[8%] md:pr-[18%] pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="blur-reveal inline-block mb-6 px-4 py-1.5 border border-primary/30 text-primary text-xs font-bold tracking-[0.2em] uppercase label-rotated">
            Video Marketing Agency
          </div>
          <h1 className="section-fade font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 tracking-tight">
            We Turn Your
            <br />
            Content Into{" "}
            <span className="gold-gradient-text hand-underline">Clients.</span>
          </h1>
          <p className="blur-reveal text-muted-foreground text-base md:text-lg max-w-lg mb-12 leading-relaxed font-light delay-200">
            Strategic video editing engineered for views, retention &amp; conversions.
            <span className="block mt-2 text-foreground/70 font-medium">
              We don't just make videos — we build systems that sell.
            </span>
          </p>
          <div className="section-fade delay-400 flex flex-col sm:flex-row gap-4">
            <a href="https://koalendar.com/e/video-marketing-growth-call" target="_blank" rel="noopener noreferrer" className="btn-filled">
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

export default Hero;
