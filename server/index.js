const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')
const path = require('path')

const utils = require('./utils')

const app = express()

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../dist')))

app.use(cors())

app.post('/items/:id', (req, res) => {
  let rating = req.body.rating
  let id = req.params.id
  let resp = utils.write(id, rating)
  if (resp) return res.send(resp)
  return res.status(500).send('could not write result')
})

app.get('/items', (req, res) => {
  let amt = parseInt(req.query.amt) || 20
  let page = parseInt(req.query.page) || 1
  let resp = utils.read(amt, page)
  if (resp) return res.send(resp)
  return res.status(500).send('could not read results')
})

app.listen('3000', (err) => {
  if (err) {
    console.log('there was a problem starting the server')
  } else {
    console.log('server listening port 3000')
  }
})
