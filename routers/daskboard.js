var express = require('express')
var router = express.Router()
var Sequelize = require('sequelize')

const Dashboard = require('../models');
const userauth = require('../helper/userauth.js');

router.get('/', function(req, res, next) {
  let userSession = req.session.user
  let getUserAuth = userauth.userRole(userSession.role)
  if(!userSession.role) {
    res.sendStatus(403)
  } else {
    console.log('ini user auth', getUserAuth);
    res.render('daskboard', {userSession: userSession, getUserAuth: getUserAuth})
  }
})

module.exports = router;
