import { Badge } from "@/components/ui/badge";
import { Code2, Cpu, Palette } from "lucide-react";
import { services } from "../config/data";

const icons = [Code2, Cpu, Palette];

const Services = () => {
  return (
    <section id="services" className="relative px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Services
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            What I work on
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg max-w-2xl mx-auto">
            End-to-end delivery: from interface and brand to APIs and robot-facing
            integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={service.title}
                className="rounded-xl border border-border bg-card/50 p-6 flex flex-col gap-4 transition-colors hover:border-primary/40"
              >
                <div className="h-11 w-11 rounded-full bg-accent flex items-center justify-center">
                  <Icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
