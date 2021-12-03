const express = require('express');
const {} = require("./models");
const app = express();
const PORT = process.envPORT || 8000;
const layouts = require('express-ejs-layouts');
const db = require('./models');
const { RowDescriptionMessage } = require('pg-protocol/dist/messages');

app.set('view engine', 'ejs');
app.use(layouts);

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.json({ message: 'Hey! A Functioning App Lives!'});
});

// db.user.create({
//     name: 'Brian Wilson',
//     handle: 'BrianWilsonLive',
//     bio: "Visit Brian's all-new website for rare demos, videos & more!",
//     joindate: 'August 2009',
//     following: 101,
//     followers: 998000
// }).then(createdUser=>{
//     console.log(createdUser)
// });