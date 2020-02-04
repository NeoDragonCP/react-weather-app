import React, { useState } from 'react';
import { SearchBox, WeatherDetails } from '../';
import './WeatherCard.css';

const WeatherCard = () => {

  const api = {
    key: "9a75684935343624a4629374c8453b13",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const [weather, setWeather] = useState('');
  const [weatherType, setWeatherType] = useState('');
  const [tempature, setTempature] = useState(0);

  const weatherFetchedCallback = (weatherData) => {
    //console.log("Got data from search:");
    //console.log(weatherData);

    if (weatherData == null) {
      setWeather("undefined");
      return
    };

    // Set weather if it's not undefined
    if (weatherData.main !== "undefined") {
      setWeather(weatherData);
      setWeatherType(weatherTypeBuilder(weatherData.weather[0].main));
      setTempature(Math.round(weatherData.main.temp));
    }

  }

  const weatherTypeBuilder = (type) => {

    if (type === undefined) {
      return '';
    }
    else if (type === 'Raining') {
      return 'raining';
    }
    else if (type === 'Clear') {
      return 'clear';
    }
    else if (type === 'Clouds') {
      return 'cloudy';
    }
    else {
      // default, return clear
      return '';
    }
  }

  return (
    <div className="weather-card">
      <SearchBox api={api} parentCallback={weatherFetchedCallback} />
      <WeatherDetails
        locationText={weather.name}
        weatherType={weatherType}
        temp={tempature}
      />
      <WeatherIcon type={weatherType} />
    </div>
  )

}

// Simple Components
const WeatherIcon = ({ type }) => {
  return (
    <React.Fragment>
      <div className={`weather-icon ${type}`}></ div>
      <div className={`weather-text`}>{`${type}`}</ div>
    </React.Fragment>
  )
}


export default WeatherCard;