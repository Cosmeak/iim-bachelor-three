import React, { useState, useEffect } from "react";
import pokemon from "pokemontcgsdk";
import SearchBar from "./search";

const Booster = () => {
    const [boosters, setBoosters] = useState([]);

    useEffect(() => {
        pokemon.set.all().then(results => {
            setBoosters(results);
        });
    }, []);

    pokemon.card.all({ q: 'set.name:generations subtypes:mega' })
        .then(result => {
            console.log(result.data[0].name) // "Venusaur"
        })
    
    return (
        <div>
            {boosters.map(booster => (
                <div className="set" key={booster.code}>
                    <h2>{booster.name}</h2>
                    <img src={booster.images.logo} alt={booster.name} />
                    <button><a href={SearchBar}>all card for this set</a></button>
                </div>
            ))}
        </div>
    );
};
export default Booster;