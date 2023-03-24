import React, { useEffect, useState } from "react";
import "./Main.css";

export default function Main() {
  const [location, setLocation] = useState([]);
  const [weather, setWeather] = useState({
    weather: [
      {
        description: "Keine Daten Verfügbar",
        icon: "04d",
      },
    ],
    main: {
      temp: 0,
    },
  });

  const getLocation = () => {
    fetch("api/location.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        setLocation(myJson[0]);
        getWeather();
      });
  };

  const getWeather = () => {
    fetch("https://YOUR-SERVER.com/weather.php").then(function () {
      fetch("api/weather.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (response) {
          // console.log(response);
          return response.json();
        })
        .then(function (myJson) {
          setWeather(myJson["weather"]);
        });
    });
  };

  useEffect(() => {
    getLocation();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="mainContainer">
      <div className="mainTitle">
        Aktueller Ort:
        <br />
        <u>{location}</u>
      </div>
      <div className="weather">
        <p className="weatherTitle">Wetter:</p>
        <p className="temperature">{Math.round(weather["main"]["temp"])}°</p>
        <p className="conditions">
          <img
            src={
              "http://openweathermap.org/img/wn/" +
              weather["weather"][0]["icon"] +
              "@2x.png"
            }
            alt="icon"
          />
          <p>{weather["weather"][0]["description"]}</p>
        </p>
      </div>
    </div>
  );
}
