import getAllPokemon from "./getAllPokemon";
import { amountOfFetchedPokemon } from "../appconfig";

const allPokemon = await getAllPokemon(amountOfFetchedPokemon);

export default allPokemon;
