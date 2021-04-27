var express = require('express');
var router = express.Router();
// const mysql = require('mysql');
// const dbconfig = require('../config/database.js');
// const connection = mysql.createConnection(dbconfig);

/* GET home page. */
router.get('/', function(res) {
  // connection.query('SELECT * from Questions', (error, rows) => {
  //   if (error) throw error;
  //   console.log('User info is: ', rows);
  // });
  res.render('index', { title: 'Express' });
});

module.exports = router;
