const express = require("express")
const { randomBytes } = require("crypto")

const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

const commentsByPostId = {}


app.get("/posts/:id/comments", (req, res) => {
          res.send(commentsByPostId[req.params.id] || [])
})


app.post("/posts/:id/comments", (req, res) => {
          const commentId = randomBytes(4).toString("hex")

          const { content } = req.body;

          const comments = commentsByPostId[req.params.id] || []

          comments.push( { id: commentId, content } )

          commentsByPostId[req.params.id] = comments

          res.status(201).send(comments)

})

/*
console.log(commentsByPostId):

{
          '123': [
                    { id: '5d34a8bc', content: 'I am a comment2!' },
                    { id: 'bafdb6b6', content: 'I am a comment1!' }
          ]
}

*/ 

app.listen(4001, () => {
          console.log("Server running on port: 4001")
})