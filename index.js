const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();

//  Route config
const sensors = require('./routes/api/sensors');

// DB Config
const db = require('./config/keys').mongoURI;

app.use(express.json());

// Connect to Mongo
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// Passport middleware

// Passport Config
app.use(cors())
// Use Routes
// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
app.use('/sensors', sensors);
app.use(express.static('public'));

const port = process.env.PORT || 1880;

app.listen(port, (err) => {
  if (!err) {
    console.log(`Server started on http://localhost:${port}`);
  } else {
    console.log(`Server failed starting with error: ${err}`);
  }
});