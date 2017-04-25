//survey can have multiples of this set: creator, questionTable[], name of survey, start date, end date, enabled, number of respondents
//questions are sets of: question, mutlipleChoices[]
//multipleChoices are sets of: possibleResponses[],
//possibleResponses are sets of: response, timesSelected   

let mongoose = require('mongoose');
let multipleChoicesModel = require('./multiple.choices');
let multipleChoices = multipleChoicesModel.MultipleChoice;
let Schema = mongoose.Schema; //alias for mongoose Schema
// create a model class
let questionsSchema = new Schema({
    question: String,
    surveyId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'surveys'
    }],
    multipleChoice: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'multipleChoices'
    }]
},
    {
        collection: "questions"
    });

module.exports = mongoose.model('questions', questionsSchema);
