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

module.exports = router;
