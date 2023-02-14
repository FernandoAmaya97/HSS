const {Router} =  require('express');
const router = Router();

const { renderIndex, renderAbout, renderLogin } = require('../controllers/index.controller');

router.get('/', renderIndex);

router.get('/about', renderAbout);

router.get('/login', renderLogin);

module.exports = router;