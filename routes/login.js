var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/login').get(function (req, res, next) {
    console.log('On rentre dans la route login');
    console.log(req.method, req.url);
    res.render('login');

});

module.exports = router;

