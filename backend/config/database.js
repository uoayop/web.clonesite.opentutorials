const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'doram',
    password:'dnd131',
    port:3306,
    database:'ME'
});

function handleDisconnect(){
    connection.connect(function(err){
        if (err){
            console.log('error when connecting to db:', err)
            setTimeout(handleDisconnect,2000);
        }
    });

    connection.on('error',function(err){
        console.log('db error',err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { 
            return handleDisconnect();                      
          } else {                                    
            throw err;                              
          }
    });
}

handleDisconnect();

module.exports = connection;