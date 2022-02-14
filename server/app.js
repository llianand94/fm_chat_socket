const express = require('express')
const cors = require('cors')
const { Message } = require('./models')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', async (req, res, next) => {
  try {
    const allMessages = await Message.find()
    res.send({ data: allMessages })
  } catch (error) {
    next(error)
  }
})

module.exports = app
