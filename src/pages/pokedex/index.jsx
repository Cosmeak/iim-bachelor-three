import React, { useState, useEffect } from 'react';

const fetchAllPokemon = async () => {
    const url = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
    const getPokemon = await url.json();
    return getPokemon.results;
}

const Pokedex = () => {
    const [pokemonList, setPokemonList] = useState(null);

    useEffect(() => {
    fetchAllPokemon().then(results => {
        setPokemonList(results);
    });;
    }, []);

    return (
    <div>
        {pokemonList ? (
        <ul>
            {pokemonList.map(pokemon => (
            <li key={pokemon.name}>{pokemon.name}
                <a href="">voir les stats</a>
            </li>
            
            ))}
        </ul>
        ) : (
        <p>y'a rien</p>
        )}
    </div>
    );
}



export default Pokedex;