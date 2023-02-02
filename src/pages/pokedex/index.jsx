import React, { useState, useEffect } from 'react';

const getPokemonUrl = (id) => {
    return `https://pokeapi.co/api/v2/pokemon/${id}`;
}

const fetchAllPokemon = async (id) => {
    const url = getPokemonUrl(id);
    const getPokemon = await fetch(url);
    return getPokemon.json();
}

const Pokedex = () => {
    const [pokemonList, setPokemonList] = useState([]);


    useEffect(() => {
        let pokemonCount = 500;
        for (let i = 1; i <= pokemonCount ; i++) {
            fetchAllPokemon(i).then(resultsPokemon => {
                setPokemonList(pokemonPrecedent => [...pokemonPrecedent, resultsPokemon]);
                console.log(resultsPokemon)
            });;
        }
    }, []);

    return (
    <div>
        {pokemonList ? (
        <ul>
            {pokemonList.map(pokemon => (
            <li key={pokemon.name}>{pokemon.name}
            <img src={pokemon.sprites.front_default} alt="" />
                <a  href={'/pokedex/'+ pokemon.id}>voir les stats</a>
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