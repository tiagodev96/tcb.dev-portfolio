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
      <h2 className="mb-2 font-bold tracking-widest text-gray-100">
        Quick Links
      </h2>
      <ul className="mb-8 space-y-2 text-md list-none">
        {PAGES.map((page) => (
          <li key={page.title}>
            <Link href={page.href} className="text-100 hover:font-bold">
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
