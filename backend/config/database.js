const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'doram',
    password:'dnd131',
    port:3306,
    database:'ME'
});


connection.connect();

module.exports = connection;