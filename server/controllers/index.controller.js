// Display the Home Page
module.exports.DisplayHome = (req, res) => {
  res.render('content/index', {
    title: 'Home',
    surveys: '',
    displayName: req.user ? req.user.username : ''
   });
}


module.exports.DisplayAbout = (req, res) => {
  res.render('content/about', {
    title: 'About',
    surveys: '',
    displayName: req.user ? req.user.username : ''
   });
}