const { getAllPlatforms } = require('../controllers/plataformContollers')

const Allplataforms = async (req, res) => {
    try {
        const results = await getAllPlatforms()

        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { Allplataforms }