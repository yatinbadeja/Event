const mongoose = require("mongoose")
require("dotenv").config()

const database = () => {
    try {
        const connection = mongoose.connect(process.env.MONGODB_URL)
        if (connection) {
            console.log("Database Connection is Established")
        }
        else {
            console.log("Database Connection is not Established")
        }
    }
    catch(error){
        console.log(error.message)
    }
}

module.exports = { database }