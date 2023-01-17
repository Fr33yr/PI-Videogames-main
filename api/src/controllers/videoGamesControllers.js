const { Videogame, Genre, Plataforms } = require('../db')
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
        const nPages = 5
        let urls = []
        for (let i = 1; i < nPages + 1; i++) {
            urls.push(`https://api.rawg.io/api/games?key=${API_KEY}=${i}`)
        }

        const promiseUrls = urls.map((url) => axios.get(url))
        const apiGames = []
        Promise.all(promiseUrls).then((responses) => {
            responses.forEach(async (response) => {
                apiGames.push(response.data.results)
            }
            )
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
    const apiData = await getAPIGames()
    const dbData = await getDbGames()

    return apiData.concat(dbData).find(game => game.name.includes(name))
}

const getGameById = async (id) => {
    const game = await axios.get(`https://api.rawg.io/api/games/${id}?key=aee41211e4cb421b803adaa84d40cf3e`)

    return game.data
}

const createGame = async (props) => {
    const { name, genres, description, releaseDate,
        rating, plataforms, created
    } = props

    try {
        const newGame = await Videogame.create({
            name, description, releaseDate, image,
            rating: rating || 1, created
        })

        // relacion entre las tablas
        const dbGenre = await Genre.findAll({
            where: {name: genres}
        })

        const dbPlataforms = await Plataforms.findAll({
            where: {name: plataforms}
        })

        newGame.addGenres(dbGenre)
        newGame.addPlataforms(dbPlataforms)

        res.status(201).json({message: "Success!"})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { getAllGames, getGameById, getGamesByName, createGame }