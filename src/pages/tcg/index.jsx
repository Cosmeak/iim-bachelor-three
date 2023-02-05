import React, { useState, useEffect } from "react";
import pokemon from "pokemontcgsdk";
import AppLayout from "../../layouts/appLayout.jsx";
import Card from "../../components/card.jsx";
import Loader from "../../components/loader.jsx";

const Index = () => {
  const [cards, setCards] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const res = await pokemon.card.where({ q: 'name:' + event.target[0].value });
    setCards(res.count ? res.data : null);
    setIsLoading(false);
    document.getElementsByTagName('form')[0].reset();
  };

  return (
    <AppLayout>
      <div className="container mx-auto pt-12">
        <form onSubmit={handleSubmit} className="flex mx-auto px-5">
          <input type="text" className="rounded-l px-2 w-full bg-gray-100 placeholder:text-gray-300" placeholder="Search a pokemon card.." />
          <button type="submit" className="bg-pokeball-red rounded-r px-2 py-1 hover:opacity-75 duration-300 text-white font-thin">Search</button>
        </form>
        <div className="container my-4 p-4 mx-auto grid gap-8 grid-cols-4 grid-rows-1">
          {isLoading ? (
            <Loader />
          ) : cards && cards.length > 0 ? (
            cards.map((card) => (
              <Card key={card.id} pokemon={card} />
            ))
          ) : (
            <p className="mx-auto text-center col-span-full">No card found... 😢</p>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;