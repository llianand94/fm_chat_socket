const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')
const config = require('../config').db[process.env.NODE_ENV || 'development']

const baseName = path.basename(__filename)

mongoose.connect(`mongodb://${config}:${config.port}/${config.dbName}`)

const db = {}

fs.readFileSync(__dirname)
  .filter(file => file !== baseName && /.js/.test(file))
  .forEach(file => {
    const model = require(file)
    db[model.modelName] = model
  })

module.exports = db
