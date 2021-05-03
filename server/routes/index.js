const router = require('express').Router()
const userController = require('../controllers/userController')
const barangController = require('../controllers/barangController');
const authenticate = require('../middlewares/authenticate');

router.post('/login', userController.login)
router.post('/register', userController.register);

router.use(authenticate)
router.get('/barang', barangController.getBarang)
router.get("/barang/:id", barangController.getBarangById);
router.post("/barang", barangController.createBarang);
router.put("/barang/:id", barangController.updateBarang);
router.delete("/barang/:id", barangController.deleteBarang);


module.exports = router