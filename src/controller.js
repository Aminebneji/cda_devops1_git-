const express = require('express')
const app = express()
const { greet } = require('../service/greetings')
const { bye } = require('../service/greetings')

app.get('/hello/:name', (req, res) => {
  res.send(greet(req.params.name))
})
app.get('/goodbye/:name', (req, res) => {
  res.send(bye(req.params.name))
})

module.exports = app
