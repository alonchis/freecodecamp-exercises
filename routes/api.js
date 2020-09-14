var express = require('express');
var router = express.Router();
const expressValidator = require('express-validator')

router.get('/timestamp', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    // parse request
    var time = (new Date()).getTime();
    var utcTimestamp = (new Date(time)).toUTCString();
    var response = {timestamp: time, utc: utcTimestamp};
    console.log('received request for current timestamp: ' + response);
    res.json(response);
});

router.get('/timestamp/:date_string', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    // parse request
    var time = (new Date(req.params.date_string)).getTime();
    var utcTimestamp = (new Date(time)).toUTCString();
    var response = {unix: time, utc: utcTimestamp};
    console.log('received request for ' + time + ' is timestamp ' + response.timestamp);
    res.json(response);
});

router.get('/test', function(req, res) {
    console.log('received request for test');
    var response = {status: true};
    res.json(response);
})

module.exports = router;