const mongoose = require("mongoose")
require("dotenv").config()

const mongoURI = process.env.MONGO_URI

const initializeDatabase =  async () =>{
await mongoose.connect(mongoURI).then(() =>{
    console.log("successfully connected to DB");
    
}).catch((e) =>{
    console.log("Error while connecting DB ", e);
})
}

module.exports = {initializeDatabase}