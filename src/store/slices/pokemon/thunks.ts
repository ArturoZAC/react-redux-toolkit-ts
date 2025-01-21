import { pokemonApi } from "../../../api/pokemonApi";
import { PokemonData, Result } from "../../../interface/pokemon.interface";
import { AppDispatch, RootState } from "../../store";
import { setPokemon, startLoadingPokemons } from "./pokemonSlice"

export const getPokemon = ( page: number = 0) => {
  return async(dispatch: AppDispatch, getState: () => RootState) => {
    dispatch( startLoadingPokemons() );

    const { data }: { data: PokemonData} = await pokemonApi.get(`/pokemon/?limit=10&offset=${ page * 10}`);
    dispatch( setPokemon({ pokemons: data?.results, page: page + 1 }) );
  }
}