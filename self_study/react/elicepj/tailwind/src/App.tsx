import { useState, useEffect } from 'react';
import { WiDaySunny, WiCloudy } from 'react-icons/wi';
import axios from 'axios';  
import { Container, Title, Lon, Lat, Temp, Weather } from './styles';
import { NavbarComponent, SearchWeatherComponent } from './components';


function App() {
  const [show, setShow] = useState(false)
  const [coords, saveCoords] = useState(null);
  const [temp, setTemp] = useState(null);                                                    
  const [weather, setWeather] = useState(null);
  const [searchQuery, setSearchQuery] = useState('')
  const [searchedWeather, setSearchedWeather] = useState(null)


  function handleclick(){
    setShow(!show)
  }

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

  async function searchWeather(){
    try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=794adddae058bc0ae849863608c95080&units=metric`)
      const data = response.data;
      console.log(data)
      setSearchedWeather(data)
    }catch(error){
      console.log('error occured', error)
    }
  }

  useEffect(() => {
    requestCoords();
  }, []);

  return (
    <>
    <NavbarComponent onSearch={searchWeather} setSearchQuery={setSearchQuery}/>
    <Container style={{boxSizing: 'border-box',width: '100%', alignItems: 'center', display:'flex', flexDirection:'column', justifyContent:'center', height:'100vh', textAlign:'center'}}>
      <Title onClick={handleclick} style={{alignItems:'center', justifyContent:'center', cursor: 'pointer'}}>Weather App</Title>
      {show && coords && (
        <div>
          <h1 style={{fontSize: '36px', fontWeight:'bold'}}>my location</h1>
          <Lat>경도: {coords.latitude}</Lat>
          <Lon>위도: {coords.longitude}</Lon>
        </div>
      )}
      {show && temp !== null && weather !== null && (
        <div style={{marginTop: '24px'}}>
          <Temp>온도: {temp}°C</Temp>
          <Weather>{weather === 'Clear' ? <WiDaySunny style={{ color: 'orange'}}/> : <WiCloudy style={{ color: 'gray'}}/>}</Weather>
        </div>
      )}
              {searchedWeather && <SearchWeatherComponent data={searchedWeather} />}

    </Container>
    </>
  );
}

export default App;

