import React from "react";
import "./Map.css";

export default function Map() {
  return (
    <div className="mapContainer">
      <p>Karte</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d10203537.04719872!2d-0.39313681901719033!3d51.364496682978604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x479d8c219a91bd33%3A0x41d25a40937a060!2sTegernsee!3m2!1d47.7131524!2d11.758016!4m5!1s0x47c5f172d496085d%3A0xbc554bec4a318ea7!2sWijk%20aan%20Zee%2C%20Niederlande!3m2!1d52.4916911!2d4.593325!4m5!1s0x464b20a619e30ce9%3A0xdde847ab4e4ae9d1!2sEsbjerg%2C%20D%C3%A4nemark!3m2!1d55.476465999999995!2d8.459405!4m5!1s0x4652533c5c803d23%3A0x4dd7edde69467b8!2sKopenhagen%2C%20D%C3%A4nemark!3m2!1d55.676096799999996!2d12.5683372!5e0!3m2!1sde!2sde!4v1659035943432!5m2!1sde!2sde"
        loading="lazy"
      ></iframe>
    </div>
  );
}
