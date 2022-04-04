const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const passport = require('passport');
const Test = require('./routes/test');
const Auth = require('./routes/auth');
const Room = require('./routes/room');

// // 使用body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./config/userPassport')(passport);
app.use('/api/test', Test);
app.use('/api/auth', Auth);
app.use('/api/room', Room);

app.listen(5000, () => {
    console.log('the server port running');
});