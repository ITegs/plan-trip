import React, { useEffect, useState } from "react";
import "./Main.css";

export default function Main() {
  const [location, setLocation] = useState([]);
  const [weather, setWeather] = useState({
    coord: {
      lon: 11.7527,
      lat: 47.7097,
    },
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "Keine Daten Verfügbar",
        icon: "04d",
      },
    ],
    base: "stations",
    main: {
      temp: 0,
      feels_like: 23.81,
      temp_min: 23.42,
      temp_max: 24.91,
      pressure: 1019,
      humidity: 47,
      sea_level: 1019,
      grnd_level: 937,
    },
    visibility: 10000,
    wind: {
      speed: 2.49,
      deg: 292,
      gust: 5.29,
    },
    clouds: {
      all: 94,
    },
    dt: 1659263616,
    sys: {
      type: 2,
      id: 2012314,
      country: "DE",
      sunrise: 1659239309,
      sunset: 1659293407,
    },
    timezone: 7200,
    id: 2823679,
    name: "Tegernsee",
    cod: 200,
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
    fetch("https://trip.jo-dev.de/api/weather.php").then(function () {
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
  }, []);

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
