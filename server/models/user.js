const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  messages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message'
  }
  ]
})

const User = mongoose.model('User', messageSchema)

module.exports = User
