import * as React from 'react'
// import { useGetPokemonByNameQuery } from './services/pokemon'
import { useGetpostsByNameQuery }  from './services/posts'


export default function App() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetpostsByNameQuery("")
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
          {data.map(dat => (
            <div className='data' key={dat.id}>
              <h3  >{dat.body}</h3>
              {/* <img src={dat.sprites.front_shiny} alt={data.species.name} /> */}
            </div>
          ))}

        </>
      ) : null}
    </div>
  )
}