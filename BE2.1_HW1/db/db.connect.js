const mongoose = require("mongoose")
require("dotenv").config()
const mongoUri = process.env.MONGO_URI

const initializeDatabase = async () =>{

    await mongoose.connect(mongoUri).then(() =>{
        console.log("Connected to DB");
        
    }).catch((e) =>{
        console.log("Error while connecting",e);
    })

}

module.exports = {initializeDatabase}