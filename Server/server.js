const express = require("express")
const app = express()
const cors = require('cors')
app.use(cors());

require("dotenv").config()
app.use(express.json())
const PORT = process.env.PORT || 8000 
app.listen(PORT,()=>{
    console.log(`App is listening on PORT Number ${PORT}`)
})

const{ route }= require("./Routes/route")
app.use('/app/v1',route)

// Database Integration
const {database} = require('./Config/database')
database()
