const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-primary-foreground mb-4">DK Metals</h3>
            <p className="text-primary-foreground/80">
              Your trusted partner for ferrous and non-ferrous metal exports from the UK 
              to international markets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#licenses" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Licenses
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Orchard Park, Cambridge, UK</li>
              <li>
                <a href="mailto:info@dkmetals.co.uk" className="hover:text-primary-foreground transition-colors">
                  info@dkmetals.co.uk
                </a>
              </li>
              <li>
                <a href="tel:+447405703086" className="hover:text-primary-foreground transition-colors">
                  +44 7405 703086
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © {currentYear} DK Metals Private Ltd. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm mt-2">
            Licensed Scrap Metal Dealer - Licence No: SMD296686
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
