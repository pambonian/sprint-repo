const express = require('express');
const {} = require("./models");
const app = express();
const PORT = process.envPORT || 8000;
const layouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(layouts);

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.json({ message: 'Hey! A Functioning App Lives!'});
});