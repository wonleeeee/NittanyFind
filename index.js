const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());

app.use(require("./lost/router"));

app.listen(3001, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", 3001);
  });