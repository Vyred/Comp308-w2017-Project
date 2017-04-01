let mongoose = require('mongoose');

// create a model class
let surveysSchema = mongoose.Schema({
    name: String,
    questions: Number,
    creator: String
},
{
  collection: "surveys"
});

module.exports = mongoose.model('surveys', surveysSchema);
