const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TemperatureSchema = new Schema({
    temperature: {
        type: String
    }
})

module.exports = User = mongoose.model('Temperature', TemperatureSchema, 'temperatures');