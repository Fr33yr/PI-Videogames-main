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

module.exports = { getAllGenres, getApiGenres }