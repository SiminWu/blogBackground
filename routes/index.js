var express = require('express');
var router = express.Router();
var sqlSearch = require('./server/sqlSearch');
// console.log(sqlSearch)
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
    console.log("--")
    // console.log(req);
    // console.log(res);
    console.log("++")
    sqlSearch.query()

});
module.exports = router;

