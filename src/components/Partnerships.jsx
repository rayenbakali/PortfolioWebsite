import { Badge } from "@/components/ui/badge";
import { Handshake } from "lucide-react";
import { partnershipHighlights } from "../config/data";

const Partnerships = () => {
  return (
    <section id="partnerships" className="relative py-20 px-6">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Partnerships
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Let&apos;s build something
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg max-w-2xl mx-auto">
            I partner with teams that need a senior generalist—shipping web products,
            tightening design systems, or connecting ROS-backed hardware to the browser.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {partnershipHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border p-6 bg-muted/40 flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Handshake className="h-4 w-4 text-primary" />
                {item.label}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
