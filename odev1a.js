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

  
  var insertSql = "INSERT INTO Employee (EmployeeId, FirstName, LastName, DepartmentName) VALUES ?";
  var values = [
    [1, 'Ken', 'Sanchez', 'Executive'],
    [2, 'Terri', 'Duffy', 'Engineering'],
    [3, 'Roberto', 'Tamburello', 'Engineering'],
    [4, 'Rob', 'Walters', 'Engineering'],
    [5, 'Gail', 'Erickson', 'Engineering'],
    [6, 'Jossef', 'Goldberg', 'Engineering'],
    [7, 'Dylan', 'Miller', 'Support'],
    [8, 'Diane', 'Margheim', 'Support'],
    [9, 'Gigi', 'Matthew', 'Support'],
    [10, 'Michael', 'Raynor', 'Support']
  ];

  con.query(insertSql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    con.end();
  });
});
