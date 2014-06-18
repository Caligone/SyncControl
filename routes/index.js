var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res) {
  fs.exists('/home/Downloads/rsync.lock', function(syncing) {
    fs.exists('/home/Downloads/rsync.disabled', function(disabled)  {
      res.render('index', { title: 'SyncTool', syncing: syncing, disabled: disabled});
    });
  });
});

module.exports = router;
