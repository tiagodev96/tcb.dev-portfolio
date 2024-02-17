"use client";

import { Nav } from "./components/Nav";
import { BurguerMenu } from "./components/BurguerMenu";
import { Logo } from "./components/Logo";

export const Header = () => {
  return (
    <header className="h-[80px] bg-1000 text-100 flex items-center">
      <div className="container flex flex-row justify-between">
        <Logo />

        <BurguerMenu />
        <Nav />
      </div>
    </header>
  );
};
