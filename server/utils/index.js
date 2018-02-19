const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')
var db = require('diskdb')

const DATA_PATH = path.resolve(__dirname, '..', 'data')

db = db.connect(DATA_PATH, ['items']);

function read (amt, page) {
  const result = db['items'].find()
  let start = (page * amt) - amt
  let end = (page * amt)
  let entities = result.slice(start, end)
  return entities
}

function readRating (amt, page) {
  let result = db['items'].find().filter(item => {
    return item.rating !== 'like';
  })
  let start = (page * amt) - amt
  let end = (page * amt)
  let entities = result.slice(start, end)
  return entities
}

function write (id, rating) {
  let query = {uuid: id}
  let update = {rating}
  db.items.update(query, update)
  let item = db.items.findOne({uuid: parseInt(id)})
  return item
}

module.exports = {
  write,
  read,
  readRating
}
