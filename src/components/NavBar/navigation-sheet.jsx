import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Github, Linkedin, Menu } from "lucide-react";
import { navLinks } from "./nav-menu";

export const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="size-9 shrink-0 rounded-full sm:size-10"
          aria-label="Open menu"
        >
          <Menu className="size-[1.15rem] sm:size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex w-[min(100vw,20rem)] flex-col gap-0 border-l p-0 sm:max-w-sm"
      >
        <SheetHeader className="space-y-1 border-b px-6 pb-4 pt-6 text-left">
          <SheetTitle className="text-xl">Rayen Bakali</SheetTitle>
          <p className="text-sm font-normal text-muted-foreground">Portfolio</p>
        </SheetHeader>
        <nav
          className="flex-1 overflow-y-auto overscroll-contain px-2 py-2"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <li key={link.title}>
                <SheetClose asChild>
                  <a
                    href={link.href}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground active:bg-accent/90"
                  >
                    {link.title}
                  </a>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
        <SheetFooter className="mt-auto flex flex-row flex-wrap items-center justify-center gap-3 border-t px-6 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 sm:justify-start">
          <Button variant="outline" size="icon" className="rounded-full" asChild>
            <a
              href="https://github.com/rayenbakali"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="size-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full" asChild>
            <a
              href="https://www.linkedin.com/in/rayenbakali/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-4" />
            </a>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
