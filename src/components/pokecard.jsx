import { useEffect } from "react";

const Pokecard = ({ pokemon }) => {
	
	useEffect(() => {
		console.log(pokemon)
	}, []);

	return (
		<div className="rounded-lg h-[180px] p-4 bg-pokeball-white drop-shadow-lg relative flex flex-col justify-center items-center">
			<div className="absolute translate-1/2 -top-16 w-1/3">
				<img src={pokemon.sprites.other.home.front_default} />
			</div>

			<div className="text-center">
				<p className="capitalize text-xl font-medium">{pokemon.name}</p>
				<a href={"/pokedex/" + pokemon.id}> show results</a>
			</div>
		</div>
	);
};

export default Pokecard;