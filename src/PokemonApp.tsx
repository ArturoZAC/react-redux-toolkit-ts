import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/store"
import { getPokemon } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {

  const dispatch = useAppDispatch();
  const { page , pokemons , isLoading } = useAppSelector( state => state.pokemons);

  useEffect(() => {
    dispatch( getPokemon() );
  }, [])
  

  return (
    <>
      <h1>PokemonApp</h1>    
      <hr />
      <span>Loading: { isLoading ? 'true': 'false'}</span>

      <ul>
        {
          pokemons?.map( ({name}) => (
            <li key={ name }> { name } </li>
          ))
        }
      </ul>
      <button
        disabled={ isLoading }
        onClick={ () => {
          dispatch( getPokemon( page ))
        }}
      >
        Next
      </button>
    </>
  )
}
