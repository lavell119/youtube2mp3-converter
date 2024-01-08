//required packages
const express = require("express")
const fetch = require("node-fetch")
require("dotenv").config()


//create thr express server
const app = express()

//server port number (will run on .env PORT when we deploy it to heroku and localhost:3000 when we run it locally)
const PORT = process.env.PORT || 3000

//start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
