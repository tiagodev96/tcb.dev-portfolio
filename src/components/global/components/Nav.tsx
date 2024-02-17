"use client";

import { Instagram, Linkedin } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

const navRoutes = [
  {
    name: "Início",
    path: "/",
  },
  {
    name: "Trabalhos",
    path: "/works",
  },
  {
    name: "Sobre mim",
    path: "/about",
  },
  {
    name: "Contato",
    path: "/contact",
  },
];

export const Nav = () => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="text-md flex-row gap-5 flex mt-2">
        {navRoutes.map((route) => (
          <NavigationMenuItem
            key={route.name}
            className="hover:text-primary pb-1 mt-1 border-b-[2px] border-b-transparent hover:border-b-primary transition-all"
          >
            <NavigationMenuLink href={route.path}>
              {route.name}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        <Separator
          className="h-[40px] bg-100/30 w-[1px]"
          orientation="vertical"
        />

        <a
          className="transition-all hover:scale-110 hover:text-primary"
          href="https://www.linkedin.com/in/tiagocb96"
          target="_blank"
        >
          <Linkedin size={18} />
        </a>
        <a
          className="transition-all hover:scale-110 hover:text-primary"
          href="https://instagram.com/tiagocbatista"
          target="_blank"
        >
          <Instagram size={18} />
        </a>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
