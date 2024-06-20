import  React,{useState} from 'react'
import { useGetPokemonByNameQuery } from './services/pokemon'

// import { useGetpostsByNameQuery }  from './services/posts'


export default function App() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery (1)
  console.log(data,"data")







 var emptyArr = []

const dataParse = JSON.stringify(data)
emptyArr.push(data)

console.log(dataParse, 'data parse')
console.log(emptyArr, "empty arr")

const [name, setName] = useState("")

const addName =(data)=>{
  setName(data.name)
}


  // let dataFromApi = emptyArr.push(data)
  // console.log(dataFromApi,typeof(dataFromApi))
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
          {emptyArr.map(dat => (
            <div  style={{color:`${dat.eye_color || 'black'}`,border:'1px solid gray',borderRadius:'15px', background: 'white', height: `${dat.height}px`,width: `${dat.height}px` ,textAlign: 'center'}} key={dat.name}>
              <h3  >{dat.name}</h3>
              <h3>{dat.birth_year}</h3>
              {/* <img src={dat.sprites.front_shiny} alt={data.species.name} /> */}
            </div>
))}

        </>
      ) : null}
    </div>
  )
}