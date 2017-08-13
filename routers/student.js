const express = require('express')
const router = express.Router()

const model = require('../models');

router.get('/', (req, res) => {
  model.Student.findAll()
  .then(data => {
    res.render('student', {
      dataStudent: data
    })
  })
})

router.get('/add', (req, res) => {
  res.render('addStudent', {errmsg: ''})
})

router.post('/', (req, res) => {
  model.Student.findOne({
      where:{
      email: req.body.email
      }
  })
  .then((result) => {
  if (!result) {
    model.Student.create({ first_name : req.body.first_name, last_name : req.body.last_name, email : req.body.email})
    .then(() => {
      res.redirect('/student')
    })
    .catch(err => {
      res.render('/addStudent', {errmsg: err.message});
    })
  } else {
    res.render('addStudent', {errmsg: ' Sudah Terdaftar'});
  }
  })
})


router.get('/edit/:id', (req, res) => {
  model.Student.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(data => {
    res.render('editStudent', {
      data: data}
    )
  })
 })


router.post('/edit/:id', (req, res) => {
  model.Student.update({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email}, {
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.redirect('/student')
  })
  .catch(err => {
    console.log(err);
  })
})


router.get('/delete/:id', (req, res) => {
  model.Student.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(data => {
    res.redirect('/student')
  })
})


module.exports = router;
