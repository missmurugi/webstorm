const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "schoolproject",
});

db.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Connected to the MySQL server.");
});

/**
 * "fieldCount": 0,
 *     "affectedRows": 1,
 *     "insertId": 3,
 *     "serverStatus": 2,
 *     "warningCount": 0,
 *     "message": "",
 *     "protocol41": true,
 *     "changedRows": 0
 */

app.post("/register_admin", (req, res) => {
  // INSERT INTO table_name
  // VALUES (value1, value2, value3, ...);
  console.log(req.body);
  let adminObject = req.body;
  let table = "admin";
  //columns
  let adminname = "adminname";
  let adminemail = "adminemail";
  let adminpassword = "adminpassword";
  let admincontact = "admincontact";

  db.query("INSERT INTO " + table + " SET ?", req.body, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//fetching admin
app.get("/fetch_admin", (req, res) => {
  var fetchData = "SELECT * FROM admin";
  db.query(fetchData, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//create parent
app.post("/register_parent", (req, res) => {
  // INSERT INTO table_name
  // VALUES (value1, value2, value3, ...);
  console.log(req.body);
  let parentObject = req.body;
  let table = "parent";
  //columns
  let parentsignupname = "parentsignupname";
  let parentsignupmail = "parentsignupmail";
  let parentsignuppassword = "parentsignuppassword";
  let parentsignupcontact = "parentsignupcontact";
  let parentchildsignup = "parentchildsignup";
  let parentsignupaddress = "parentsignupaddress";
  let gender = "parentgender";

  db.query("INSERT INTO " + table + " SET ?", req.body, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//fetching parent
app.get("/fetch_parent", (req, res) => {
  var fetchData = "SELECT * FROM parent";
  db.query(fetchData, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//fetching driver
app.get("/fetch_driver", (req, res) => {
  var fetchData = "SELECT * FROM driver";
  db.query(fetchData, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//create driver
app.post("/register_driver", (req, res) => {
  // INSERT INTO table_name
  // VALUES (value1, value2, value3, ...);
  console.log(req.body);
  let parentObject = req.body;
  let table = "driver";
  //columns
  let driversignupname = "driversignupname";
  let driversignupmail = "driversignupmail";
  let driversignuppass = "driversignuppass";
  let driversignupcontact = "driversignupcontact";
  let gender = "drivergender";

  db.query("INSERT INTO " + table + " SET ?", req.body, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.post("/add_driver_location", (req, res) => {
  // INSERT INTO table_name
  // VALUES (value1, value2, value3, ...);
  console.log(req.body);
  let parentObject = req.body;
  let table = "driver_location_map";
  //columns
  let driver_id = "driver_id";
  let map_lat = "map_lat";
  let map_long = "map_long";
  let datetime_added = "datetime_added";

  db.query("INSERT INTO " + table + " SET ?", req.body, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//fetching headteacher
app.get("/fetch_headteacher", (req, res) => {
  var fetchData = "SELECT * FROM admin";
  db.query(fetchData, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//create headteacher
app.post("/register_headteacher", (req, res) => {
  // INSERT INTO table_name
  // VALUES (value1, value2, value3, ...);
  console.log(req.body);
  let parentObject = req.body;
  let table = "headteacher";
  //columns
  let headteachersignupname = "headteachersignupname";
  let headteachersignupmail = "headteachersignupmail";
  let headteachercontact = "headteachercontact";
  let headteachersignuppass = "headteachersignuppass";
  let gender = "headteachergender";

  db.query("INSERT INTO " + table + " SET ?", req.body, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//fetching classteacher
app.get("/fetch_classteacher", (req, res) => {
  var fetchData = "SELECT * FROM classteacher";
  db.query(fetchData, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//create classteacher
app.post("/register_classteacher", (req, res) => {
  // INSERT INTO table_name
  // VALUES (value1, value2, value3, ...);
  console.log(req.body);
  let parentObject = req.body;
  let table = "classteacher";
  //columns
  let teachersignupname = "teachersignupname";
  let teachersignupmail = "teachersignupmail";
  let teachersignupcontact = "teachersignupcontact";
  let teachersignuppass = "teachersignuppass";
  let gender = "classteachergender";

  db.query("INSERT INTO " + table + " SET ?", req.body, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

///login parent
app.post("/login_parent", (req, res) => {
  let parentsignupname = req.body.parentsignupname;
  let parentsignuppassword = req.body.parentsignuppassword;
  var fetchData = `SELECT * FROM parent WHERE parentsignupname='${parentsignupname}' AND parentsignuppassword='${parentsignuppassword}'`;
  db.query(fetchData, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//create connection
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
