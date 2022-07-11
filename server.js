const port = 9000
const express = require("express")
const server = express()
const bodyParser = require("body-parser")
const heroController = require("./controller/hero.controller")

server.use(bodyParser.urlencoded({ extended: false }))
server.set("view engine", "ejs")
server.set("views", "view")
server.use("/hero", heroController)

server.use("/", (request, response) => {
  response.send("MAIN SERVER SUCCES")
})

server.listen(port, () => {
  console.log(`server Running on port ${port}`)
})
