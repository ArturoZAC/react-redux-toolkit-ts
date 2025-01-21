import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Result } from '../../../interface/pokemon.interface';

interface PokemonState {
  page: number;
  pokemons: Result[];
  isLoading?: boolean;
}

const initialState: PokemonState = {
  page: 0,
  pokemons: [],
  isLoading: false
}


export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemon: ( state, action: PayloadAction<PokemonState>) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    }
  }
});

export const { startLoadingPokemons, setPokemon } = pokemonSlice.actions;