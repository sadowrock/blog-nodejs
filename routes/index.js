const express = require('express');
const router = express.Router('./routes.js');




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blog' });
});





module.exports = router;
