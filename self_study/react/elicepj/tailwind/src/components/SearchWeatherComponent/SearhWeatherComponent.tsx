import React from 'react'
import { WiDaySunny, WiCloudy } from 'react-icons/wi'

export default function SearchWeatherComponent({ data }) {
  return (
    <>
      <div style={{ marginTop: '24px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>
          {data.name} 날씨
        </h1>
        <div>온도: {data.main.temp}°C</div>
        <div>날씨 : 
            {data.weather[0].main === 'Clear' ? ( <div>맑음</div>) : ( <div>흐림</div>)}
            </div>
        <div>
          {data.weather[0].main === 'Clear' ? (
            <WiDaySunny style={{ color: 'orange' }} />
          ) : (
            <WiCloudy style={{ color: 'gray' }} />
          )}
        </div>
      </div>
    </>
  )
}
