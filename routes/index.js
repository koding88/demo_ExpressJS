var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  var country = "Vietnam"
  var year = 2023
  var grade = 7.5
  var pass = true
  var gender = 'm'
  var sports = ['football', 'badmiton', 'swimming', 'running']
  res.render('index.hbs', {
    country: country,
    year: year,
    grade: grade,
    pass: pass,
    gender: gender,
    sports: sports
  }
  )
})

module.exports = router
