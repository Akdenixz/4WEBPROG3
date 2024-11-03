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


  var updateSql = "UPDATE Employee SET DepartmentName = 'Executive' WHERE FirstName = 'Terri'";

  con.query(updateSql, function (err, result) {
    if (err) throw err;
    console.log("Record updated: " + result.affectedRows);

  
    con.end();
  });
});
