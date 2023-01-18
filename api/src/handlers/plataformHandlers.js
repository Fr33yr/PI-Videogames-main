const { getAllPlataforms } = require('../controllers/plataformContollers')

const Allplataforms = async (req, res) => {
    try {
        const results = await getAllPlataforms()

        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { Allplataforms }