const { Router } = require('express');
const { getAllGenres } = require('../controllers/genreControllers');
const { getAll, getById, createNewGame } = require('../handlers/videoGamesHandlers')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/games', getAll)
router.post('/games', createNewGame)
router.get('/games/:id', getById)

router.get('/genres', getAllGenres)

module.exports = router;
