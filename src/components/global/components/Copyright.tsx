import { Separator } from "@/components/ui/separator";

export const Copyright = () => {
  return (
    <div className="w-full mt-5 flex flex-col items-center">
      <Separator className="w-full bg-100/50 h-[1px]" />
      <div className="flex flex-row p-4 space-x-5 items-center text-100/70 text-sm">
        <p>@{new Date().getFullYear()} Todos os direitos reservados</p>
        <Separator
          orientation="vertical"
          className="w-[1px] h-[80%] bg-100/50 "
        />
        <p>Tiago Carneiro Batista</p>
      </div>
    </div>
  );
};
