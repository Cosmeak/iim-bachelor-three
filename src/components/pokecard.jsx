const Pokecard = ({ pokemon }) => {
	return (
		<div className="border rounded-lg h-full p-4 bg-pokeball-white/50 backdrop-blur-lg">
			<img src={pokemon.sprites.front_default} />
			<p className="text-center text-xl">{pokemon.name}</p>
			<a href={"/pokedex/"+pokemon.id}> show results</a>
		</div>
	);
};

export default Pokecard;