const express = require('express');
const hbs = require('hbs');
const routes = require('./routes');
const bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/properties', routes.getAllProperties);
app.get('/properties/:id', routes.getProperty);
app.post('/properties', routes.createProperty);
app.put('/properties/:id', routes.updateProperty);
app.delete('/properties/:id', routes.deleteProperty);
app.post('/properties/zoopla/import', routes.zooplaImport);

app.listen(3000);

// app.get('/about', (req, res) => {
// res.render('about.hbs', {
//    pageTitle: 'Title hhh',
//    currentYear: new Date().getFullYear()
//    });
// });
