const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    minLength: '3',
    maxLength: '30'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message
