const express = require('express')
const router = express.Router()
const {payProducts, getCarts} = require('./cart.controller')

router.get('/', getCarts)
router.post('/pay', payProducts)



module.exports = router;
