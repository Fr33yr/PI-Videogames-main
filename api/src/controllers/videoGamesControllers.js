const { Videogame, Genre, Platform } = require('../db')
const axios = require('axios')
const { Op } = require('sequelize')
const { dataFormatter } = require('../utils/adapters/dataFormater')
const { dbDataFormater } = require('../utils/adapters/dbDataFormater')
const { apiGameFormater } = require('../utils/adapters/apiGameFormater')
const { API_KEY } = process.env

const getDbGames = async () => {
    try {
        const allgames = await Videogame.findAll({
            include: [Genre, Platform]
        })
        return dbDataFormater(allgames)
    } catch (error) {
        console.log(error)
    }
}

const getAPIGames = async () => {
    try {

        const urls = [
            `https://api.rawg.io/api/games?key=${API_KEY}&page=1&page_size=50`,
            `https://api.rawg.io/api/games?key=${API_KEY}&page=2&page_size=50`,
            `https://api.rawg.io/api/games?key=${API_KEY}&page=3&page_size=50`
        ]

        const response = await Promise.all(urls.map((url) => axios.get(url)))
            .then(res => res.map(obj => obj.data.results).flat())

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
    let pattern = /^\d+$/
    try {
        if (pattern.test(id)) {
            const apiGame = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
            return apiGameFormater(apiGame.data)
        } else {
            const dbGame = await Videogame.findOne({
                where: { id: id },
                include: [Genre, Platform]
            })
            return dbGame
        }
    } catch (error) {
        return error
    }
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
            where: { name: genres }
        })

        let dbPlatforms = await Platform.findAll({
            where: { name: platforms }
        })

        newGame.addGenres(dbGenre)
        newGame.addPlatforms(dbPlatforms)

        return 'exito'

    } catch (error) {
        return error
    }
}

const updateRow = async (props) =>{
    try {
        const { name, genres, description, releaseDate,
            rating, platforms, image
        } = props
    
        const game = await Videogame.findOne({
            where:{name: name},
            include: [Genre, Platform]
        })

        // relacion entre las tablas
        let dbGenre = await Genre.findAll({
            where: { name: genres }
        })

        let dbPlatforms = await Platform.findAll({
            where: { name: platforms }
        })

        game.addGenres(dbGenre)
        game.addPlatforms(dbPlatforms)
    
        game.set({
            name,
            description,
            releaseDate,
            rating,
            image
        })
    
        await game.save()
    
        return 'success!'
    } catch (error) {
        return error
    }
}

const deleteRow = async (id) =>{
    try {
        const game = await Videogame.findByPk(id)

        await game.destroy()

        return 'success!'
    } catch (error) {
        return error
    }
}

module.exports = { getAllGames, getGameById, getGamesByName, createGame, getAPIGames, updateRow, deleteRow }