import React, { useState, useEffect } from "react";
import pokemon from "pokemontcgsdk";

const SearchBar = () => {
    const [card, setCard] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const results = await pokemon.card.where({ name: searchTerm });
        setCard(results[0]);
        console.log(results);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                <button type="submit">Rechercher</button>
            </form>
            {card && <img src={card.images.small} alt={card.name} />}
        </div>
    );
};

export default SearchBar;
