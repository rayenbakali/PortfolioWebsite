import { Badge } from "@/components/ui/badge";
import { Handshake } from "lucide-react";
import { partners, partnershipHighlights } from "../config/data";

// Repeat the logos so one loop is wider than the widest container,
// otherwise a gap shows before the marquee wraps around.
const marqueeSet = Array.from({ length: 3 }, () => partners).flat();

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
          {/* Two copies of the set so translating by -50% loops seamlessly */}
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[...marqueeSet, ...marqueeSet].map((partner, index) => {
              const isClone = index >= partners.length;
              return (
                <a
                  key={`${partner.name}-${index}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={partner.name}
                  aria-label={partner.name}
                  aria-hidden={isClone || undefined}
                  tabIndex={isClone ? -1 : undefined}
                  className={`mr-6 flex h-24 w-44 shrink-0 items-center justify-center p-4 transition-opacity hover:opacity-80 ${isClone ? "motion-reduce:hidden" : ""}`}
                >
                  <img
                    src={partner.logo}
                    alt={isClone ? "" : `${partner.name} logo`}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
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
