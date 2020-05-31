const GeoLocationAPI = 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyD598bfaL-Cy6gRQGwXCzBAOn3EUBRQKZM'


const requestLocation = () => {

    const accessPoint = {
        macAddress: null,
        signalStrength: null,
        age: 0,
        channel: 11,
        signalToNoiseRatio: null
    }

    const cellTower = {
        cellId: 0,
        locationAreaCode: 0,
        mobileCountryCode: 0,
        mobileNetworkCode: 0,
        age: 0,
        signalStrength: 0,
        timingAdvance: 0
    }

    const request = {
        homeMobileCountryCode: 45,
        homeMobileNetworkCode: null,
        radioType: null,
        carrier: null,
        considerIp: null,
        cellTowers: [

        ],
        wifiAccessPoints: [

        ],
    }

    $.ajax({
        url: GeoLocationAPI,
        method: 'POST',
        data: null
    })
}