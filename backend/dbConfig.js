const mongoose = require("mongoose");

const connectDB = async() =>{
    mongoose.connection.on('connected',()=>console.log("database connected"))
    await mongoose.connect(`${process.env.MONGO_URI_PRODUCTION}`)
}
module.exports = connectDB
