const mongoose = require('mongoose');
const Network = require('./Network')
const Schema = mongoose.Schema;

const SensorSchema = new Schema({
    temperature: {
        type: Number
    },
    flipped: {
        type : Boolean
    },
    location: {
        lat: {
            type: Number
        },
        long: {
            type: Number
        },
        accuracy: {
            type: Number
        }
    },
    acceleration: {
        type: Number
    },
    accelerationAngle: {
        x: {
            type: Number
        },
        y: {
            type: Number
        }
    },
    gyroscope: {
        x: {
            type: Number
        },
        y: {
            type: Number
        },
        z: {
            type: Number
        }
    },
    gyroscopeAngle: {
        x: {
            type: Number
        },
        y: {
            type: Number
        },
        z: {
            type: Number
        }
    },
    angle: {
        x: {
            type: Number
        },
        y: {
            type: Number
        },
        z: {
            type: Number
        }
    },
    networks: [Network],
    timestamp: {
        type: Date,
        default: new Date()
      }
})

module.exports = Sensor = mongoose.model('Sensor', SensorSchema, 'sensors');