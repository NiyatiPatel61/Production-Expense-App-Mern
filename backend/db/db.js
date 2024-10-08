const mongoose = require('mongoose');
const colors = require('colors')
const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`${'Db Connected'}`.bgCyan.white)
    } catch (error) {
        console.log(`${'DB Connection Error'}`.bgRed);
    }
}

module.exports = {db}