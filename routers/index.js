const express = require('express')
const router = express.Router()

const Index = require('../models');

router.get('/', (req, res, next) => {
  let userSession = req.session.user
  if(userSession) {
    res.render('index', {userSession: userSession, pageTitle: 'Index Page'})
  } else {
    res.redirect('/login')
  }
})

router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.redirect('/')
})


module.exports = router;
