import React, { useState } from "react";
import "./Admin.css";

export default function Admin() {
  const [location, setLocation] = useState<string>();
  const [image, setImage] = useState<any>();

  const [reqResponse, setResponse] = useState<any>();

  function uploadLocation() {
    setResponse("Hochladen...");
    fetch("https://trip.jo-dev.de/api/location.php?loc=" + location).then(
      (response) => {
        console.log(response);
        setResponse("Location hochgeladen!");
        setTimeout(() => setResponse(""), 3000);
      }
    );
  }

  function uploadImage() {
    setResponse("Hochladen...");
    var date = new Date().toISOString();

    var blob = image.slice(0, image.size, "image/jpg");
    var datename = new File([blob], date + ".jpg", {
      type: "image/jpg",
    });

    const data = new FormData();
    data.append("fileToUpload", datename);
    fetch("https://trip.jo-dev.de/api/image.php", {
      method: "POST",
      body: data,
    }).then((response) => {
      console.log(response);
      setResponse("Foto hochgeladen!");
      setTimeout(() => setResponse(""), 3000);
    });
  }

  return (
    <div className="adminContainer">
      <div className="adminTitle">ADMIN PANEL</div>
      <div className="adminContent">
        <div className="adminCost">
          <p className="adminHeader">Kosten</p>
          <input type={"tel"} placeholder="Preis" />
          <select name="Gezahlt">
            <option value={"Anna"}>Anna</option>
            <option value={"Liv"}>Liv</option>
            <option value={"Dave"}>Dave</option>
            <option value={"Jojo"}>Jojo</option>
          </select>
          <button>Speichern</button>
        </div>
        <div className="adminLocation">
          <p className="adminHeader">Aktueller Ort</p>
          <input
            type={"text"}
            placeholder={"Ortsname"}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button onClick={() => uploadLocation()}>Speichern</button>
        </div>
        <div className="adminSelfie">
          <p className="adminHeader">Fotos</p>
          <input
            type={"file"}
            accept={".jpg"}
            onChange={(e) => {
              setImage(e.target.files![0]);
            }}
          />
          <button onClick={() => uploadImage()}>Speichern</button>
          <p>{reqResponse}</p>
        </div>
      </div>
    </div>
  );
}
