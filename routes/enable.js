var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;

/* GET users listing. */
router.get('/', function(req, res) {
  exec('rm /home/Downloads/rsync.disabled', function (error, stdout, stderr) {
    res.send("0");
  });
});

module.exports = router;
