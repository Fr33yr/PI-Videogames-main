const { Router } = require('express');
const {Allgenres} = require('../handlers/genreHandlers')
const {Allplataforms} = require('../handlers/plataformHandlers')
const { getAll, getById, createNewGame } = require('../handlers/videoGamesHandlers')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/games', getAll)
router.post('/games', createNewGame)
router.get('/games/:id', getById)

router.get('/genres', Allgenres)

router.get('/platforms', Allplataforms)

module.exports = router;
