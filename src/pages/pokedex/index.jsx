import React, { useState, useEffect } from 'react';
import Pokecard from '../../components/pokecard.jsx';
import AppLayout from "../../layouts/appLayout.jsx";

const Pokedex = () => {
    const [pokemonList, setPokemonList] = useState([]);

    const getAllPokemons = async () => {
        let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
        res = await res.json();

        res.results.forEach(pokemon => {
            getPokemon(pokemon.url)
        });
    };

    const getPokemon = async (url) => {
        let pokemon = await fetch(url);
        pokemon = await pokemon.json();
        setPokemonList(pokemonPrecedent => [...pokemonPrecedent, pokemon]);
    };

    useEffect(() => {
        getAllPokemons();
    }, []);

    return (
    <AppLayout>
        {pokemonList ? (
        <div className="container grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-16 p-8 pt-32 mx-auto">
            {pokemonList.map(pokemon => (
                <Pokecard
                    key={pokemon.id} 
                    pokemon={pokemon}
                />
            ))}
        </div>
        ) : (
        <p>y'a rien</p>
        )}
    </AppLayout>
    );
}

export default Pokedex;