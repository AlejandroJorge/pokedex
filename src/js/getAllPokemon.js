import getPokemonById from "./getSinglePokemonById";

async function getAllPokemon(amount) {
  const dataArray = [];
  for (let i = 1; i <= amount; i++) {
    const data = await getPokemonById(i);
    dataArray.push(data);
  }
  return dataArray;
}

export default getAllPokemon;
