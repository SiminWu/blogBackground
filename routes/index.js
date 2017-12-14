var express = require('express');
var router = express.Router();
var sqlSearch = require('./server/sqlSearch');
// console.log(sqlSearch)
/* GET home page. */
//设置跨域访问

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
    next();
});

router.get('/login', function(req, res, next) {
    console.log("--")
    console.log(req);
    console.log(res);
    console.log("++");
    res.send('root');
    // sqlSearch.query()

});
module.exports = router;

