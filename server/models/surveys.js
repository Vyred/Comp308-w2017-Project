let mongoose = require('mongoose');
//let questionsModel = require('./questions');
//let questions = questionsModel.Question;
let Schema = mongoose.Schema; //alias for mongoose Schema
// create a model class
let surveysSchema = new Schema({
  //one survey
  name: String,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date,
    default: Date.now
  },
  enabled: {
    type: Boolean,
    default: false
  },
  privacy: {
    type: String,
    default: "public"
  },
  questionsNumber: {
    type: Number,
    default: 0
  },
  respondents: {
    type: Number,
    default: 0
  },
  //within the survey there is one questiontable
  questionTable: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'questions',
    required: true
  }]
},
  {
    collection: "surveys"
  });

module.exports = mongoose.model('surveys', surveysSchema);

//survey can have multiples of this set: creator, questionTable[], name of survey, start date, end date, enabled, number of respondents
//questions are sets of: question, mutlipleChoices[]
//multipleChoices are sets of: possibleResponses[],
//possibleResponses are sets of: response, timesSelected   