import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { Briefcase, Check, Github, Linkedin, Mail, Phone } from "lucide-react";
import { links } from "../config/data";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  // mailto: does nothing without a mail app set up, so also copy the address
  const handleEmailClick = () => {
    navigator.clipboard
      ?.writeText(links.email)
      .then(() => setCopied(true))
      .catch(() => {});
  };

  return (
    <section id="contact" className="relative px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-screen-lg mx-auto">
        <div className="rounded-2xl border border-border bg-muted/30 p-8 sm:p-12 text-center">
          <Badge variant="secondary" className="mb-4">
            Contact
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Get in touch
          </h2>
          <p className="text-muted-foreground mt-3 text-lg max-w-xl mx-auto">
            Open to freelance projects, robotics-adjacent product work, and full-stack
            roles. Tell me what you&apos;re building—I&apos;ll respond within a couple
            of days.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a href={`mailto:${links.email}`} className="inline-flex items-center gap-2 font-medium hover:underline underline-offset-4">
              <Mail className="h-4 w-4 text-muted-foreground" />
              {links.email}
            </a>
            <a href={`tel:${links.phone}`} className="inline-flex items-center gap-2 font-medium hover:underline underline-offset-4">
              <Phone className="h-4 w-4 text-muted-foreground" />
              {links.phoneDisplay}
            </a>
          </div>
          <div className="mt-6 flex-wrap flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" className="rounded-full" asChild>
              <a href={`mailto:${links.email}`} onClick={handleEmailClick}>
                {copied ? (
                  <Check className="mr-2 h-4 w-4" />
                ) : (
                  <Mail className="mr-2 h-4 w-4" />
                )}
                {copied ? "Email copied!" : "Email me"}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full shadow-none" asChild>
              <a href={`tel:${links.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call me
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full shadow-none" asChild>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full shadow-none" asChild>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full shadow-none" asChild>
              <a href={links.upwork} target="_blank" rel="noopener noreferrer">
                <Briefcase className="mr-2 h-4 w-4" />
                Upwork
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
