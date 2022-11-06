const mysql = require("mysql2");

var config =module.exports;

config.db = mysql.createPool({
    user: "root",
    host: "localhost",
    password: `password`,
    database: "lostfound",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0

});

config.express = {
    port: 3001
};