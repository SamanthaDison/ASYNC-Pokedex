export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.id = data.id
        this.weight = data.weight
        this.height = data.height
        this.types = data.types.join()
        this.imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.id}.svg`
    }
}