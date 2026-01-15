const Services = () => {
  const ferrousMetals = [
    "Steel Scrap",
    "Iron Castings",
    "HMS 1 & 2",
    "Shredded Steel",
    "Rail Scrap",
    "Plate & Structural Steel",
  ];

  const nonFerrousMetals = [
    "Copper Wire & Cable",
    "Aluminium Scrap",
    "Brass & Bronze",
    "Stainless Steel",
    "Lead & Zinc",
    "Nickel Alloys",
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We trade in a comprehensive range of ferrous and non-ferrous metals, 
            ensuring consistent quality and competitive pricing for our international clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Ferrous Metals */}
          <div className="bg-primary rounded-lg overflow-hidden shadow-lg">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                Ferrous Metals
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Iron-based metals known for strength and durability
              </p>
              <ul className="space-y-3">
                {ferrousMetals.map((metal) => (
                  <li key={metal} className="flex items-center text-primary-foreground">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                    {metal}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Non-Ferrous Metals */}
          <div className="bg-accent rounded-lg overflow-hidden shadow-lg">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-accent-foreground mb-2">
                Non-Ferrous Metals
              </h3>
              <p className="text-accent-foreground/80 mb-6">
                High-value metals with excellent corrosion resistance
              </p>
              <ul className="space-y-3">
                {nonFerrousMetals.map((metal) => (
                  <li key={metal} className="flex items-center text-accent-foreground">
                    <span className="w-2 h-2 bg-primary-foreground rounded-full mr-3" />
                    {metal}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
