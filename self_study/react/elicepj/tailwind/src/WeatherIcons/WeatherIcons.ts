
import React from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiLightning } from 'react-icons/wi';
import { FiCloudDrizzle } from "react-icons/fi";

export default function WeatherIcon({ weatherId }) {
  const getIcon = () => {
    switch (true) {
      case weatherId >= 200 && weatherId < 300: // Thunderstorm
        return <WiLightning />;
      case weatherId >= 300 && weatherId < 400: // Drizzle
        return <FiCloudDrizzle />;
      case weatherId >= 500 && weatherId < 600: // Rain
        return <WiRain style={{ color: 'blue' }} />;
      // Add more cases for other weather conditions as needed
      default:
        return <WiDaySunny style={{ color: 'orange' }} />;
    }
  };

  return (
    <div>{getIcon()}</div>
    );
};


