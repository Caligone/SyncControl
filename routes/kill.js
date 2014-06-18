var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;

/* GET users listing. */
router.get('/', function(req, res) {
  exec('killall -KILL rsync', function (error, stdout, stderr) {
    res.send('0');
  });
});

module.exports = router;
