import { Separator } from "@/components/ui/separator";
import {
  GithubIcon,
  LinkedinIcon,
} from "lucide-react";
import { navLinks } from "./NavBar/nav-menu";
import { links } from "../config/data";


const Footer = () => {
  return (
    <div className="flex flex-col">
      <Separator />
      <div className="grow bg-muted" />
      <footer>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
          <div className="py-12 flex flex-col justify-start items-center">

         <h1 className="text-2xl font-bold">Rayen Bakali</h1>

            <ul className="mt-6 flex items-center gap-4 flex-wrap">
              {navLinks.map(({ title, href }) => (
                <li key={title}>
                  <a
                    href={href}
                    className="text-muted-foreground hover:text-foreground font-medium"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <a href={links.linkedin} className="font-bold hover:text-foreground" target="_blank" rel="noopener noreferrer">
                Rayen Bakali
              </a>
              . All rights reserved.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
