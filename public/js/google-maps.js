
// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD598bfaL-Cy6gRQGwXCzBAOn3EUBRQKZM&callback=initMap`;
script.defer = true;
script.async = true;

// Attach your callback function to the `window` object
let map;

window.initMap = function() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 55.394005, lng: 10.4088182},
        zoom: 10
      });
      console.log('initmap')
      const button = document.getElementById('testbutton')
      // button.click()
};

const drawPolyLine = (latLongArray) => {

  console.log('drawing polyline')
  const path = new google.maps.Polyline({
      path: latLongArray,
      geodesic: true,
      strokeColor: '#ff0000',
      strokeOpacity: 1,
      strokeWeight: 2,
  })

  path.setMap(map)
}




// Append the 'script' element to 'head'
document.head.appendChild(script);