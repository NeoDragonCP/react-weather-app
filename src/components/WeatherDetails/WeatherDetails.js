import React from 'react';
import './WeatherDetails.css';

const WeatherDetails = ({ locationText, weatherType, temp }) => {


  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;

  }

  let renderEverything = false;
  let activeClassText = '';
  if (locationText !== undefined) {
    renderEverything = true;
    activeClassText = 'active';
  }
  if (renderEverything === true) {
    // Render out the fetched details
    return (
      <div className={`weather-details ${weatherType} ${activeClassText}`}>
        <p>{/* Used to have header text here*/}</p>
        <div className="temp-text">{`${temp}°C`}</div>
        <div className="location-text">{`${locationText}`}</div>
        <div className="date-text">{dateBuilder(new Date())}</div>
      </div>
    )
  }
  else {
    // render out starting data
    return (
      <div className={`weather-details`}>
        <p>Search for a location below</p>
        <div className="temp-text"></div>
        <div className="date-text">{dateBuilder(new Date())}</div>
      </div>
    )
  }


}

export default WeatherDetails;