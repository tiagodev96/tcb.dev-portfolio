import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-bold flex flex-row items-center hover:scale-110 transition-all"
    >
      <h2 className="text-3xl text-primary">TCB</h2>
      <span className="text-white text-4xl mb-4 ml-2">.</span>
    </Link>
  );
};
