import { wildPokeService } from "../Services/WildPokeService.js";
import { ProxyState } from "../AppState.js";
import { wildAPIPokemon } from "../Services/AxiosService.js";

async function _getAllWildPoke() {
    try {
        await wildPokeService.getAllWildPoke()
    } catch (error) {
        console.log('error')


    }
}

function _drawAllPoke() {
    const wildPoke = ProxyState.wildPokemon
    let template = ''
    wildPoke.forEach(p => template += `<li>${p.name}</li>`)
    document.getElementById('wild-poke').innerHTML = template
}


export class WildPokeController {
    constructor() {
        ProxyState.on('wildPokemon', _drawAllPoke)

        _getAllWildPoke()
    }
}