const { getAllGames, getGamesByName, getGameById, createGame } = require('../controllers/videoGamesControllers')
const { Videogame } = require('../db')

const getAll = async (req, res) => {
    const { name } = req.query

    console.log(name);
    try {
        if (name) {
            const results = await getGamesByName(name)

            res.status(200).json(results)
        } else {
            const results = await getAllGames()

            res.status(200).json(results)
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getById = async (req, res) => {
    const { id } = req.params

    try {
        const results = await getGameById(id)

        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const createNewGame = async (req, res) => {
    createGame(req.body)
    .then(res => {
        if(res.errors[0].message === 'name must be unique'){
            throw new Error('name must be unique')
        }
        res.status(201).json({message: 'Success!'})
    })
    .catch(err => {
        res.status(400).json({error: err.message})
    })
}

module.exports = { getAll, getById, createNewGame }