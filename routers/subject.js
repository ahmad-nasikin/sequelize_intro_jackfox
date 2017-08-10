const express = require('express')
const router = express.Router()

const Subject = require('../models');

router.get('/', (req, res) => {
  Subject.Subject.findAll()
  .then(data => {
    res.render('subject', {
      dataSubject: data
    });
  })
})

module.exports = router;
