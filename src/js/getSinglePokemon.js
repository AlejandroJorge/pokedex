async function getSinglePokemon(identifier) {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  return fetch(url + identifier).then((response) => response.json());
}

export default getSinglePokemon;
