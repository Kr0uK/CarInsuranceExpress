var express = require('express');
var router = express.Router();

router.route('/').get(function (req, res, next) {
    console.log('On rentre dans la route home');
    console.log(req.method, req.url);
    res.render('index');

});

module.exports = router;
