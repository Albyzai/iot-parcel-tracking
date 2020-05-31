const Sensor = require('../models/Sensor')
//const Network = require('../models/Network')


// @route   POST api/dilemmas
module.exports.create_sensor_entry = (req, res) => {
  const { Temperature, Acceleration, GyroX, GyroY, GyroZ, AccAngleX, AccAngleY, GyroAngleX, GyroAngleY, GyroAngleZ, AngleX, AngleY, AngleZ, Lat, Long, Accuracy } = req.body;
  console.log('request body:', req.body)
  const accessPoints = []
  // for(ap in network){
  //   const accessPoint = new Network({
  //     SSID: ap.SSID,
  //     BSSID: ap.BSSID,
  //     RSSI: ap.RSSI
  //   })
  //   accessPoint.save()
  //   accessPoints.push(accessPoint)
  // }
  
  const newSensorData = new Sensor({
      temperature: Temperature, 
      acceleration: Acceleration,
      location: {
        lat: Lat,
        long: Long,
        accuracy: Accuracy
      },
      accelerationAngle: {
        x: AccAngleX,
        y: AccAngleY,
      },
      gyroscope: {
        x: GyroX,
        y: GyroY,
        z: GyroZ
      },
      gyroscopeAngle: {
        x: GyroAngleX,
        y: GyroAngleY,
        z: GyroAngleZ
      },
      angle: {
        x: AngleX,
        y: AngleY,
        z: AngleZ
      },
      // networks: accessPoints
      
  })

  newSensorData
    .save()
    .then(data => res.json(data))
    .catch(err => res.json(err))
};

module.exports.get_sensor_data = (req, res) => {
  Sensor.find()
    .then(data => {
      data.sort((a, b) => (a.timestamp > b.timestamp) ? 1 : -1)
      return res.status(200).json(data)
    })
    .catch(err => res.status(500).json(err))
}

module.exports.get_kvp = (req, res) => {

  const response = {
    test1: 5,
    test2: 100,
    test3: 3000,
    test4: true 
  }

  return res.status(200).json(response)
}
