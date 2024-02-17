import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TCB Portfolio",
  description:
    "Bem-vindo ao meu site de portfolio! Aqui, você descobrirá o universo que construo como desenvolvedor FullStack, pronto para abraçar desafios e contribuir com minha paixão pela tecnologia. Explore meu trabalho, conecte-se e juntos vamos criar algo extraordinário!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        <>{children}</>
        <Footer />
      </body>
    </html>
  );
}
