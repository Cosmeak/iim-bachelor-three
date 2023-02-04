const AppLayout = ({ children }) => {
  return (
    <div className="w-screen min-h-screen font-rubik bg-gray-50">
      <header className="container left-1/2 right-1/2 -translate-x-1/2 fixed top-4 z-10 bg-pokeball-white drop-shadow-lg p-2 rounded-lg">
        <nav className="h-full flex justify-between mx-auto px-8">

          <div className="h-full flex items-center gap-2 text-lg">
            <img src="/assets/pokeball.png" className="h-[40px] my-auto object-contain animate-bounce" />
            <p className="font-semibold text-xl">Pokemon Center</p>
          </div>

          <ul className="h-full flex items-center gap-4 my-auto">
            <li className="hover:underline">
              <a href={'/'}>Home</a>
            </li>
            <li className="hover:underline">
              <a href={'/tcg'}>TCG</a>
            </li>
            <li className="hover:underline">
              <a href={'/booster'}>Boosters</a>
            </li>
            <li className="hover:underline">
              <a href={'/pokedex'}>Pokedex</a>
            </li>
          </ul>

        </nav>
      </header>

      <main className="container mx-auto p-8 pt-24 ">{ children }</main>
    </div>
  );
};

export default AppLayout;