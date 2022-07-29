import React, { useEffect, useState } from "react";
import "./Cost.css";

export default function Cost() {
  const [expand, setExpand] = useState(false);

  const [liste, setListe] = useState([]);

  const getData = () => {
    fetch("variables/cost.json", {
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
    <div className="costContainer">
      <div className="title" onClick={() => setExpand(!expand)}>
        Kosten
      </div>
      <ul className={expand ? "list" : "invisible"}>
        <li className="costItem">
          Anna: <u>{liste[0]}€</u>
        </li>
        <li className="costItem">
          Liv: <u>{liste[1]}€</u>
        </li>
        <li className="costItem">
          Dave: <u>{liste[2]}€</u>
        </li>
        <li className="costItem">
          Jojo: <u>{liste[3]}€</u>
        </li>
      </ul>
    </div>
  );
}
