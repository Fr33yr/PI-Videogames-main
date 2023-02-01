const dataFormatter = (arr) => {
    let formatedData = arr.map((game) => {
        const platforms = game.platforms && game.platforms.map((p) => p.platform.name)
        const genres = game.genres && game.genres.map(g => g.name)
        return {
            created: false,
            id: game.id,
            name: game.name,
            image: game.background_image,
            genres: genres,
            platforms: platforms,
            rating: game.rating,
            released: game.released,
        }
    })

    return formatedData
}

module.exports = {dataFormatter}