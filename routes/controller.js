var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

console.log('On rentre dans le controller');
router.route('/').get(function (req, res, next) {
    console.log('On rentre dans la route home');
    console.log(req.method, req.url);
    res.render('index');
    next();
});


router.route('/login').get(function (req, res, next) {
    console.log('On rentre dans la route login');
    console.log(req.method, req.url);
    res.render('login');
    next();
})
        .post(function (req, res, next) {
            console.log('On rentre dans le post du login');
            console.log(req.method, req.url);
            res.render('home_user');
            next();
        });

router.route('/new_user').get(function (req, res, next) {
    console.log('On rentre dans la route newUser');
    console.log(req.method, req.url);
    res.render('new_user');
    next();

});



router.route('/home_user').get(function (req, res, next) {
    console.log('On rentre dans la route homeuser');
    console.log(req.method, req.url);
    res.render('home_user');
    next();
});

// catch 404 and forward to error handler
router.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    console.log(err.message);
    next(err);
});


// error handler
router.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.log(err.message);

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = router;