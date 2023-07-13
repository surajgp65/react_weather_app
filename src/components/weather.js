import React from "react";

const WeatherCard = ({ current, location, forecast }) => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="weather-card">
            <h1>Today</h1>
            <p>{location.name + ", " + location.region}</p>
            <p>{current.temp_c + "°C"}</p>
            <p>{current.condition.text}</p>
            <img
              src={current.condition.icon}
              alt="weather_icon"
              style={{ width: "3rem" }}
            />
          </div>
        </div>
      </div>
      {/* <div className="row mt-3">
        {forecast.forecastday.map((item, index) => (
          <div className="col-3 border border-info rounded mx-1" key={index}>
            <h4>{item.date}</h4>
            <p>{item.day.avgtemp_c + "°C"}</p>
            <p>{item.day.condition.text}</p>
            <img
              src={item.day.condition.icon}
              alt="weather_icon"
              style={{ width: "3rem" }}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default WeatherCard;
