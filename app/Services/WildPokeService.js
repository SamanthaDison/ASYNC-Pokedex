import { ProxyState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"
import { wildAPIPokemon } from "./AxiosService.js"

class WildPokeService {
    async getAllWildPoke() {
        const res = await wildAPIPokemon.get('')
        console.log(res.data.results)
        ProxyState.wildPokemon = res.data.results

    }
}

export const wildPokeService = new WildPokeService()