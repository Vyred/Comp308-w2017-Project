//surveys can have multiples of this set: creator, questionTable[], name of mulipleChoice, start date, end date, enabled, number of respondents
//questions are sets of: question, mutlipleChoices[]
//multipleChoices are sets of: possibleResponses[],
//possibleResponses are sets of: response, timesSelected   

let mongoose = require('mongoose');
let Schema = mongoose.Schema; //alias for mongoose Schema
// create a model class
let multipleChoicesSchema = new Schema({
    choice: String,
    surveyId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'surveys'
    }],
    timesChosen: {
        type: Number,
        default: 0
    }
},
    {
        collection: "multipleChoices"
    });

module.exports = mongoose.model('multipleChoices', multipleChoicesSchema);
