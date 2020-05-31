
$(document).ready(() => {

})

const createChart = (data) => {
    const tempData = []
    const accData = []
    const timestampData = []
    for (entry of data) {
        const acceleration = entry.acceleration;
        const temperature = entry.temperature
        const timestamp = new Date(entry.timestamp).addHours(1).toLocaleTimeString('da-DK')
        accData.push(acceleration)
        tempData.push(temperature)
        timestampData.push(timestamp)
    }

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: timestampData,
            datasets: [{
                label: 'Temperature',
                borderColor: 'rgb(255, 99, 132)',
                data: tempData
            },
        {
            label: 'Acceleration',
            borderColor: 'rgb(0, 0, 0)',
            data: accData
        }]
        },
    
        // Configuration options go here
        options: {}
    });

}