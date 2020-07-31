const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const expressLayouts = require('express-ejs-layouts');

const port = 3000;

app.set('view engine' , 'ejs');
app.use(expressLayouts);
app.set('layout' , 'layouts/layout');
app.use(express.static('public'));
app.use(express.static('views'));
app.use(express.static('views/relativechords'));
app.use(express.static('views/layouts'));
app.use(bodyParser.urlencoded({ extended: false }));

const indexRouter = require('./routes/index');
const relativeRouter = require('./routes/relativechord');

app.use('/' , indexRouter);
app.use('/relativechord' , relativeRouter);

app.listen(process.env.PORT || port);