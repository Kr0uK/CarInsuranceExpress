var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('homeUser', function (req, res, next) {
    res.render('homeUser');
});

module.exports = router;