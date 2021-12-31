const express = require("express")
const axios = require("axios")


const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

//Express community: https://gitter.im/expressjs/express 

const events = []


// app.get("/posts", (req, res) => {
//           res.send(posts)
// })


app.post("/events", (req, res) => {
          const event = req.body;

          events.push(event)

          axios.post("http://localhost:4000/events", event)
          axios.post("http://localhost:4001/events", event)
          axios.post("http://localhost:4002/events", event)
          axios.post("http://localhost:4003/events", event)

          res.send( { status: "OK" } )
})


app.get("/events", (req, res) => {
          res.send(events)
})


app.listen(4005, () => {
          console.log("Server running on port: 4005")
})