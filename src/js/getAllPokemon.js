import getSinglePokemon from "./getSinglePokemon";

async function getAllPokemon(amount) {
  const dataArray = [];
  for (let i = 1; i <= amount; i++) {
    dataArray.push(getSinglePokemon(i));
  }
  return Promise.all(dataArray);
}

export default getAllPokemon;
