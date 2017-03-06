const express = require('express');
const hbs = require('hbs');
const routes = require('./routes');
const bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/properties',     routes.getAllProperties);
app.get('/properties/:id', routes.getAllProperty);
app.post('/properties',    routes.createProperty);

app.listen(3000);

// app.get('/about', (req, res) => {
//     res.render('about.hbs', {
//        pageTitle: 'Title hhh',
//        currentYear: new Date().getFullYear()
//    });
// });
