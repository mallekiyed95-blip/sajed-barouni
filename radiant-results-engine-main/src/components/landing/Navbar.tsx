import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/20" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="font-heading text-xl font-black tracking-tight gold-gradient-text">
          Sajed Barouni
        </a>
        <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground">
          <a href="#services" className="hover:text-primary transition-colors duration-300">Services</a>
          <a href="#results" className="hover:text-primary transition-colors duration-300">Results</a>
          <a href="#process" className="hover:text-primary transition-colors duration-300">Process</a>
          
          <a href="#about" className="hover:text-primary transition-colors duration-300">About</a>
        </div>
        <a href="https://calendly.com/sajedbarouni/strategy-call" target="_blank" rel="noopener noreferrer" className="hidden md:block btn-raw py-2.5 px-6 text-xs">
          Book a Call
        </a>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/20 px-6 py-6 space-y-4 animate-fade-up">
          {["Services", "Results", "Process", "About"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {item}
            </a>
          ))}
          <a href="https://calendly.com/sajedbarouni/strategy-call" target="_blank" rel="noopener noreferrer" className="block btn-filled text-center text-xs mt-4">Book a Call</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
