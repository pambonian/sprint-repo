const express = require('express');
const {
    user,
    tweet,
} = require("./models");
const app = express();
const PORT = process.envPORT || 8000;
const layouts = require('express-ejs-layouts');
const db = require('./models');
const { RowDescriptionMessage } = require('pg-protocol/dist/messages');
const user = require('./models/user');


app.set('view engine', 'ejs');
app.use(layouts);

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.json({ message: 'Hey! A Functioning App Lives!'});
});


app.get('/users', function(req, res) {
    user.findAll()
    .then(function(userList) {
        console.log('FOUND ALL USERS', userList);
        res.render('users', { user: userList })
    })
    .catch(function(err) {
        console.log('error!', err);
        res.json({ message: 'Error loading users' });
    });
});

app.get('/tweets', function(req, res) {
    user.findAll()
    .then(function(userList) {
        console.log('FOUND ALL TWEETS', tweetList);
        res.render('users', { user: tweetList })
    })
    .catch(function(err) {
        console.log('error!', err);
        res.json({ message: 'Error loading tweets' });
    });
});



app.listen(PORT, () => {
    console.log('Server is running on PORT', PORT);
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