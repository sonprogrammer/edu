import { useState, useEffect } from 'react'
import { WiDaySunny, WiCloudy } from 'react-icons/wi'
import axios from 'axios'
import { Container, Title, Lon, Lat, Temp, Weather } from './styles'
import { NavbarComponent, SearchWeatherComponent, SideBgComponent } from './components'

function App() {
  const [show, setShow] = useState(false)
  const [coords, saveCoords] = useState(null)
  const [temp, setTemp] = useState(null)
  const [weather, setWeather] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchedWeather, setSearchedWeather] = useState(null)
  const [icon, setIcon] = useState(null)
  const [city, setCity] = useState(null)


  function handleclick() {
    setShow(!show)
  }

  function handleGeoSucc(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const coordsObj = {
      latitude,
      longitude,
    }
    saveCoords(coordsObj)
    getWeather(latitude, longitude)
  }

  function handleGeoErr(err) {
    console.log('geo err! ' + err)
  }

  function requestCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucc, handleGeoErr)
  }

  async function getWeather(lat, lon) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=794adddae058bc0ae849863608c95080&units=metric`
      )
      const data = response.data

      const temperature = data.main.temp
      const weatherType = data.weather[data.weather.length - 1].main
      const weatherIcon = data.weather[0].icon
      const myCity = data.name
      setIcon(weatherIcon)
      setTemp(temperature)
      setWeather(weatherType)
      setCity(myCity)
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error)
    }
  }

  async function searchWeather() {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=794adddae058bc0ae849863608c95080&units=metric`
      )
      const data = response.data
      setSearchedWeather(data)
    } catch (error) {
      alert('도시명을 확인해주세요')
    }
  }

  useEffect(() => {
    requestCoords()
  }, [])

  return (
    <>
       <Container
        style={{
          boxSizing: 'border-box',
          width: '100%',
          display: 'flex',
        }}
      >
        <NavbarComponent style={{ flex: 1 }} />
        <SideBgComponent onSearch={searchWeather} setSearchQuery={setSearchQuery} />
      </Container>
     
      <Container
        style={{
          boxSizing: 'border-box',
          width: '100%',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center',
        }}>

        {show ? <Title
          onClick={handleclick}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'red'
          }}>
          Close my weather
        </Title> :
        <Title
          onClick={handleclick}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}>
          See my weather
        </Title> }
        {show && coords && (
          <div>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold'}}>my location : {city}</h1>
          </div>
        )}
        {show && temp !== null && weather !== null && (
          <div style={{ marginTop: '24px' }}>
            <Temp>temp: {temp}°C</Temp>
            <Weather>
             <img className="img-fluid" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
            </Weather>
          </div>
        )}
        {searchedWeather && <SearchWeatherComponent data={searchedWeather} />
        }  
      </Container>
    </>
  )
}

export default App