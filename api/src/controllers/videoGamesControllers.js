const { Videogame, Genre, Platform } = require('../db')
const axios = require('axios')
const { Op } = require('sequelize')
const { dataFormatter } = require('../utils/dataFormater')
const { API_KEY } = process.env

const getDbGames = async () => {
    try {
        const allgames = await Videogame.findAll({
            include: [Genre, Platform]
        })
        return allgames
    } catch (error) {
        console.log(error)
    }
}

const getAPIGames = async () => {
    try {

        const urls = [
            `https://api.rawg.io/api/games?key=${API_KEY}&page=1&page_size=40`,
            `https://api.rawg.io/api/games?key=${API_KEY}&page=2&page_size=40`,
            `https://api.rawg.io/api/games?key=${API_KEY}&page=3&page_size=20`
        ]

        const response = await Promise.all(urls.map((url) => axios.get(url)))
        .then(res => res.map(obj => obj.data.results).flat())
        //.then(res => res.reduce( (acc, element) => acc = [ ...acc, ...element.data.results], []))

        return dataFormatter(response)
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

    try {
        const newGame = await Videogame.create({
            name, description, releaseDate, image,
            rating: rating || 1, created
        })

        // relacion entre las tablas
        let dbGenre = await Genre.findAll({
            where: {name: genres}
        })

        let dbPlatforms = await Platform.findAll({
            where: {name: platforms}
        })

        newGame.addGenres(dbGenre)
        newGame.addPlatforms(dbPlatforms)
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getAllGames, getGameById, getGamesByName, createGame, getAPIGames }