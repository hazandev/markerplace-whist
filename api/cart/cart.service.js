const { ObjectId } = require('mongodb')
const dbService = require('../../services/db.service')


module.exports = {
    payProducts,
    queryCarts
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

async function payProducts(payCart) {
        try{
            const collection = await dbService.getCollection('cart')
            collection.insertOne(payCart)
            return payCart
        }catch (err) {
            console.log('err');
        }
    
}
