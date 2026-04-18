import { Button } from "@/components/ui/button";
import { NavMenu } from "./nav-menu";
import { Sidebar } from "./navigation-sheet";
import { Github, Linkedin } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-muted">
      <nav className="fixed top-4 z-50 h-14 max-w-screen-xl rounded-full border bg-background px-3 shadow-sm dark:border-slate-700/70 sm:top-6 sm:h-16 sm:px-4 inset-x-3 sm:inset-x-4 mx-auto">
        <div className="flex h-full min-w-0 items-center justify-between gap-2 sm:gap-4">
          <a href="#home" className="min-w-0 shrink">
            <h1 className="truncate text-base font-bold sm:text-xl md:text-2xl">
              Rayen Bakali
            </h1>
          </a>
          <NavMenu className="hidden min-w-0 flex-1 justify-center md:flex" />
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <Button
              variant="outline"
              size="icon"
              className="size-9 shrink-0 rounded-full sm:size-10"
              asChild
            >
              <a
                href="https://github.com/rayenbakali"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="size-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-9 shrink-0 rounded-full sm:size-10"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/rayenbakali/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4" />
              </a>
            </Button>
            <div className="md:hidden">
              <Sidebar />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
