import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemons, startLoudingPokemons } from "./pokemonSlice"

// const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset='

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoudingPokemons())

        // TODO: hacer la petición https
        // const resp = await fetch(`${baseUrl}${page * 10}`)
        // const data = await resp.json()
        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)

        // dispatch(setPokemons({pokemons: data.results, page: page + 1}))
    }
} 