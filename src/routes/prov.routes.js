const { Router } = require('express');
const router = Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'src/public/provs');
    },
    filename: (req, file, cb) => {
      let nombre = new Date().getTime() + '.jpg';
      cb(null, nombre);
    }
  });
  

const { renderFormProv, createNewProv, renderLoginProv } = require('../controllers/prov.controller');

//Nuevo proveedor
router.get('/new_p', renderFormProv);

const upload = multer({ storage: storage });


router.post('/new_proveedor', upload.single('foto'), createNewProv);

//Ingresar
router.get('/loginP', renderLoginProv);
 

module.exports = router;