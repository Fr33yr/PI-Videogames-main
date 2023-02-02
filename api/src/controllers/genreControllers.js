const { Genre } = require('../db')
const axios = require('axios')
const { API_KEY } = process.env

const getApiGenres = async () => {
    const allGenres = await Genre.findAll()
    if (!allGenres.length) {
        const genresAPI = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        const genres = genresAPI.data.results

        Genre.bulkCreate(genres.map(p => ({
            name: p.name
        })))
    }
}

const getAllGenres = async () => {
    const allGenres = await Genre.findAll()
    return allGenres
}

const createGenre = async (name) => {
    try {
        const genre = await Genre.create({
            name
        })
    
        return genre   
    } catch (error) {
        return error
    }
}

module.exports = { getAllGenres, getApiGenres, createGenre }