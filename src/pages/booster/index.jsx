import React, { useState, useEffect } from "react";
import AppLayout from "../../layouts/appLayout.jsx";
import pokemon from "pokemontcgsdk";

const Index = () => {
    const [boosters, setBoosters] = useState([]);

    useEffect(() => {
        pokemon.set.all().then(results => {
            setBoosters(results);
        });
    }, []);

    pokemon.card.all({ q: 'set.name:generations' })
        .then(result => {
            console.log(result.data[0].name) // "Venusaur"
        })
    
    return (
      <AppLayout>
        <div>
            {boosters.map(booster => (
                <div className="set" key={booster.code}>
                    <h2>{booster.name}</h2>
                    <h1>{booster.id}</h1>
                    <img src={booster.images.logo} alt={booster.name} />
                    <a href={'/booster/'+ booster.id}>See all cards</a>
                </div>
            ))}
        </div>
      </AppLayout>
    );
};
export default Index;