import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Handshake } from "lucide-react";
import { partners, partnershipHighlights } from "../config/data";

const Partnerships = () => {
  return (
    <section id="partnerships" className="relative px-4 py-16 sm:px-6 sm:py-20">
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

        <div className="group relative mb-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:overflow-x-auto">
          {/* Two copies of the list so translating by -50% loops seamlessly */}
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[...partners, ...partners].map((partner, index) => {
              const isClone = index >= partners.length;
              return (
                <a
                  key={`${partner.name}-${index}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-hidden={isClone || undefined}
                  tabIndex={isClone ? -1 : undefined}
                  className={`group/card mr-4 w-72 shrink-0 rounded-xl border border-border p-5 flex items-center gap-4 transition-colors hover:border-primary/40 sm:w-80 ${isClone ? "motion-reduce:hidden" : ""}`}
                >
                  <div className="h-16 w-16 shrink-0 rounded-lg bg-white border border-border flex items-center justify-center p-2">
                    <img
                      src={partner.logo}
                      alt={isClone ? "" : `${partner.name} logo`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1 font-semibold">
                      {partner.name}
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5" />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {partner.detail}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
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
