var express = require('express');
var router = express.Router();
const expressValidator = require('express-validator')
let dateRgx = new RegExp(/\d{4}-\d{2}-\d{2}/);
let timestampRgx = new RegExp(/\d+/);

router.get('/timestamp', function(req, res) {
    var time = (new Date()).getTime();
    var utcTimestamp = (new Date(time)).toUTCString();
    var response = {unix: time, utc: utcTimestamp};
    console.log('received request for current timestamp: ' + response);
    res.json(response);
});

router.get('/timestamp/:date_string', function(req, res, next) {
    var time;
    var dateString = req.params.date_string;

    if (dateRgx.test(dateString)) {
        time = (new Date(dateString)).getTime();
    } else if (timestampRgx.test(dateString)) {
        time = (new Date(Number(dateString))).getTime();
    }

    if (time == null) {
        response = {error: "invalid date"};
        res.json(response);
        return;
    }

    var response = {unix: time, utc: (new Date(time)).toUTCString()};
    console.log('received request for ' + time + ' is timestamp ' + response.timestamp);
    res.json(response);
});

router.get('/test', function(req, res) {
    console.log('received request for test');
    var response = {status: true};
    res.json(response);
})

module.exports = router;