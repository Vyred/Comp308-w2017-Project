// modules required for routing

let mongoose = require('mongoose');
let passport = require('passport');
let moment = require('moment');
// define the user model
let UserModel = require('../models/users');
let User = UserModel.User; // alias for User Model - User object

//controllers
let userController = require('../controllers/users.controller');

// define the survey model
let survey = require('../models/surveys');
let question = require('../models/questions');
let multipleChoice = require('../models/multiple.choices');
// // create a function to check if the user is authenticated
// function requireAuth(req, res, next) {
//   // check if the user is logged in
//   if(!req.isAuthenticated()) {
//     return res.redirect('/users/login');
//   }
//   next();
// }

/* GET surveys List page. READ */
//router.get('/', userController.RequireAuth, (req, res, next) => {
module.exports.ReadSurveyList = (req, res) => {
  // find all surveys in the surveys collection
  survey.find({ creator: req.user.id }, (err, surveys) => {
    if (err) {
      console.log(err);
      res.end(err);
    }
    // survey.find((err, surveys) => {
    //   if (err) {
    //     return console.error(err);
    //   }
    else {
      res.render('survey/index', {
        title: 'Surveys',
        surveys: surveys,
        displayName: req.user.displayName
      });
    }
  });
};


//  GET the Survey Details page in order to add a new Survey
//router.get('/create',  userController.RequireAuth, (req, res, next) => {
module.exports.DisplayAdd = (req, res) => {
  res.render('survey/create', {
    title: 'Add a new Survey',
    surveys: '',
    displayName: req.user.displayName
  });
};

// POST process the Survey Details page and create a new Survey - CREATE
//router.post('/create',  userController.RequireAuth, (req, res, next) => {

module.exports.CreateSurvey = (req, res) => {
  console.log(req.body);

  ///////////////////////////////////////////////////////////////
  ///Creating The questions and multiple choice
  //This loop takes the req of the question from the body and turns
  //it into individual questions/multiple choice schema with unique ids,
  //they are predicatble so that may be a disadvantage security wise
  /////////////////////////////////////////////////////////////
  let questionsLength = parseInt(req.body.questions.length);
  let counter = 0;
  let counterQuestionSeperator = 0;
  let counterMultipleChoice = 0;
  let questionArray = [];
  let questionIds = [];
  let multipleChoiceArray = [];
  let multipleChoiceIds = [];
  let surveyId = mongoose.Types.ObjectId();
  while (counter < questionsLength) {
    //Check for separator
    if (req.body.questions[counter] == "*|`~~`|*") {
      // add the multiple choice ids to the question object

      questionArray[counterQuestionSeperator] = question({
        "_id": questionArray[counterQuestionSeperator]._id,
        "question": questionArray[counterQuestionSeperator].question,
        "surveyId": surveyId,
        "multipleChoice": multipleChoiceIds
      })
      question.create(questionArray[counterQuestionSeperator], (err, question) => {
        if (err) {
          console.log(err);
          res.end(err);
        }
      });
      //resets
      counterQuestionSeperator++;
      counterMultipleChoice = 0;
      multipleChoiceArray = [];
      multipleChoiceIds = [];
    }
    ///////////////////////////////////////////////////////////////////////////////////
    //creating the question //////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    else if (counterMultipleChoice == 0) {
      //mongoose.Types.ObjectId()
      newId = mongoose.Types.ObjectId();// mongoose.Types.ObjectId(req.body.name + req.user._id + "q" + counterQuestionSeperator + Date.now());
      questionIds[counterQuestionSeperator] = newId;
      questionArray[counterQuestionSeperator] = question({
        "_id": newId,
        "surveyId": surveyId,
        "question": req.body.questions[counter]
      });

      //counterMultipleChoice++;
    }
    /////////////////////////////////////////////////////////////////////////////////   
    //creating the Multiple Choice /////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////
    else {
      newId = mongoose.Types.ObjectId();//mongoose.Types.ObjectId(req.body.name + req.user._id + "q" + counterQuestionSeperator + "m" + counterMultipleChoice + Date.now());
      multipleChoiceIds[counterMultipleChoice] = newId;
      multipleChoiceArray[counterMultipleChoice] = multipleChoice({
        "_id": newId,
        "choice": req.body.questions[counter]
      });

      multipleChoice.create(multipleChoiceArray[counterMultipleChoice], (err, multipleChoice) => {
        if (err) {
          console.log(err);
          res.end(err);
        }
      });
      counterMultipleChoice++;
    }
    counter++;
  }
  //////////////////////////////////////////////////////////////////////////////////
  ///    Loop Ended   /////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////


  let newSurvey = survey({
    "_id": mongoose.Types.ObjectId(),
    "name": req.body.name,
    "creator": req.user._id,
    "start": req.body.startDate[0],
    "end": req.body.endDate[0],
    "questionsNumber": req.body.questionsNumber,
    "questionTable": questionIds

  });

  survey.create(newSurvey, (err, survey) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect('/survey');
    }
  });
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GET the Survey Details page in order to edit a new Survey
//router.get('/:id',  userController.RequireAuth, (req, res, next) => {
module.exports.DisplayEdit = (req, res) => {
  try {
    // get a reference to the id from the url
    let id = mongoose.Types.ObjectId.createFromHexString(req.params.id);

    // find one survey by its id
    survey.findById(id, (err, surveys) => {
      if (err) {
        console.log(err);
        res.end(error);
      } else {
        question.find({ surveyId: id }, (err, questions) => {
          if (err) {
            console.log(err);
            res.end(err);
          } else {
            question.find({ surveyId: id }, (err, questions) => {
              if (err) {
                console.log(err);
                res.end(err);
              } else {
                //show the survey details view
                res.render('survey/details', {
                  title: 'Survey Details',
                  surveys: surveys,
                  displayName: req.user.displayName
                });
              }
            });
          }
        });
      }
    });

  } catch (err) {
    console.log(err);
    res.redirect('/errors/404');
  }
};

// POST - process the information passed from the details form and update the document
module.exports.UpdateSurvey = (req, res) => {
  //router.post('/:id',  userController.RequireAuth, (req, res, next) => {
  // get a reference to the id from the url
  let id = req.params.id;

  let updatedSurvey = survey({
    "_id": id,
    "name": req.body.name,
    "creator": req.user._id,
    "start": req.body.startDate,
    "end": req.body.endDate,

    //"questions": req.body.questionTable
  });

  survey.update({ _id: id }, updatedSurvey, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the survey List
      res.redirect('/survey');
    }
  });
};

// GET - process the delete by user id
//router.get('/delete/:id',  userController.RequireAuth, (req, res, next) => {
module.exports.DeleteSurvey = (req, res) => {
  // get a reference to the id from the url
  let id = req.params.id;

  survey.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the surveys list
      res.redirect('/survey');
    }
  });
};

function getUsersSurveys(req, callback) {
  //survey.find().where('creator').equals(req.user._id).exec(callback);
  survey.find({ creator: req.user._id }, callback);
}

