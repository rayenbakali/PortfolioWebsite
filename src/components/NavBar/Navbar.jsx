import { Button } from "@/components/ui/button";
import { NavMenu } from "./nav-menu";
import { Sidebar } from "./navigation-sheet";
import { Github, Linkedin } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [Githubhovered, setGithubhovered] = useState(false);
  const [Linkedinhovered, setLinkedinhovered] = useState(false);
  return (
    <div className="bg-muted">
      <nav
        className="fixed top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full z-50">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <h1 className="text-2xl font-bold">Rayen Bakali</h1>
          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />
            <div className="flex items-center gap-3">
            <Button variant="outline" className="rounded-full hover:animate-fade-in" onMouseEnter={() => setGithubhovered(true)} onMouseLeave={() => setGithubhovered(false)} asChild>
              <a href="https://github.com/rayenbakali" target="_blank" rel="noopener noreferrer">
                <Github className="rounded-full" />
                {Githubhovered ? "Github" : ""}
              </a>
            </Button>
              <Button variant="outline" className="rounded-full hover:animate-fade-in" onMouseEnter={() => setLinkedinhovered(true)} onMouseLeave={() => setLinkedinhovered(false)} asChild>
              <a href="https://www.linkedin.com/in/rayenbakali/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="rounded-full" />
                {Linkedinhovered ? "Linkedin" : ""}
              </a>
            </Button>
            {/* Mobile Menu */}
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
