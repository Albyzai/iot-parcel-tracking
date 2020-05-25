const express = require('express')
const router = express.Router();
const TemperatureController = require('../../controllers/temperature.controller')


// @route   GET api/users/register
// @desc    Register user
// @access  Public
router.post('/', TemperatureController.create_temperature_entry);

module.exports = router;