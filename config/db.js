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
        const consulta = 'SELECT * FROM camion';
        connection.query(consulta, (err, resultado) => {
            if (err) throw err;

            console.log('Los datos obtenidos son:');
            console.log(resultado);
        });
    }
});
module.exports = connection;