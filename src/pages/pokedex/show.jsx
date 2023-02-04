import AppLayout from "../../layouts/appLayout.jsx";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const types = {
	normal: 'px-2 py-1 rounded bg-type-normal',
	fire: 'px-2 py-1 rounded bg-type-fire',
	water: 'px-2 py-1 rounded bg-type-water',
	electric: 'px-2 py-1 rounded bg-type-electric',
	grass: 'px-2 py-1 rounded bg-type-grass',
	ice: 'px-2 py-1 rounded bg-type-ice',
	fighting: 'px-2 py-1 rounded bg-type-fighting',
	poison: 'px-2 py-1 rounded bg-type-poison',
	ground: 'px-2 py-1 rounded bg-type-ground',
	flying: 'px-2 py-1 rounded bg-type-flying',
	psychic: 'px-2 py-1 rounded bg-type-psychic',
	bug: 'px-2 py-1 rounded bg-type-bug',
	rock: 'px-2 py-1 rounded bg-type-rock',
	ghost: 'px-2 py-1 rounded bg-type-ghost',
	dragon: 'px-2 py-1 rounded bg-type-dragon',
	dark: 'px-2 py-1 rounded bg-type-dark',
	steel: 'px-2 py-1 rounded bg-type-steel',
	fairy: 'px-2 py-1 rounded bg-type-fairy',
};


const Show = () => {
    const params = useParams();
    const [pokemon , setPokemon] = useState();
    const [abilities, setAbilities] = useState([]);
    
    async function fetchPokemon() {
        let res = await fetch('https://pokeapi.co/api/v2/pokemon/' + params.pokedexId);
        res = await res.json();
        setPokemon(res);
    };

    // TODO: fetch pokemon abilities to show more information about
    async function fetchAbilities(ability) {
        let res = await fetch(ability.url);
        res = await res.json();
        setAbilities(prevAbilities => [...prevAbilities, res]);
    };

    // TODO: fetch pokedex related insert to show more information about
    async function fetchPokedex(id) {

    };

    // TODO: fetch evolution chain to show evolve to and evolve from 
    async function fetchEvolionChain() {

    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    if (pokemon) console.log(pokemon)
    if (abilities) console.log(abilities)

    if(pokemon){
        return (
            <AppLayout>
                <div className="flex flex-col lg:flex-row gap-4 mt-12">
                    <div className="w-full lg:w-4/12">
                        <div className="bg-pokeball-white drop-shadow-lg rounded-lg p-6 relative w-full flex flex-col gap-6 items-center">
                            <img 
                                src={pokemon.sprites.other.home.front_default} 
                                alt=""  
                                className="w-1/3 -mt-24"
                            />

                            <div className="text-center">
                                <p className="opacity-20 font-bold">N°{pokemon.id}</p>
                                <h1 className="capitalize text-2xl font-medium">{pokemon.name}</h1>
                                <div className="flex justify-center items-center uppercase text-xs gap-2 text-white mt-2">
                                    {pokemon.types.map(type => {
                                        return (
                                            <p key={type.type.name} className={types[type.type.name]}>{type.type.name}</p>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="text-center">
                                <h2 className="font-semibold">POKEDEX ENTRY</h2>
                                <p className="text-sm mx-auto mt-2">Sed cum in, unde labore esse atque, accusamus harum consequatur velit molestiae quidem consectetur nobis iste magni pariatur eveniet perferendis dolore reiciendis.</p>
                            </div>

                            <div className="text-center">
                                <h2 className="font-semibold">ABILITIES</h2>
                                <div className="flex justify-center items-center capitalize text-xs gap-2 mt-2">
                                    {pokemon.abilities.map(ability => {
                                        return (
                                            <p 
                                                key={ability.ability.name}
                                                className="px-4 py-1 bg-pokeball-black/10 border rounded-full text-sm"
                                            >{ability.ability.name}</p>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 grid-rows-2 w-full mx-auto text-center gap-4">
                                <div>
                                    <p className="font-semibold">HEIGHT</p>
                                    <p className="px-4 py-1 bg-pokeball-black/10 border rounded-full text-sm">{pokemon.height}</p>
                                </div>

                                <div>
                                    <p className="font-semibold">WEIGHT</p>
                                    <p className="px-4 py-1 bg-pokeball-black/10 border rounded-full text-sm">{pokemon.weight}</p>
                                </div>

                                <div>
                                    <p className="font-semibold">WEAKNESSES</p>
                                    <p className="px-4 py-1 bg-pokeball-black/10 border rounded-full text-sm">???</p>
                                </div>

                                <div>
                                    <p className="font-semibold">BASE EXP</p>
                                    <p className="px-4 py-1 bg-pokeball-black/10 border rounded-full text-sm">{pokemon.base_experience}</p>
                                </div>
                            </div>

                            <div className="text-center">
                                <h2 className="font-semibold">STATS</h2>
                                <div className="flex gap-2 mt-2">
                                    <div className="rounded-full bg-pokeball-black/10 p-1">
                                        <p className="bg-red-400 rounded-full text-xs p-2 text-white">HP</p>
                                        <p className="text-center text-xs my-2 font-semibold">{pokemon.stats[0].base_stat}</p>
                                    </div>

                                    <div className="rounded-full bg-pokeball-black/10 p-1">
                                        <p className="bg-orange-400 rounded-full text-xs p-2 text-white">ATK</p>
                                        <p className="text-center text-xs my-2 font-semibold">{pokemon.stats[1].base_stat}</p>
                                    </div>

                                    <div className="rounded-full bg-pokeball-black/10 p-1">
                                        <p className="bg-yellow-400 rounded-full text-xs p-2 text-white">DEF</p>
                                        <p className="text-center text-xs my-2 font-semibold">{pokemon.stats[2].base_stat}</p>
                                    </div>

                                    <div className="rounded-full bg-pokeball-black/10 p-1">
                                        <p className="bg-blue-400 rounded-full text-xs p-2 text-white">SpA</p>
                                        <p className="text-center text-xs my-2 font-semibold">{pokemon.stats[3].base_stat}</p>
                                    </div>

                                    <div className="rounded-full bg-pokeball-black/10 p-1">
                                        <p className="bg-green-400 rounded-full text-xs p-2 text-white">SpD</p>
                                        <p className="text-center text-xs my-2 font-semibold">{pokemon.stats[4].base_stat}</p>
                                    </div>

                                    <div className="rounded-full bg-pokeball-black/10 p-1">
                                        <p className="bg-pink-400 rounded-full text-xs p-2 text-white">SPD</p>
                                        <p className="text-center text-xs my-2 font-semibold">{pokemon.stats[5].base_stat}</p>
                                    </div>

                                    <div className="rounded-full bg-pokeball-black/10 p-1">
                                        <p className="bg-black rounded-full text-xs p-2 text-white">TOT</p>
                                        <p className="text-center text-xs my-2 font-semibold">??</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-8/12 bg-pokeball-red">
                        <p>{pokemon.name}</p>
                        <img src={pokemon.sprites.front_default} alt="" />
                    </div>
                </div>  
            </AppLayout>
        );
    }
}
export default Show ;