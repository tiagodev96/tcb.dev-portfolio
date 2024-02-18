import { Footer, Header } from "@/components";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <>{children}</>
      <Footer />
      <Toaster />
    </>
  );
};

export default layout;
