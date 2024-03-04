
import React from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiLightning } from 'react-icons/wi';
import { FiCloudDrizzle } from "react-icons/fi";

export default function WeatherIcon({ weatherId }) {
  const getIcon = () => {
    switch (true) {
      case weatherId >= 200 && weatherId < 300: // 번개
        return <WiLightning />;
      case weatherId >= 300 && weatherId < 400: // 오송송
        return <FiCloudDrizzle />;
      case weatherId >= 500 && weatherId < 600: // 
        return <WiRain style={{ color: 'blue' }} />;
      //추가하려면 case문으로 추가하기
      default:
        return <WiDaySunny style={{ color: 'orange' }} />;
    }
  };

  return (
    <div>{getIcon()}</div>
    );
};


