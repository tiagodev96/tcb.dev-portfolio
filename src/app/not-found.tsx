const NotFound = () => {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ops!
        </p>

        <p className="mt-4 text-gray-500">A página não foi encontrada.</p>

        <a
          href="/"
          className="mt-6 inline-block rounded bg-primary text-1000 px-5 py-3 text-sm font-bold border-[2px] border-transparent  hover:bg-primaryHover hover:border-primary focus:outline-none focus:ring"
        >
          Voltar para o início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
