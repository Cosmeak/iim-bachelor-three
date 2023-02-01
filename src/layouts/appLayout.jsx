const AppLayout = ({ children }) => {
  return (
    <div className="w-screen font-rubik">
      <header className="container left-1/2 right-1/2 -translate-x-1/2 fixed top-4 z-10 bg-pokeball-black/50 shadow-xl backdrop-blur-lg p-2 rounded-lg">
        <nav className="h-full flex justify-between mx-auto px-8">

          <div className="h-full flex items-center gap-2 text-lg">
            <img src="/assets/pokeball.png" className="h-[40px] my-auto object-contain" />
            <p className="text-pokeball-white font-semibold text-xl">Pokemon Center</p>
          </div>

          <ul className="h-full flex items-center gap-4 text-pokeball-white my-auto">
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
              <a href={'/opening'}>Opening</a>
            </li>
          </ul>

        </nav>
      </header>

      <main>{ children }</main>
    </div>
  );
};

export default AppLayout;