import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Building2, Calendar, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { experiences } from "../config/data";

const WorkTimeline = () => {
  return (
    <section id="about" className="relative px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-12 ml-0">
          <Badge variant="secondary" className="mb-4">
            About
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Experience
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Roles that shaped how I ship products, from broadcast tooling to field
            robotics.
          </p>
        </div>

        <div className="relative ml-2 sm:ml-3">
          {/* Timeline line */}
          <div className="absolute left-0 top-6 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />

          {experiences.map(
            ({
              company,
              companyUrl,
              logo,
              location,
              current,
              description,
              highlights,
              period,
              technologies,
              title,
            }) => (
              <motion.div
                key={`${company}-${title}`}
                className="relative pl-6 sm:pl-10 pb-10 last:pb-0"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Timeline dot */}
                <span className="absolute left-0 top-6 flex h-3 w-3 -translate-x-1/2">
                  {current && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/40 motion-reduce:animate-none" />
                  )}
                  <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-primary bg-background" />
                </span>

                <div className="group rounded-2xl border border-border bg-card/50 p-5 sm:p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg motion-reduce:hover:translate-y-0">
                  {/* Header */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-white p-1.5">
                        {logo ? (
                          <img
                            src={logo}
                            alt=""
                            className="max-h-full max-w-full object-contain"
                            loading="lazy"
                          />
                        ) : (
                          <Building2 className="h-5 w-5 text-neutral-500" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-xl font-semibold leading-tight">
                          {title}
                        </h3>
                        {companyUrl ? (
                          <a
                            href={companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm sm:text-base font-medium text-muted-foreground hover:text-foreground"
                          >
                            {company}
                            <ArrowUpRight className="ml-1 inline h-3.5 w-3.5 align-[-0.1em]" />
                          </a>
                        ) : (
                          <span className="text-sm sm:text-base font-medium text-muted-foreground">
                            {company}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm sm:flex-col sm:items-end sm:shrink-0">
                      {current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          Current
                        </span>
                      )}
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {period}
                      </span>
                      {location && (
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {location}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {description}
                  </p>

                  {highlights?.length > 0 && (
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {highlights.map(({ label, text }) => (
                        <li
                          key={label}
                          className="relative rounded-xl bg-muted/50 p-4 pl-5 text-sm leading-relaxed before:absolute before:left-0 before:top-4 before:bottom-4 before:w-0.5 before:rounded-full before:bg-primary/40"
                        >
                          <span className="block font-semibold text-foreground">
                            {label}
                          </span>
                          <span className="text-muted-foreground">{text}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="rounded-full">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkTimeline;
