var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "weblab"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  
  var selectSql = "SELECT * FROM Employee WHERE DepartmentName = 'Engineering'";

  con.query(selectSql, function (err, result, fields) {
    if (err) throw err;
    console.log("Engineering Department Employees:");
    console.table(result);


    con.end();
  });
});
