import { FileCheck } from "lucide-react";

const Licenses = () => {
  return (
    <section id="licenses" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Licenses & Certifications
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            DK Metals operates fully within UK regulations. We hold all necessary 
            licenses and certifications required for metal dealing and export operations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 bg-primary flex items-center gap-4">
              <FileCheck className="w-8 h-8 text-primary-foreground" />
              <div>
                <h3 className="text-xl font-semibold text-primary-foreground">
                  Scrap Metal Dealer Site Licence
                </h3>
                <p className="text-primary-foreground/80">
                  Licence No: SMD296686
                </p>
              </div>
            </div>
            <div className="p-6">
              <img
                src="/images/scrap-metal-licence.png"
                alt="Scrap Metal Dealer Site Licence SMD296686 - DK Metals Private Ltd"
                className="w-full rounded-lg border border-border"
              />
              <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Licence Holder:</p>
                  <p className="font-medium text-foreground">DK Metals Private Ltd</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Valid Until:</p>
                  <p className="font-medium text-foreground">06 January 2029</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Registered Address:</p>
                  <p className="font-medium text-foreground">7 Chambers Drive, Orchard Park, Cambridgeshire, CB4 2GP</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Site Manager:</p>
                  <p className="font-medium text-foreground">Venkata Sreedhar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Licenses;
