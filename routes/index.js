var express = require('express');
var router = express.Router();
var token = require('./token/token');//身份验证token
var sqlSearch = require('./server/sqlSearch');//数据库sql层级


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
    next();
});

function send(res,msg,code) {
    var code = code? code:200;
    var msg = msg?msg:"操作成功";
    res.send({result: msg, code: code});
}
/**
 * 登录接口
 */
/
router.post('/login', function (req, res, next) {
    console.log('options login');
    console.log(req.body)
    var user = req.body.user;
    var password = req.body.password;
    var tokend = token.createToken({user:user,password:password},new Date().getTime());
    res.send({result: '登陆成功', code: 200,token:tokend});
    // send(res,'登陆成功');
    // send({result: '登陆成功', code: 200});
})
module.exports = router;


