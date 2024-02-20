import React, { useState, useEffect } from "react";
import WeatherCard from "../components/weather";
import fetchDataFromAPI from "../services/api";
import "../styles/weather.css";

const WeatherForecast = () => {
  const [weatherData, setWeatherData] = useState([]);
  var [location, setLocation] = useState("Mumbai");

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetchDataFromAPI("forecast.json", {
          q: location,
          days: "3",
        });
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeatherData();
  }, [location]);

  return (
    <div>
      <h1 className="mb-3">Weather Forecast</h1>

      <input
        type="text"
        className="form-control mb-2"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
      />

      <div className="weather-cards">
        {weatherData && weatherData.current && (
          <WeatherCard
            current={weatherData.current}
            day={"Today"}
            location={weatherData.location}
            forecast={weatherData.forecast}
          />
        )}
      </div>
    </div>
  );
};

export default WeatherForecast;
