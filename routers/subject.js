const express = require('express')
const router = express.Router()

const model = require('../models');

router.get('/', (req, res) => {
  model.Subject.findAll({
    order: [['subject_name', 'ASC']],
    include: [model.Teacher]
  })
  .then(data => {
    res.render('subject', {
      dataSubject: data
    });
  })
})

router.get('/add', (req, res) => {
  res.render('addSubject')
})


router.post('/', (req, res) => {
  model.Subject.create({subject_name: req.body.subject_name})
  .then(() => {
    res.redirect('/subject')
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/edit/:id', (req, res) => {
  model.Subject.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(data => {
    res.render('editSubject', {
      data: data}
    )
  })
  .catch(() => {
    console.log(err);
  })
 })

router.post('/edit/:id', (req, res) => {
  model.Subject.update({
    subject_name: req.body.subject_name
  }, {
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.redirect('/subject')
  })
  .catch( err => {
    console.log(err);
  })
})

router.get('/delete/:id', (req, res) => {
  model.Subject.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(data => {
    res.redirect('/subject')
  })
})

router.get('/:id/enrolledstudents', function (req, res) {
  model.StudentSubject.findAll({
    where: {
      SubjectId: req.params.id
    },
    include: [{all:true}],
    order: [['Student', 'first_name', 'ASC']],
  })
  .then(data => {
    console.log(data);
    res.render('subject-enrolledstudents', {dataSubject: data});
  })
})

router.get('/:id/:ids/givescore', function (req, res) {
   model.Student.findAll({
     where: {
       id: req.params.id
     }
   })
   .then(datasiswa => {
     model.Subject.findAll({
       where: {
         id: req.params.ids
       }
     })
     .then(datasubject => {
       res.render('subject-givescore', {data: datasiswa, dataSubject: datasubject})
     })
   })
 })

 router.post('/:id/:ids/givescore', function (req, res) {
   model.StudentSubject.update({
     score: req.body.score
   },{
     where: {
       StudentId: req.params.id,
       $and: {
         SubjectId: req.params.ids
       }
     }
   })
   .then(result => {
     res.redirect('/subject')
   })
 })


module.exports = router;
