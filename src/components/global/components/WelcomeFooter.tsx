import React from "react";
import { Logo } from "./Logo";
import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export const WelcomeFooter = () => {
  return (
    <>
      <Logo />
      <p className="mt-2 text-xs text-justify text-100">
        Bem-vindo ao meu site de portfolio! Aqui, você descobrirá o universo que
        construo como desenvolvedor FullStack, pronto para abraçar desafios e
        contribuir com minha paixão pela tecnologia. Explore meu trabalho,
        conecte-se e juntos vamos criar algo extraordinário!
      </p>
      <div className="flex justify-center mt-4 space-x-4 lg:mt-8">
        <Link href="https://twitter.com/tiagocb96" target="_blank">
          <Twitter className="text-100 transition-all hover:text-sky-300" />
        </Link>
        <Link href="https://www.instagram.com/tiagocbatista" target="_blank">
          <Instagram className="text-100 transition-all hover:text-pink-500" />
        </Link>
        <Link href="https://www.linkedin.com/in/tiagocb96/" target="_blank">
          <Linkedin className="text-100 transition-all hover:text-blue-400" />
        </Link>
      </div>
    </>
  );
};
