const url = 'https://api.openweathermap.org/data/2.5/weather/?lat=53.926169699999996&lon=27.5940867&units=metric&APPID=b86a74243eec107ed6ecb4b58312f273'

const api = {
   "coord":{
      "lon": 27.5941,
      "lat": 53.9262
   },
   "weather":[
      {  "id": 803,
         "main": "Clouds",
         "description": "broken clouds",
         "icon": "04d"
      }
   ],
   "base": "stations",
   "main": {
      "temp": 31.87,
      "feels_like": 33.03,
      "temp_min": 31.87,
      "temp_max": 31.87,
      "pressure": 1017,
      "humidity": 45, 
      "sea_level": 1017,
      "grnd_level": 993
   },
   "visibility": 10000,
   "wind": {
      "speed": 3.65,
      "deg": 183,
      "gust": 5.14
   },
   "clouds": {
      "all": 67
   },
   "dt": 1624452352,
   "sys": {
      "type": 1,
      "id": 8939,
      "country": "BY",
      "sunrise": 1624412284,
      "sunset": 1624473931
   },
   "timezone": 10800, 
   "id": 625504, 
   "name": "Malyavshchina",
   "cod": 200
}