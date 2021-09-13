const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ObjectId = Schema.ObjectId;

const Contest = new Schema({
  id: ObjectId,

  // DESCRIPTION:
  title: {type: String, required: true} ,

  short_description: {type: String} ,
  long_description:  {type: String} ,

  // TIMELINE:
  submission_start_date:  {type: Date, required: true} ,
  submission_end_date:    {type: Date, required: true} ,

  pre_judging_qa_start_date:  {type: Date, required: false} ,
  pre_judging_qa_end_date:    {type: Date, required: false} ,

  judging_start_date:  {type: Date, required: false} ,
  judging_end_date:    {type: Date, required: false} ,

  results_announcement:  {type: Date, required: false} ,

  post_iteration_start_date:  {type: Date, required: false} ,
  post_iteration_end_date:    {type: Date, required: false} ,

  date:  {type: Date,   default: Date.now },

  // USERS
  admins: {type: [String]} ,
  moderators: {type: [String]} ,
  contestants: {type: [String]} ,
  users: {type: [String]}

});

module.exports = mongoose.model('contests', Contest)
