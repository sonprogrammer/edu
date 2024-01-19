import React from 'react'
import { WiDaySunny, WiCloudy } from 'react-icons/wi'

export default function SearchWeatherComponent({ data }) {
  const icon = data.weather[0].icon
  return (
    <>
      <div style={{ marginTop: '24px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>
          {data.name} weather
        </h1>
        <div>temp: {data.main.temp}°C</div>
        <div>weather : 
            {data.weather[0].main}
            {/* === 'Clear' ? ( <span style={{marginLeft: '4px'}}>맑음</span>) : ( <span style={{marginLeft: '4px'}}>흐림</span>)} */}
            </div>
        <div style={{display: 'flex', textAlign: 'center', justifyContent: 'center'}}>
          <img className="img-fluid" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />

        </div>
      </div>
    </>
  )
}
