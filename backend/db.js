const mysql = require("mysql");
 
const connection = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "",
 database: "investment_db"
});
 
connection.connect((err) => {
 if (err) throw errp;
 
 console.log("Database Connected");
});
 
module.exports = connection;