const { ObjectId } = require('mongodb')
const dbService = require('../../services/db.service')


module.exports = {
    query,
    getById,
    remove,
    save,
    payProducts,
    queryCarts
}

async function query() {
    try {
        const collection = await dbService.getCollection('product')
        const  products = await collection.find().toArray()
        return products
    } catch {
        console.log('err');
    }
}

async function queryCarts() {
    try {
        const collection = await dbService.getCollection('cart')
        const  carts = await collection.find().toArray()
        return carts
    } catch {
        console.log('err');
    }
}

async function getById(productId) {
    console.log('product',productId);
    try {
        const collection = await dbService.getCollection('product')
        const product = await collection.findOne({ '_id': ObjectId(productId) })
        return product
    } catch {
        console.log('err');
        throw err
    }
}

async function remove(productId) {
    try {
        const collection = await dbService.getCollection('product')
        await collection.deleteOne({ '_id': ObjectId(productId) })
    } catch (err) {
        throw err
    }
}


async function save(product) {
    if (product._id) {
        // UPDATE
        try{
            const productToUpdate = {
                _id: ObjectId(product._id),
                title: product.title,
                price: product.price,
                description: product.description,
                img: product.img
            }
            const collection = await dbService.getCollection('product')
        await collection.updateOne({ '_id': productToUpdate._id }, { $set: productToUpdate })
        return productToUpdate;
        }catch (err) {
            console.log('err');
        }
    } else {
        // CREATE
        try{
            const productToAdd = _createProduct(product)
            const collection = await dbService.getCollection('product')
            collection.insertOne(productToAdd)
            return productToAdd
        }catch (err) {
            console.log('err');
        }
    }
}



async function payProducts(payCart) {
        try{
            const collection = await dbService.getCollection('cart')
            collection.insertOne(payCart)
            return payCart
        }catch (err) {
            console.log('err');
        }
    
}


function _createProduct({ title, price, description, img }) {
    const product = {
        title,
        price,
        description,
        img,
    }
    return product
}
