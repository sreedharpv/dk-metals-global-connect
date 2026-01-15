import { Shield, Globe, Truck, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Licensed Dealer",
      description: "Fully licensed under the Scrap Metal Dealers Act 2013",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Exporting to destinations across Europe, Asia, and beyond",
    },
    {
      icon: Truck,
      title: "Reliable Logistics",
      description: "Efficient shipping and handling for all metal types",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Rigorous quality control on all materials",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About DK Metals
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            DK Metals is a Cambridge-based metal trading company specializing in the export of 
            high-quality ferrous and non-ferrous metals to international markets. With our 
            commitment to quality and compliance, we've built lasting relationships with 
            clients worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
