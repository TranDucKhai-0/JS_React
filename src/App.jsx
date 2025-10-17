import { useState, useEffect } from 'react'
import viteLogo from '/vite.svg'
import myImage from './assets/z3831389084196_46995febf9415deb3cd72dad528c98eb.jpg'
import './App.css'
import { getWeatherIcon } from './Librari/weather.jsx';


function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    // 🌤️ Thời tiết hiện tại
    fetch("https://api.open-meteo.com/v1/forecast?latitude=10.75&longitude=106.67&current_weather=true")
      .then((res) => res.json())
      .then((data) => setWeather(data.current_weather))
      .catch((err) => console.error("Lỗi:", err));

    // 📅 Dự báo 7 ngày
    fetch("https://api.open-meteo.com/v1/forecast?latitude=10.75&longitude=106.67&daily=temperature_2m_max,windspeed_10m_max,weathercode&timezone=auto")

      .then((res) => res.json())
      .then((data) => setForecast(data.daily))
      .catch((err) => console.error("Lỗi:", err));
  }, []);

  return (
    <>
      <div className="header">
        <h1>Trần Đức Khải</h1>
        <img src={myImage} alt="Hình người đẹp" />
      </div>

      <div className="app_weather">
        <h1>🌤️ Dự báo thời tiết TP.HCM</h1>

        {weather ? (
          <div className="weather-box">
            <p>Thời tiết: {getWeatherIcon(weather.weathercode)}</p>
            <p>🌡️ Nhiệt độ hiện tại: {weather.temperature}°C</p>
            <p>💨 Tốc độ gió: {weather.windspeed} km/h</p>
          </div>
        ) : (
          <p>Đang tải dữ liệu thời tiết...</p>
        )}


        <h2>📅 Dự báo 7 ngày</h2>
        {forecast ? (
          <div className="forecast">
            {forecast.time.map((date, index) => (
              <div key={date} className="day">
                <p><b>{date}</b></p>
                <p>Thời tiết: {getWeatherIcon(forecast.weathercode[index])}</p>
                <p>Nhiệt độ tối đa: {forecast.temperature_2m_max[index]}°C</p>
                <p>Gió tối đa: {forecast.windspeed_10m_max[index]} km/h</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Đang tải dự báo...</p>
        )}
      </div>
    </>
  )
}

export default App
