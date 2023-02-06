const { getAllGenres, createGenre } = require('../controllers/genreControllers')

const Allgenres = async (req, res) => {
    try {
        const results = await getAllGenres()

        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const createNewGenre = async (req, res) =>{
    const {name} = req.body
    try {
        await createGenre(name)
        res.status(200).json({message: 'genre created!'})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { Allgenres, createNewGenre }