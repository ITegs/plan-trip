import React, { useEffect, useState } from "react";
import "./Map.css";

export default function Map() {
  const [expand, setExpand] = useState(false);

  const [liste, setListe] = useState([]);

  const getData = () => {
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
        // console.log(myJson);
        setListe(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mapContainer">
      <p onClick={() => setExpand(!expand)}>Karte</p>
      <iframe
        title="map"
        className={!expand ? "invisible" : ""}
        src={"https://www.google.de/maps?output=embed&q=" + liste[0]}
        loading="lazy"
      ></iframe>
    </div>
  );
}
