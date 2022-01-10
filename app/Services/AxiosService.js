
export const wildAPIPokemon = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    timeout: 8000
})

export const caughtSandboxPokemon = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/sammid/pokemon',
    timeout: 8000
})