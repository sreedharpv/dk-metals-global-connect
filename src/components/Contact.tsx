import { MapPin, Mail, Phone, Globe } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "Orchard Park, Cambridge, UK",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@dkmetals.co.uk",
      href: "mailto:info@dkmetals.co.uk",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+44 7405 703086",
      href: "tel:+447405703086",
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.dkmetals.co.uk",
      href: "https://www.dkmetals.co.uk",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your metal export requirements? Get in touch with our 
            team for competitive quotes and reliable service.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-md"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-lg font-medium text-foreground">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="mailto:info@dkmetals.co.uk"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Send Us an Enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
