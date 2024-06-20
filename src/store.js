import { createSlice, configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from './services/pokemon'
import { postsApi } from './services/posts'
import { useGetPokemonByNameQuery } from './services/pokemon'



const Func =( )=> {
  const { data} = useGetPokemonByNameQuery (1)

const counterSlice = createSlice({
  name: 'name_state',
  initialState: {
    value: data.name
  },

})


}


export const store = configureStore({


  reducer: {
    // Add the generated reducer as a specific top-level slice
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [pokemonApi.reducer]: Func.counterSlice.reducer
  //  [postsApi.reducerPath]: postsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)