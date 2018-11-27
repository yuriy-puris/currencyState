const express = require('express')
const cors = require('cors')

const app = express()


// use modules
app.use(cors({
  origin:['http://localhost:8080'],
  methods:['GET','POST'],
  credentials: true
}))


module.exports = app