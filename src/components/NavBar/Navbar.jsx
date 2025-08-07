import { Button } from "@/components/ui/button";
import { NavMenu } from "./nav-menu";
import { Sidebar } from "./navigation-sheet";
import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
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
              <Link to="https://github.com/rayenbakali">
                <Github className="rounded-full" />
                {Githubhovered?'Github':''}
              </Link>
            </Button>
              <Button variant="outline" className="rounded-full hover:animate-fade-in" onMouseEnter={() => setLinkedinhovered(true)} onMouseLeave={() => setLinkedinhovered(false)} asChild>
              <Link to="https://www.linkedin.com/in/rayenbakali/">
                <Linkedin className="rounded-full" />
                {Linkedinhovered?'Linkedin':''}
              </Link>
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
