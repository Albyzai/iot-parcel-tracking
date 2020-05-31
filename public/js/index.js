$(document).ready(() => {
  const button = document.getElementById("testbutton");
  let tbody

  button.addEventListener("click", (e) => {
    e.preventDefault()
    const minTemp = document.getElementById('minTemp').value
    const maxTemp = document.getElementById('maxTemp').value
    const maxAcc = document.getElementById('maxAcc').value
    fetchData().then((data) => {
      createDataList(data, minTemp, maxTemp, maxAcc);
      createChart(data)
    });
  });
  

  const fetchData = () => {
    return $.ajax({
      url: "http://b7e1ae648528.ngrok.io/sensors",
      type: "GET",
    });
  };

  const createDataList = (data, minTemp, maxTemp, maxAcc) => {
    if(tbody){
        tbody.remove()
    }
    const table = document.getElementById("table");
    tbody = document.createElement("tbody");

    const parcelPath = [];

    for (entry of data) {
      const row = document.createElement("tr");
      const temp = calcTemperature(entry.temperature);
      const acceleration = entry.acceleration;
      const lat = entry.location.lat;
      const long = entry.location.long;
      const date = new Date(entry.timestamp);

      const time =
        date.addHours(1).toLocaleTimeString("da-DK") +
        " " +
        date.toLocaleDateString();

      //const dataset = [time, temp, acceleration]
      const dataset = [];

      // console.log('displacement', calcDisplacement(accX, accY, accZ))
      if (lat !== 0 && long !== 0) {
        //  create data array for google maps polyline
        const latlng = new google.maps.LatLng(lat, long);
        parcelPath.push(latlng);
      }
      getAddressLocation(lat, long).then((location) => {
        if (lat !== 0 && long !== 0) {
            const locationName = location.results[0].formatted_address
        //   const locationName = `${roadName} ${streetNumber}, ${city}`;
          const dataset = [time, locationName, temp, acceleration];
          const data = {
              time,
              locationName,
              temp,
              acceleration
          }

            //   
          const entries = Object.entries(data);

          for(entry of entries) {
              const key = entry[0]
              const value = entry[1]
              const td = document.createElement('td')
              const text = document.createElement('span')
              text.innerText = value
              td.appendChild(text)

        

              if(key === 'temp' && value > maxTemp && maxTemp || key === 'temp' && value < minTemp && minTemp|| key === 'acceleration' && value > maxAcc && maxAcc){
                td.className = 'error'
                const warningSign = document.createElement('i')
                warningSign.className = 'attention icon'
                td.appendChild(warningSign)

              }
              row.appendChild(td)
          }
          

          console.log('data', data);

        //   for (prop of dataset) {
        //     //    <td class="error"><i class="attention icon"></i> Classified</td>
        //     const td = document.createElement("td");
        //     td.innerText = prop;
        //     row.appendChild(td);
        //   }
        }

        tbody.appendChild(row);
      });
    }
    table.appendChild(tbody);
    drawPolyLine(parcelPath);
  };

  Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + h * 60 * 60 * 1000);
    return this;
  };

  function getAddressLocation(lat, long) {
    return $.ajax({
      url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyD598bfaL-Cy6gRQGwXCzBAOn3EUBRQKZM`,
      type: "POST",
    });
  }

  //  vibration / movement
  const calcDisplacement = (x, y, z) => {
    return x + y + z;
  };

  //  temperature
  const calcTemperature = (temp) => {
    return temp.toFixed(1);
  };
});
