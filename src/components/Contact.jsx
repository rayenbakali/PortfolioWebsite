import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin } from "lucide-react";

const Contact = () => {
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
          <p className="text-muted-foreground text-sm mt-4 max-w-md mx-auto">
            Prefer email? Message me on LinkedIn and I&apos;ll share the best address.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" className="rounded-full" asChild>
              <a
                href="https://www.linkedin.com/in/rayenbakali/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full shadow-none" asChild>
              <a
                href="https://github.com/rayenbakali"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
