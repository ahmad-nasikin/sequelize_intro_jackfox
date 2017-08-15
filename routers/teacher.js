const express = require('express')
const router = express.Router()

const model = require('../models');

router.get('/', (req, res) => {
  model.Teacher.findAll({
    order:[['first_name', 'ASC']],
    include: [model.Subject]
  })
  .then(data => {
    res.render('teacher', {
      dataTeacher: data
    });
  })
})

router.get('/add', (req, res) => {
  res.render('addTeacher', {errmsg: ''})
})

router.post('/', (req, res) => {
  model.Teacher.findOne({
      where:{
      email: req.body.email
      }
  })
  .then((result) => {
  if (!result) {
    model.Teacher.create({ first_name : req.body.first_name, last_name : req.body.last_name, email : req.body.email})
    .then(() => {
      res.redirect('/teacher')
    })
    .catch(err => {
      res.render('addTeacher', {errmsg: err.message});
    })
  } else {
    res.render('addTeacher', {errmsg: ' Sudah Terdaftar'});
  }
  })
})

router.get('/edit/:id', (req, res) => {
  model.Teacher.findById(req.params.id, {include: [model.Subject]})
  .then(data => {
    console.log(data);
    model.Subject.findAll()
    .then(allData => {
      console.log(allData);
      res.render('editTeacher', {
        data: data, data2: allData
      })
    })
  })
})


router.post('/edit/:id', (req, res) => {
  model.Teacher.update({
    first_name: req.body.first_name, last_name: req.body.last_name, email : req.body.email, SubjectId : req.body.subject}, {
    where : {
      id:req.params.id
    }
  })
  .then(() => {
    res.redirect('/teacher')
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/delete/:id', (req, res) => {
  model.Teacher.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(data => {
    res.redirect('/teacher');
  })
})

module.exports = router
