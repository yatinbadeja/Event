const express = require("express")
const route = express.Router()

const {entry} = require("../Controller/Entry")

route.post('/create',entry)

module.exports = {route}