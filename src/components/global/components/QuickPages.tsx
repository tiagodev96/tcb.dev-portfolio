import Link from "next/link";

const PAGES = [
  {
    title: "Início",
    href: "/",
  },
  {
    title: "Trabalhos",
    href: "/works",
  },
  {
    title: "Sobre mim",
    href: "/about",
  },
  {
    title: "Contato",
    href: "/contact",
  },
];

export const QuickPages = () => {
  return (
    <>
      <h2 className="mb-2 font-bold tracking-widest text-xl text-gray-100">
        Navegue
      </h2>
      <ul className="mb-8 space-y-2 text-md list-none max-w-[100px] mx-auto text-start">
        {PAGES.map((page) => (
          <li key={page.title}>
            <Link
              href={page.href}
              className="text-500 hover:font-bold transition-all hover:text-100"
            >
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
