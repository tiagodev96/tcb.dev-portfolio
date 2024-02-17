"use client";

import Link from "next/link";
import { Nav } from "./components/Nav";
import { BurguerMenu } from "./components/BurguerMenu";

export const Header = () => {
  return (
    <header className="h-[80px] bg-1000 text-100 flex items-center">
      <div className="container flex flex-row justify-between">
        <Link
          href="/"
          className="font-bold flex flex-row items-center hover:scale-110 transition-all"
        >
          <h2 className="text-3xl text-primary">TCB</h2>
          <span className="text-4xl mb-4 ml-2">.</span>
        </Link>

        <BurguerMenu />
        <Nav />
      </div>
    </header>
  );
};
