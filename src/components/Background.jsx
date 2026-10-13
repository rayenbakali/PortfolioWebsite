import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, GraduationCap, MapPin } from "lucide-react";
import { achievements, education, skills } from "../config/data";

const Background = () => {
  return (
    <section id="skills" className="relative px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Skills &amp; Education
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Toolkit
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            What I build with, where I studied, and a few milestones along the way.
          </p>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((group) => (
            <div
              key={group.label}
              className="rounded-xl border border-border p-6 flex flex-col gap-3 last:sm:col-span-2"
            >
              <h3 className="text-sm font-semibold">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="secondary" className="rounded-full">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-6">Education</h3>
            <div className="flex flex-col gap-6">
              {education.map((item) => (
                <div key={item.degree} className="flex gap-4">
                  <div className="flex-shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold">{item.degree}</h4>
                    <p className="text-sm">{item.school}</p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <span>{item.period}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {item.location}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-6">Achievements</h3>
            <div className="flex flex-col gap-6">
              {achievements.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="space-y-1">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold inline-flex items-center gap-1 hover:underline underline-offset-4"
                      >
                        {item.title}
                        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                      </a>
                    ) : (
                      <h4 className="font-semibold">{item.title}</h4>
                    )}
                    <p className="text-sm">{item.detail}</p>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;
