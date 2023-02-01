const dbDataFormater = (arr) => {
    let formatedData = arr.map((game) => {
        const genres = game.genres && game.genres.map((g) => g.name)
        const platform = game.platforms && game.platforms.map((p) => p.name)

        return {
            id: game.id,
            name: game.name,
            image: game.image,
            genres: genres,
            platform: platform,
            rating: game.rating,
            released: game.releaseDate,
            created: game.created,
        }
    })

    return formatedData
}

module.exports = { dbDataFormater }