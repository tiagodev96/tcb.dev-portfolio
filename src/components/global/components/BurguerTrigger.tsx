"use client";

interface BurguerTriggerProps {
  isOpen: boolean;
  handleToggle: () => void;
}

const lineDefault = "w-[20px] h-[1px] bg-100 transition-all";

export const BurguerTrigger = ({
  isOpen,
  handleToggle,
}: BurguerTriggerProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-y-[7px] w-[35px] h-[35px] self-center"
      onClick={handleToggle}
    >
      <div
        className={`${lineDefault} transform ${isOpen ? "rotate-45 translate-y-1" : ""} duration-500`}
      ></div>
      <div
        className={`${lineDefault} ${isOpen ? "absolute opacity-0 -right-50" : ""} duration-200`}
      ></div>
      <div
        className={`${lineDefault} transform ${isOpen ? "-rotate-45 -translate-y-1" : ""} duration-500`}
      ></div>
    </div>
  );
};
