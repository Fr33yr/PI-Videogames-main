const { getAllGenres } = require('../controllers/genreControllers')

const Allgenres = async (req, res) => {
    try {
        const results = await getAllGenres()

        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { Allgenres }