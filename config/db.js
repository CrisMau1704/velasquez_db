const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'velasquezdb'
});

connection.connect((error) => {
    if (error) {
        console.log("No se logró conectar:", error);
    } else {
        console.log("Se logró conectar:", error);
       
    }
});
module.exports = connection;