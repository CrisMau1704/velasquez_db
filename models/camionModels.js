const db = require('../config/db');

exports.getTraerTodosLosCamiones = (callback) => {
    const consulta = 'SELECT * FROM camion';
    db.query(consulta, (err, resultado) => {
        if (err) return callback(err);

        callback(null, resultado);
    });
};

exports.obtenerCamionesNoUtilizados = (fechaInicio, fechaFinal, callback) => {
    const consulta = 'CALL reporte_camiones_no_utilizados(? ,? );';
    db.query(consulta, [fechaInicio,fechaFinal], (err, resultado) => {
        if (err) return callback(err);
        callback(null, resultado[0]);
    });
};

exports.obtenerPedidoPorCamion = (fechaInicio, fechaFinal, callback) => {
    const consulta = 'CALL reporte_pedido_por_camion(? ,? );';
    db.query(consulta, [fechaInicio,fechaFinal], (err, resultado) => {
        if (err) return callback(err);
        callback(null, resultado[0]);
    });
};

exports.obtenerPedidoEntregados = (fechaInicio, fechaFinal, callback) => { // estadoContratos, clienteID cargar los parametros 
    const consulta = 'CALL reporte_pedido_entregados(? ,?);'; // ? colocar esto depende a los parametros que quieres incluir 
    db.query(consulta, [fechaInicio,fechaFinal], (err, resultado) => {
        if (err) return callback(err);
        callback(null, resultado[0]);
    });
};