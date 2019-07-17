const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('./models/user');
const Post = require('./models/post');


mongoose.connect('mongodb://localhost:27017/blog', (err) => {
    if (err) throw err;
    console.log('Successfully connected');
});







/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blog' });
});

module.exports = router;
