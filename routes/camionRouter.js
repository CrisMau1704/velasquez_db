const express = require('express');
const router = express.Router();
const camionControlador = require('../controllers/camionControlador');

router.get('/camiones', camionControlador.traerCamiones);
router.get('/reporte/camiones-no-utilizados', camionControlador.reporteCamionesNoUtilizados);
router.get('/reporte/pedido-por-camion', camionControlador.reportePedidoPorCamion);

module.exports = router;
