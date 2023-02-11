const { Router } = require('express');
const router = Router();

const { renderFormProv, createNewProv } = require('../controllers/prov.controller');

//Nuevo proveedor
router.get('/new_p', renderFormProv);

router.post('/new_proveedor', createNewProv);

 

module.exports = router;