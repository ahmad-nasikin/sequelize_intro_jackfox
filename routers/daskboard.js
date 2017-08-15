var express = require('express')
var router = express.Router()
var Sequelize = require('sequelize')

const Dashboard = require('../models');
const userauth = require('../helper/userauth.js');

router.get('/', function (req, res, next) {
  let userSession = req.session.user
  if(userSession) {
    let getUserAuth = userauth.userRole(userSession.role)
    res.render('daskboard', {userSession: userSession, getUserAuth: getUserAuth, pageTitle: 'daskboard Page'})
  } else {
    res.redirect('/login')
  }
})

router.get('/', function(req, res, next) {
  let userSession = req.session.user
  let getUserAuth = userauth.userRole(userSession.role)
  if(!userSession.role) {
    res.sendStatus(403)
  } else {
    res.render('daskboard', {userSession: userSession, getUserAuth: getUserAuth})
  }
})

module.exports = router;
