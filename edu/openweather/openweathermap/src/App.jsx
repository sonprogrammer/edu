import { useState, useEffect } from 'react';
import { WiDaySunny, WiCloudy } from 'react-icons/wi';
import axios from 'axios';  // axios import 추가
import { Container } from './styles';

function App() {
  const [coords, saveCoords] = useState(null);
  const [temp, setTemp] = useState(null);
  const [weather, setWeather] = useState(null);

  function handleGeoSucc(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
      latitude,
      longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
  }

  function handleGeoErr(err) {
    console.log("geo err! " + err);
  }

  function requestCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucc, handleGeoErr);
  }

  async function getWeather(lat, lon) {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=794adddae058bc0ae849863608c95080&units=metric`);
      const data = response.data;
      console.log(data);

      const temperature = data.main.temp;
      const weatherType = data.weather[data.weather.length - 1].main;
      setTemp(temperature);
      setWeather(weatherType);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  useEffect(() => {
    requestCoords();
  }, []);

  return (
    <Container style={{boxSizing: 'border-box',width: '100%', alignItems: 'center', display:'flex', flexDirection:'column', justifyContent:'center', height:'100vh', textAlign:'center'}}>
      <h1 style={{alignItems:'center', justifyContent:'center'}}>Weather App</h1>
      {coords && (
        <div>
          <p>경도: {coords.latitude}</p>
          <p>위도: {coords.longitude}</p>
        </div>
      )}
      {temp !== null && weather !== null && (
        <div>
          <p>온도: {temp}°C</p>
          <p>날씨: {weather === 'Clear' ? <WiDaySunny style={{fontSize: '100px'}}/> : <WiCloudy />}</p>
        </div>
      )}
    </Container>
  );
}

export default App;
