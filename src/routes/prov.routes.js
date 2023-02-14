const { Router } = require('express');
const router = Router();

const { renderFormProv, createNewProv, renderLoginProv } = require('../controllers/prov.controller');

//Nuevo proveedor
router.get('/new_p', renderFormProv);

router.post('/new_proveedor', createNewProv);

//Ingresar
router.get('/loginP', renderLoginProv);
 

module.exports = router;