const productService = require('./product.service')

async function getProducts(req, res) {
    try {
        const products = await productService.query()
        res.send(products)
    } catch {
        res.status(500).send({ err: 'Failed to get products' })
    }
}

async function getProduct(req, res) {
    try {
        const product = await productService.getById(req.params.productId)
        res.send(product)
    } catch (err) {
        res.status(500).send({ err: 'Failed to get product' })
    }
}

async function deleteProduct(req, res) {
    try {
        await productService.remove(req.params.productId)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {1
        res.status(500).send({ err: 'Failed to delete product' })
    }
}

async function saveProduct(req, res) {
    try {
        const product = req.body

        const savedProduct = await productService.save(product)
        res.send(savedProduct)
    } catch (err) {
        res.status(500).send({ err: 'Failed to dave product' })
    }
}

async function payProducts(req,res){
    try {
        const payCart = req.body
        const saveCart = await productService.payProducts(payCart);
        res.send(saveCart);
        
    } catch (err) {
        res.status(500).send({ err: 'Failed to dave product' })
    }
}

async function getCarts(req,res){
    try {
        const carts = await productService.queryCarts()
        res.send(carts)
    } catch {
        res.status(500).send({ err: 'Failed to get carts' })
    }
}

module.exports = {
    getProducts,
    getProduct,
    deleteProduct,
    saveProduct,
    payProducts,
    getCarts
}