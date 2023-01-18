const { Platform } = require('../db')
const { API_KEY } = process.env
const axios = require('axios')

const getApiPlataforms = async () => {
    try {
        const allPlataforms = await Platform.findAll()
        if (!allPlataforms.length) {
            const platformsAPI = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
            const platforms = platformsAPI.data.results

            Platform.bulkCreate(platforms.map(p => ({
                name: p.name
            })))
        }
    } catch (error) {
        console.log(error);
    }
}

const getAllPlatforms = async () => {
    try {
        const allPlataforms = await Platform.findAll()
        return allPlataforms
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getAllPlatforms, getApiPlataforms }