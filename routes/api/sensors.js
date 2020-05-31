const express = require('express')
const router = express.Router();
const TemperatureController = require('../../controllers/sensors.controller')


// @route   POST /sensors
// @desc    Create Sensor Entry
// @access  Public
router.post('/', TemperatureController.create_sensor_entry);

// @route   GET /sensors
// @desc    Returns all sensors
// @access  Public
router.get('/', TemperatureController.get_sensor_data);

router.get('/test', TemperatureController.get_kvp);

module.exports = router;