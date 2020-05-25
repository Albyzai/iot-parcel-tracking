const keys = require('./../../config/keys');

// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${keys.google}&callback=initMap`;
script.defer = true;
script.async = true;

// Attach your callback function to the `window` object
let map;

window.initMap = function() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
  // JS API is loaded and available
};

// Append the 'script' element to 'head'
document.head.appendChild(script);