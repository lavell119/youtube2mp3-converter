//required packages
const express = require("express")
const fetch = require("node-fetch")
require("dotenv").config()


//create thr express server
const app = express()

//server port number (will run on .env PORT when we deploy it to heroku and localhost:3000 when we run it locally)
const PORT = process.env.PORT || 3000

//set template engine
app.set("view engine", "ejs")
app.use(express.static("public"))

//needed to parse html data for POST request
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.post("/", (req, res) => {
    
})



//start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})


