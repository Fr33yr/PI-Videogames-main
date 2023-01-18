const { Plaraform } = require('../db')
const { API_KEY } = process.env
const axios = require('axios')

const getApiPlataforms = async () => {
    axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
    .then(res => Plaraform.bulkCreate(res.data.results.map(e => (
        {name: e.name}
    ))))
}

const getAllPlataforms = async () => {
    const allPlataforms = await Plaraform.findAll()
    return allPlataforms
}

module.exports = { getAllPlataforms, getApiPlataforms }