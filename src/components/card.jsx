import React, { useState, useEffect } from "react";
import pokemon from "pokemontcgsdk";

const Card = () => {
    const [card, setCard] = useState(null);

    useEffect(() => {
        pokemon.card.find("xy1-3").then((result) => {
            setCard(result);
        });
    }, []);

    return card ? <img src={card.images.small} alt={card.name} /> : <p>No card found</p>;
};

export default Card;
