import allPokemon from "./fetchPokemon";

const listOfPokemonNames = [];

allPokemon.map((pokemon) => {
  listOfPokemonNames.push(pokemon.name);
});

export default listOfPokemonNames;
