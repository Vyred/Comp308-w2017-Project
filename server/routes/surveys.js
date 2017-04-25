// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the survey model
let survey = require('../models/surveys');

// require the users controller for authentication
let usersController = require('../controllers/users.controller');

// require the surveys controller to access surveys collection in findById
let surveysController = require('../controllers/surveys.controller');

/* GET surveys List page. READ */
router.get('/',  (req, res, next) => {
  surveysController.ReadSurveyList(req, res);
});

//  GET the Survey Details page in order to add a new Survey
router.get('/create', usersController.RequireAuth, (req, res, next) => {
  surveysController.DisplayAdd(req, res);
}).post('/create', usersController.RequireAuth, (req, res, next) => {
  // POST process the Survey Details page and create a new Survey - CREATE
  surveysController.CreateSurvey(req, res);
});

// GET the Survey Details page in order to edit a new Survey
router.get('/:id', usersController.RequireAuth, (req, res, next) => {
  surveysController.DisplayEdit(req, res);
}).post('/:id', usersController.RequireAuth, (req, res, next) => {
  // POST - process the information passed from the details form and update the document
  surveysController.UpdateSurvey(req, res);
});

// GET - process the delete by user id
router.get('/delete/:id', usersController.RequireAuth, (req, res, next) => {
  surveysController.DeleteSurvey(req, res);
});

router.get('/answer/:id', usersController.RequireAuth, (req, res, next) => {
  surveysController.AnswerSurvey(req, res);
});

module.exports = router;
