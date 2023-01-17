const { getAllGames, getGamesByName, getGameById, createGame } = require('../controllers/videoGamesControllers')

const getAll = async (req, res) => {
    const { name } = req.query
    try {
        const results = name ? getGamesByName(name) : getAllGames()

        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getById = async (req, res) => {
    const { id } = req.query
    try {
        const results = await getGameById(id)

        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const createNewGame = async (props) => {
    try {
        createGame(props)
        res.status(201).send({message: 'Success!'})
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}

module.exports = { getAll, getById, createNewGame }