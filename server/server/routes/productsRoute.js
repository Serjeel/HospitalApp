const express = require('express');
const router = express.Router();

const {
    getAllProducts,
    createNewProduct
} = require('../controllers/productsController');

router.get('/getAllProducts', getAllProducts);
router.post('/createNewProduct', createNewProduct);

module.exports = router;