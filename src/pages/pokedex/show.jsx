import AppLayout from "../../layouts/appLayout.jsx";
import { Route, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';


const Show = () => {
    const params = useParams();
    const [pokemonStats , setPokemonStats] = useState();
    
    const fetchPokemon = async () => {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon/' + params.pokedexId);
        const pokemon = await data.json();
        setPokemonStats(pokemon)
    }

    useEffect(() => {
        fetchPokemon();
    }, []);

    console.log(pokemonStats)

    if(pokemonStats){
        return (
            <AppLayout>
                <div>
                    <p>{pokemonStats.name}</p>
                    <img src={pokemonStats.sprites.front_default} alt="" />
                </div>
            </AppLayout>
        );
    }
}
export default Show ;