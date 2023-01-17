const { Genre } = require('../db')
const axios = require('axios')
const { API_KEY } = process.env()

const getApiGenres = async () => {
    const genresApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)

    genresApi.forEach(async (g) => {
        await Genre.findOrCreate({
            where: {
                name: g.name
            }
        })
    })
}

const getAllGenres = async () => {
    const allGenres = await Genre.findAll()
    return allGenres
}

module.exports = { getAllGenres, getApiGenres }