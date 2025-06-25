const camionModel = require('../models/camionModels');

exports.traerCamiones = (req, res) => {
    camionModel.getTraerTodosLosCamiones((err, camiones) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error al obtener los camiones');
        }

        res.render('camion/camion', { camion: camiones });
    });
};

exports.reporteCamionesNoUtilizados = (req, res) => {
    const {fechaInicio,fechaFinal} = req.query;
    camionModel.obtenerCamionesNoUtilizados(fechaInicio, fechaFinal, (err, dato) => {
        if (err) {
            console.log(err);
           
        }
        console.log(dato);
        res.render('camion/camionesNoUtilizados', { camiones: dato });
    });
};

exports.reportePedidoPorCamion  = (req, res) => {
    const {fechaInicio,fechaFinal} = req.query;
    camionModel.obtenerPedidoPorCamion(fechaInicio, fechaFinal, (err, dato) => {
        if (err) {
            console.log(err);
           
        }
        console.log(dato);
        res.render('camion/pedidosPorCamion', { pedidos: dato });
    });
};