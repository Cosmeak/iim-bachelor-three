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
            console.log(result.data[0].name)
        })

    return (
        <AppLayout>
            <div className="mt-50">
                {boosters.map(booster => (
                    <div className="container mx-auto border max-w-screen-md rounded-3xl p-2 text-center justify-center align-middle" key={booster.code}>
                        <h2>{booster.name}</h2>
                        <h1>{booster.id}</h1>
                        <img className="justify-center max-w-clip max-w-{150px}" src={booster.images.logo} alt={booster.name} />
                        <a className="bg-pokeball-red p-2 rounded-lg text-pokeball-white" href={'/booster/' + booster.id}>See all cards</a>
                        <a className="bg-pokeball-blue p-2 rounded-lg text-pokeball-white" href={'/opening/' + booster.id}>Open a booster</a>
                    </div>
                ))}
            </div>
        </AppLayout>
    );
};
export default Index;