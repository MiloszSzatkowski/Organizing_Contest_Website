const mongoose = require('mongoose')

// mongoose
//     .connect('mongodb://127.0.0.1:27017/contest', { useNewUrlParser: true })
//     .catch(e => {
//         console.error('Connection error', e.message)
//     })

mongoose.connect('mongodb://localhost/contest', { useNewUrlParser: true , useUnifiedTopology: true })

const db = mongoose.connection

module.exports = db
