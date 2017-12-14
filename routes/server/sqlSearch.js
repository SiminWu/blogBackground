/**
 * Created by Administrator on 2017/12/13.
 */
/**
 * mysql模板
 *
 */
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'blog'
});
connection.connect();

module.exports = {
    query:function(param, callback) {
            connection.query('SELECT user from login where user = simin', function(err, rows, fields) {
                if (err) throw err;
                console.log("00000000000000")
                console.log('The solution is----: ', rows);
                callback(rows)
            });
    }
}

// connection.end();