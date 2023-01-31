export default function Root() {
  return (
   <>
     <header className="bg-pokeball-black shadow-lg sticky top-0">
       <nav className="flex justify-center">
         <ul className="flex justify-center items-center gap-2 my-2">
           <li className="bg-pokeball-red rounded px-2 py-1 text-pokeball-white">
             <a href={'/'}>Home page</a>
           </li>
           <li className="bg-pokeball-red rounded px-2 py-1 text-pokeball-white">
             <a href={'/search'}>Search for a pokemon ?</a>
           </li>
         </ul>
       </nav>
     </header>
   </>
  );
};