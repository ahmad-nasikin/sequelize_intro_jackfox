const express = require('express')
const router = express.Router()

const Teacher = require('../models');

router.get('/', (req, res) => {
  Teacher.Teacher.findAll()
  .then(data => {
    res.render('teacher', {
      dataTeacher: data
    });
  })
})

module.exports = router
