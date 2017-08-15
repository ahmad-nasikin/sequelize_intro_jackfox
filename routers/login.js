var express = require('express')
var router = express.Router()

const model = require('../models')

router.get('/', (req, res, next) => {
  res.render('login', {pageTitle: 'Index Page'})
})

router.post('/', (req, res, next) => {
  let username = req.body.username
  let password = req.body.password

  model.User.find({
    where: {
      username: username
    }
  })
  .then(user => {
    if(user.password == password) {
      req.session.user = {
        username: username,
        role: user.role
      }
      console.log('======', user);
      res.redirect('/daskboard')
    } else {
      res.send('Wrong Password')
    }
  })
  .catch(err => {
    res.redirect('/login')
  })
})

module.exports = router;


// router.get('/', function(req, res, next) {
//   res.render('login', {pageTitle: 'Login Page'})
// })
//
// router.post('/', function(req, res, next) {
//   let username = req.body.username
//   let password = req.body.password
//
//   Models.User.find({
//     where: {username: username}
//   })
//   .then(user=> {
//     if(user.password == password) {
//       req.session.user = {
//         username : username,
//         role: user.role
//       }
//       res.redirect('/dashboard')
//     } else {
//       res.send('Maaf password salah')
//     }
//   })
//   .catch(err => {
//     res.redirect('/login')
//   })
// })
