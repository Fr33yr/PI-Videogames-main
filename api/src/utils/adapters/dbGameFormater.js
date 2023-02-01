const dbGameFormater = (obj) => {
    let platforms = obj.platforms && obj.platforms.map(p => p.platform.name)
    let genres = obj.genres && obj.genres.map(g => g.name)
    return {
        id: obj.id,
        name: obj.name,
        description: obj.description,
        releasedDate: obj.releaseDate,
        image: obj.image,
        rating: obj.rating,
        platforms: platforms,
        genres: genres
    }
}

module.exports = { dbGameFormater }