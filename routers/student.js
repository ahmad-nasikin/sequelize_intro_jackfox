const express = require('express')
const router = express.Router()

const Student = require('../models');

router.get('/', (req, res) => {
  Student.Student.findAll()
  .then(data => {
    res.render('student', {
      dataStudent: data
    })
  })
})


module.exports = router;
