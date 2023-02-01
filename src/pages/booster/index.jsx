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
            <div className="container mx-auto pt-24 grid grid-cols-4 gap-4">
                {boosters.map(booster => (
                    <div className="shadow-lg bg-pokeball-black/50 backdrop-blur-sm rounded h-[400px] p-4 relative" key={booster.code}>
                        <h2 className="text-center">{booster.name}</h2>

                        <div className="h-4/5 w-2/3 mx-auto flex justify-center items-center my-auto">
                          <img className="object-contain w-full h-full" src={booster.images.logo} alt={booster.name} />
                        </div>

                      <a className="bg-pokeball-black/75 px-2 py-1 rounded text-pokeball-white absolute bottom-2 left-2 text-sm" href={'/booster/'+ booster.id}>See cards</a>
                      <a className="bg-pokeball-black/75 px-2 py-1 rounded text-pokeball-white absolute bottom-2 right-2 text-sm" href={'/booster/'+ booster.id}>Open booster</a>
                    </div>
                ))}
            </div>
        </AppLayout>
    );
};
export default Index;