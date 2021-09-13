const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ObjectId = Schema.ObjectId;

const Submission = new Schema({

  id: ObjectId,

  parent_contest: {type: String, required: true},

  submission_body: {type: [String], required: true },

  date:  {type: Date,   default: Date.now },

});

module.exports = mongoose.model('submissions', Submission)
