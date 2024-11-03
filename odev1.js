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

const sql = `CREATE TABLE IF NOT EXISTS Employee (
        EmployeeId INT PRIMARY KEY,
        FirstName VARCHAR(255),
        LastName VARCHAR(255),
        DepartmentName VARCHAR(255)
    )`;  
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});