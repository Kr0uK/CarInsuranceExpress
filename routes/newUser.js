var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('newUser', function (req, res, next) {
    res.render('newUser');
});

module.exports = router;