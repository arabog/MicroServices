const express = require("express")
const axios = require("axios")


const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

//Express community: https://gitter.im/expressjs/express 

const posts = {}


app.get("/posts", (req, res) => {
          res.send(posts)
})


app.post("/events", (req, res) => {
          const event = req.body;

          axios.post("http://localhost:4000/events", event)
          axios.post("http://localhost:4001/events", event)
          axios.post("http://localhost:4002/events", event)

          res.status( { status: "OK" } )
})


app.listen(4005, () => {
          console.log("Server running on port: 4005")
})