const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/logins"

const connectToMongo = () =>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to MongoDb succesfully");
    })
}


module.exports = connectToMongo;