// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// define the user model
let UserModel = require('../models/users');
let User = UserModel.User; // alias for User Model - User object

// define the contact model
let indexController = require('../controllers/index.controller');

// // create a function to check if the user is authenticated
// function requireAuth(req, res, next) {
//   // check if the user is logged in
//   if(!req.isAuthenticated()) {
//     return res.redirect('/users/login');
//   }
//   next();
// }

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  indexController.DisplayHome(req, res);
});

/* GET home page. wildcard */
router.get('/about', (req, res, next) => {
  indexController.DisplayAbout(req, res);
});

// /* GET about page. */
// router.get('/about', (req, res, next) => {
//   res.render('content/about', {
//     title: 'About',
//     displayName: req.user ? req.user.displayName : ''
//    });
// });

// /* GET ptojects page. */
// router.get('/projects', (req, res, next) => {
//   res.render('content/projects', {
//     title: 'About',
//     displayName: req.user ? req.user.displayName : ''
//    });
// });

// /* GET services page. */
// router.get('/services', (req, res, next) => {
//   res.render('content/services', {
//     title: 'Services',
//     displayName: req.user ? req.user.displayName : ''
//    });
// });

// /* GET contact me page. */
// router.get('/contact/me', requireAuth, (req, res, next) => {
//   res.render('content/contact-me', {
//     title: 'Contact Me',
//     displayName: req.user ? req.user.displayName : ''
//    });
// });

// /* GET contact page. */
// router.get('/contact', requireAuth, (req, res, next) => {
//   res.render('contacts/index', {
//     title: 'Contact',
//     contacts: '',
//     displayName: req.user ? req.user.displayName : ''
//    });
// });

//////////////////////////////////////////////////////////
//Login and Registration
//////////////////////////////////////////////////////////////
/*
// GET /login - render the login view
router.get('/login', (req, res, next)=>{
  // check to see if the user is not already logged in
  if(!req.user) {
    // render the login page
    res.render('auth/login', {
      title: "Login",
      contacts: '',
      messages: req.flash('loginMessage'),
      displayName: req.user ? req.user.displayName : ''
    });
    return;
  } else {
    return res.redirect('/contacts'); // redirect to contacts list
  }
});

// POST /login - process the login attempt
router.post('/login', passport.authenticate('local', {
  successRedirect: '/contacts',
  failureRedirect: '/login',
  failureFlash: 'bad login'
}));

// GET /register - render the registration view
router.get('/register', (req, res, next)=>{
   // check to see if the user is not already logged in
  if(!req.user) {
    // render the registration page
      res.render('auth/register', {
      title: "Register",
      contacts: '',
      messages: req.flash('registerMessage'),
      displayName: req.user ? req.user.displayName : ''
    });
    return;
  } else {
    return res.redirect('/'); // redirect to home list
  }
});

// POST / register - process the registration submission
router.post('/register', (req, res, next)=>{
  User.register(
    new User({
      username: req.body.username,
      //password: req.body.password,
      email: req.body.email,
      displayName: req.body.displayName
    }),
    req.body.password,
    (err) => {
      if(err) {
        console.log('Error inserting new user');
        if(err.name == "UserExistsError") {
          req.flash('registerMessage', 'Registration Error: User Already Exists');
        }
        return res.render('auth/register', {
          title: "Register",
          contacts: '',
          messages: req.flash('registerMessage'),
          displayName: req.user ? req.user.displayName : ''
        });
      }
      // if registration is successful
      return passport.authenticate('local')(req, res, ()=>{
        res.redirect('/contacts');
      });
    });
});

// GET /logout - process the logout request
router.get('/logout', (req, res, next)=>{
  req.logout();
  res.redirect('/'); // redirect to the home page
});
*/

module.exports = router;
