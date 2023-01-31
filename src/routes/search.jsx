import React, { useState, useEffect } from "react";
import pokemon from "pokemontcgsdk";

const Search = () => {
  const [card, setCard] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await pokemon.card.where({ name: searchTerm });
    setCard(results[0]);
    console.log(results);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="border rounded mr-2"/>
        <button type="submit">Rechercher</button>
      </form>
      {card && <img src={card.images.small} alt={card.name} />}
    </div>
  );
};

export default Search;