import React, { useEffect, useState } from "react";
import "./List.css";

export default function List() {
  const [expand, setExpand] = useState(false);

  const [liste, setListe] = useState([]);

  const getData = () => {
    fetch("variables/list.json", {
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
    <div className="listContainer">
      <div className="title" onClick={() => setExpand(!expand)}>
        Wichtige Sachen
      </div>
      {expand && (
        <ul className="list">
          {liste.map((l) => (
            <li key={l} className="item">
              {l}
              <input type={"checkbox"} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
