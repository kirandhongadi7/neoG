const mongoose = require("mongoose")

require("dotenv").config()
const mongoUri = process.env.MONGO_URI

const initializeDatabase = async () =>{
    await mongoose.connect(mongoUri).then(() =>{
        console.log("Successfully Connected to DB");
        
    }).catch((e) =>{
        console.log("Failed to connect DB ", e);
        
    })
}
module.exports  = {initializeDatabase}