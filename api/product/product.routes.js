const express = require('express')
const router = express.Router()
const {getProducts,getProduct,deleteProduct,saveProduct, payProducts, getCarts} = require('./product.controller')

router.get('/', getProducts)
router.get('/:productId', getProduct)
router.delete('/:productId', deleteProduct)
router.post('/', saveProduct)
router.put('/:productId', saveProduct)


module.exports = router;
