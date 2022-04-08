//handles the mysql connection
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'airtel_forum'
});
 
var db = connection.connect();

module.export = {db};
