const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const passport = require('passport');
const Test = require('./routes/test');
const Auth = require('./routes/auth');
const Room = require('./routes/room');
const Upload = require('./routes/upload');
const Lessee = require('./routes/lessee');
const User = require('./routes/user');
const Notice = require('./routes/notice');
const Maintenance = require('./routes/maintenance');

// // 使用body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./config/userPassport')(passport);
app.use('/api/test', Test);
app.use('/api/auth', Auth);
app.use('/api/room', Room);
app.use('/api/upload', Upload);
app.use('/api/lessee', Lessee);
app.use('/api/user', User);
app.use('/api/notice', Notice);
app.use('/api/maintenance', Maintenance);

app.listen(5000, () => {
    console.log('the server port running');
});