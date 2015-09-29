# RHMAP Weather Service

# Group Weather Service API

# weather-service/city [/weather-service/city]

'weather-service' endpoint.

## weather [POST]

'weather-service/city' endpoint.

+ Request (application/json)
    + Body
            {
              "city": "Philadelphia",
              "country": "US"
            }

+ Response 200 (application/json)
    + Body
            { "coord": { "lon": -75.16, "lat": 39.95 }, "weather": [ { "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }, { "id": 701, "main": "Mist", "description": "mist", "icon": "50d" } ], "base": "cmc stations", "main": { "temp": 24.31, "pressure": 1014, "humidity": 94, "temp_min": 22, "temp_max": 27 }, "wind": { "speed": 4.76, "deg": 91.5 }, "rain": { "1h": 0.25 }, "clouds": { "all": 40 }, "dt": 1443560087, "sys": { "type": 1, "id": 2361, "message": 0.0154, "country": "US", "sunrise": 1443524133, "sunset": 1443566713 }, "id": 4560349, "name": "Philadelphia", "cod": 200 }

# weather-service/location [/weather-service/location]

'weather-service/location' endpoint.

## weather [POST]

'weather-service/location' endpoint.

+ Request (application/json)
    + Body
            {
              "latitude": 51,
              "longitude": 3.74
            }

+ Response 200 (application/json)
    + Body
            { "coord": { "lon": 3.75, "lat": 51 }, "weather": [ { "id": 800, "main": "Clear", "description": "Sky is Clear", "icon": "01n" } ], "base": "cmc stations", "main": { "temp": 11.72, "pressure": 1034, "humidity": 71, "temp_min": 10, "temp_max": 12.78 }, "wind": { "speed": 4.6, "deg": 70 }, "clouds": { "all": 0 }, "dt": 1443562420, "sys": { "type": 3, "id": 4839, "message": 0.0126, "country": "BE", "sunrise": 1443505379, "sunset": 1443547581 }, "id": 2789733, "name": "Provincie Oost-Vlaanderen", "cod": 200 }
