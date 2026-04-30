const Footer = () => {
  return (
    <footer className="border-t border-border/20 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-lg font-black gold-gradient-text">Sajed Barouni</p>
        <p className="text-muted-foreground text-xs tracking-wider uppercase">
          © {new Date().getFullYear()} All rights reserved. Built to convert.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
