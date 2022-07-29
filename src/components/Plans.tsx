import React, { useEffect, useState } from "react";

export default function Plans() {
  const [expand, setExpand] = useState(false);

  const [liste, setListe] = useState([]);

  const getData = () => {
    fetch("variables/plans.json", {
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
        Pläne
      </div>
      <ul className={expand ? "list" : "invisible"}>
        {liste.map((l) => (
          <li key={l} className="item">
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}
