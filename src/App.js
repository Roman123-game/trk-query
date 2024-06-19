import * as React from 'react'
import { useGetPokemonByNameQuery } from './services/pokemon'

export default function App() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery()
  console.log(data)
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {data.results.map(dat => (
            <p className='data' key={dat.name}>
              <h3  >{dat.name}</h3>
              {/* <img src={dat.sprites.front_shiny} alt={data.species.name} /> */}
            </p>
          ))}

        </>
      ) : null}
    </div>
  )
}