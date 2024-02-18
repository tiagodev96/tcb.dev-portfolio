"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "./components/Logo";
import { MessageInput } from "./components/MessageInput";
import { QuickPages } from "./components/QuickPages";
import { Copyright } from "./components/Copyright";

export function Footer() {
  return (
    <footer className="bg-1000">
      <div
        className="
        container
        flex flex-col flex-wrap
        px-4
        py-16
        mx-auto
        md:items-center
        lg:items-start
        md:flex-row md:flex-nowrap
      "
      >
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <Logo />
          <p className="mt-2 text-xs text-justify text-100">
            Bem-vindo ao meu site de portfolio! Aqui, você descobrirá o universo
            que construo como desenvolvedor FullStack, pronto para abraçar
            desafios e contribuir com minha paixão pela tecnologia. Explore meu
            trabalho, conecte-se e juntos vamos criar algo extraordinário!
          </p>
          <div className="flex justify-center mt-4 space-x-4 lg:mt-8">
            <Link href="https://twitter.com/tiagocb96" target="_blank">
              <Twitter className="text-100 transition-all hover:text-sky-300" />
            </Link>
            <Link
              href="https://www.instagram.com/tiagocbatista"
              target="_blank"
            >
              <Instagram className="text-100 transition-all hover:text-pink-500" />
            </Link>
            <Link href="https://www.linkedin.com/in/tiagocb96/" target="_blank">
              <Linkedin className="text-100 transition-all hover:text-blue-400" />
            </Link>
          </div>
        </div>

        <div className="justify-between w-full mt-4 text-center lg:flex">
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <MessageInput />
          </div>

          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <QuickPages />
          </div>

          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-gray-100">
              Quick Links
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <Link href={"/"} className="text-gray-300">
                  Link 1
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Link 2
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Link 3
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Link 4
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center -mt-12">
        <Copyright />
      </div>
    </footer>
  );
}
