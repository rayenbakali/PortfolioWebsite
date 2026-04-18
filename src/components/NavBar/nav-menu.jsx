import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export const navLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Partnerships", href: "#partnerships" },
  { title: "Services", href: "#services" },
  { title: "Contact", href: "#contact" },
];

export const NavMenu = ({ className, ...props }) => (
  <NavigationMenu viewport={false} className={cn(className)} {...props}>
    <NavigationMenuList className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
      {navLinks.map((link) => (
        <NavigationMenuItem key={link.title}>
          <NavigationMenuLink asChild>
            <a
              href={link.href}
              className="rounded-md px-2 py-1.5 text-sm font-medium sm:px-3"
            >
              {link.title}
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);
