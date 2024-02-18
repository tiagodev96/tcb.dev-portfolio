"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { RotatingLines } from "react-loader-spinner";

export const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const sendMessage = () => {
    setLoading(true);

    const timeout = setTimeout(() => {
      toast({
        description: "Mensagem enviada com sucesso!",
      });

      window.open(
        `https://wa.me/5571999010396?text=${encodeURIComponent(message)}`,
      );
      setMessage("");

      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  };

  return (
    <>
      <h2 className="mb-2 font-bold tracking-widest text-xl text-gray-100">
        Entre em contato via Whatsapp!
      </h2>
      <div className="flex w-full max-w-xs items-center justify-center mx-auto space-x-2 mt-7">
        <Input
          type="text"
          placeholder="Mensagem..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={loading}
        />
        <Button
          type="button"
          onClick={sendMessage}
          className="bg-1000 border-100 border-[1px] group-hover:border-1000  transition-all"
          disabled={loading}
        >
          {loading ? (
            <RotatingLines width="18" strokeColor="grey" />
          ) : (
            <Send
              size={18}
              className="text-100 group-hover:text-1000 transition-all"
            />
          )}
        </Button>
      </div>
    </>
  );
};
