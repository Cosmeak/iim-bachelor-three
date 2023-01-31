import React, { useState } from "react";
import pokemon from "pokemontcgsdk";
import AppLayout from "../layouts/appLayout.jsx";
import Card from "../components/card.jsx";
const Search = () => {
  const [cards, setCards] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await pokemon.card.where({ q: 'name:' + event.target[0].value });
    setCards(res.count ? res.data : null);
    document.getElementsByTagName('form')[0].reset();
  };

  return (
    <AppLayout>
        <form onSubmit={handleSubmit} className="bg-pokeball-white w-full p-2 flex justify-center">
          <input type="text" className="border rounded mr-2 px-2" placeholder="Rechercher un Pokémon" />
          <button type="submit" className="bg-slate-100 rounded px-2 py-1 hover:bg-slate-200">Rechercher</button>
        </form>

        <div className="container my-4 p-4 bg-pokeball-white rounded mx-auto grid gap-8 grid-cols-4 grid-rows-1">
          {cards && cards.length > 0 ? cards.map((card) => (
            <Card key={card.id} pokemon={card} />
          )) : (<p className="mx-auto text-center col-span-full">Aucunes cartes trouvés</p>)}
        </div>
    </AppLayout>
  );
};

export default Search;