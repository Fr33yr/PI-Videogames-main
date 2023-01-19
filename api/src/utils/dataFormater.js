const dataFormatter = (arr) => {
    let formatedData = arr.map((game) => {
        const platforms = game.platforms.map((p) => p.platform.name)
        return {
            id: game.id,
            name: game.name,
            image: game.background_image,
            genres: game.genres,
            platforms: platforms,
            rating: game.rating,
            released: game.released,
        }
    })

    return formatedData
}

module.exports = {dataFormatter}