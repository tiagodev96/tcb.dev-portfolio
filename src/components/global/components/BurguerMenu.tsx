"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { BurguerTrigger } from "./BurguerTrigger";
import { Instagram, Linkedin } from "lucide-react";
import { DropdownMenuItemIndicator } from "@radix-ui/react-dropdown-menu";

const NAV_PAGES = [
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

const SOCIAL_MEDIA = [
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/tiagocb96",
    icon: <Linkedin size={16} />,
  },
  {
    name: "Instagram",
    path: "https://www.instagram.com/tiagocbatista",
    icon: <Instagram size={16} />,
  },
];

export const BurguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="self-center flex md:hidden">
      <DropdownMenu onOpenChange={(open) => setIsOpen(open)}>
        <DropdownMenuTrigger>
          <BurguerTrigger isOpen={isOpen} handleToggle={handleToggle} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-screen mt-5 xs:w-56 md:hidden bg-white">
          <DropdownMenuLabel className="text-1000">Páginas</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-500" />
          <DropdownMenuGroup>
            {NAV_PAGES.map((page) => (
              <a href={page.path} key={page.name}>
                <DropdownMenuItem className="hover:bg-500">
                  {page.name}
                </DropdownMenuItem>
              </a>
            ))}
          </DropdownMenuGroup>

          <DropdownMenuLabel className="mt-4 text-1000">
            Contato
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-500" />
          <DropdownMenuGroup>
            {SOCIAL_MEDIA.map((social) => (
              <a href={social.path} key={social.name} target="_blank">
                <DropdownMenuItem className="hover:bg-500 flex flex-row justify-between items-center text-1000">
                  {social.name}
                  <div className="text-1000">{social.icon}</div>
                </DropdownMenuItem>
              </a>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
