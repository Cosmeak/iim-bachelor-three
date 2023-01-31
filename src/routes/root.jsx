export default function Root() {
  return (
   <>
     <nav className="flex justify-center">
       <ul className="flex justify-center items-center gap-2 my-2">
         <li className="bg-amber-100 rounded px-2 py-1">
           <a href={'/'}>Home page</a>
         </li>
         <li className="bg-amber-100 rounded px-2 py-1">
           <a href={'/search'}>Search for a pokemon ?</a>
         </li>
         <li className="bg-amber-100 rounded px-2 py-1">
          <a href={'/booster'}>Search Booster</a>
          </li>
          <li className="bg-amber-100 rounded px-2 py-1">
            <a href={'/singleBooster'}>single Booster</a>
          </li>
       </ul>
     </nav>
   </>
  );
};