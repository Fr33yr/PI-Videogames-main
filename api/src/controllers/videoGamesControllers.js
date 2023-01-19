const { Videogame, Genre, Platform } = require('../db')
const axios = require('axios')
const { Op } = require('sequelize')
const { API_KEY } = process.env

const getDbGames = async () => {
    try {
        const allgames = await Videogame.findAll()
        return allgames
    } catch (error) {
        console.log(error)
    }
}

const getAPIGames = async () => {
    try {
        let apiGames = []
        const url1 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=1&page_size=50`)
        const url2 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2&page_size=50`)
        const url3 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3&page_size=50`)

        apiGames = url1.data.results && url1.data.results.concat(
            url2.data.results,
            url3.data.results
        )

        // clear api data
        apiGames = apiGames.map((game) => {
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

        return apiGames
    } catch (error) {
        console.log(error)
    }
}

const getAllGames = async () => {
    const apiData = await getAPIGames()
    const dbData = await getDbGames()

    return apiData.concat(dbData)
}

const getGamesByName = async (name) => {
    const allGames = await getAllGames()
    
    return allGames.filter((game) => game.name.toLowerCase().includes(name.toLowerCase()))
}

const getGameById = async (id) => {
    const game = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)

    return game.data
}

const createGame = async (props) => {
    const { name, genres, description, releaseDate,
        rating, platforms, created, image
    } = props
console.log(props);
    try {
        const newGame = await Videogame.create({
            name, description, releaseDate, image,
            rating: rating || 1, created
        })

        // relacion entre las tablas
        const genreOptions = []
        for(let i = 0; i < genres.length; i++){
            genreOptions.push({
                id: genres[i]
            })
        }
        const dbGenre = await Genre.findAll({
            where: { [Op.or]: genreOptions },
            include: Videogame
        })

        const platformOptions = []
        for(let i = 0; i < platforms.length; i++){
            platformOptions.push({
                id: platforms[i]
            })
        }
        const dbPlatforms = await Platform.findAll({
            where: { [Op.or]: platformOptions },
            include: Videogame
        })

        newGame.addGenres(dbGenre)
        newGame.addPlatforms(dbPlatforms)
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getAllGames, getGameById, getGamesByName, createGame, getAPIGames }