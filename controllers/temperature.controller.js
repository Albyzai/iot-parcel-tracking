const Temperature = require('../models/Temperature')


// @route   POST api/dilemmas
module.exports.create_temperature_entry = (req, res) => {

  const newTemp = new Temperature({
      temperature: req.body.Temperature
  })

  newTemp
    .save()
    .then(data => res.json(data))
    .catch(err => res.json(err))

};
