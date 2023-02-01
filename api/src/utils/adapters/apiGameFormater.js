const apiGameFormater = (obj) => {
    let platforms = obj.platforms && obj.platforms.map(p => p.platform)
    return {
        id: obj.id,
        name: obj.name,
        description: obj.description,
        releasedDate: obj.released,
        image: obj.background_image,
        rating: obj.rating,
        platforms: platforms,
        genres: obj.genres
    }
}

module.exports = { apiGameFormater }