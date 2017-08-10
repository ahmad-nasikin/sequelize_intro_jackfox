const express = require('express')
const bodyParser = require('body-parser')

let app = express();

var index = require('./routers/index')
var teacher = require('./routers/teacher')
var subject = require('./routers/subject')
var student = require('./routers/student')

app.set('view engine', 'ejs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', index)
app.use('/teacher', teacher);
app.use('/subject', subject);
app.use('/student', student);

app.listen(3001, () => {
  console.log('Listening On Port 3001');
})
