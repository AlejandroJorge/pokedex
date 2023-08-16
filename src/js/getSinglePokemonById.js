async function getPokemonById(pokemonId) {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + pokemonId
  );
  const data = await response.json();
  return data;
}

export default getPokemonById;
