import React, { useState, useEffect } from 'react';
import Pokecard from '../../components/pokecard.jsx';
import AppLayout from "../../layouts/appLayout.jsx";

// const getPokemonUrl = (id) => {
//     return `https://pokeapi.co/api/v2/pokemon/${id}`;
// }
//
// const fetchAllPokemon = async (id) => {
//     const url = getPokemonUrl(id);
//     const getPokemon = await fetch(url);
//     return getPokemon.json();
// }

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
        // for (let i = 1; i <= pokemonCount ; i++) {
        //     fetchAllPokemon(i).then(resultsPokemon => {
        //         setPokemonList(pokemonPrecedent => [...pokemonPrecedent, resultsPokemon]);
        //     });
        // }
    }, []);

    return (
    <AppLayout>
        {pokemonList ? (
        <div className="container grid grid-cols-8 gap-4 p-8 pt-24 mx-auto">
            {pokemonList.map(pokemon => (
                <Pokecard pokemon={pokemon} key={pokemon.id} />
            ))}
        </div>
        ) : (
        <p>y'a rien</p>
        )}
    </AppLayout>
    );
}

export default Pokedex;