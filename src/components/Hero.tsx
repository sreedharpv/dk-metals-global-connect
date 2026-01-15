import heroImage from "@/assets/hero-metals.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 tracking-tight">
          Your Trusted Partner in<br />
          <span className="text-accent">Metal Exports</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
          UK-based exporter of premium quality Ferrous and Non-Ferrous metals to destinations worldwide
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
          >
            Get a Quote
          </a>
          <a
            href="#services"
            className="inline-block px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
