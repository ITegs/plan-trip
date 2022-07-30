import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import Timer from "./components/Timer";
import Map from "./components/Map";
import Cost from "./components/Cost";

import roadtrip from "./roadtrip.svg";
import Plans from "./components/Plans";
import Admin from "./components/Admin";
import Photos from "./components/Photos";

function App() {
  const [showInput, setShowInput] = useState(false);

  const [user, setUser] = useState(Number(localStorage.getItem("userlevel")));

  const validate = (e: string) => {
    //! CRITICAL!
    switch (e) {
      case "5555":
        console.log("Authorized Nr. 1");
        setUser(1);
        localStorage.setItem("userlevel", "1");
        break;
      case "8451":
        console.log("Authorized Nr. 2");
        setUser(2);
        localStorage.setItem("userlevel", "2");
        break;
      case "0605":
        console.log("Authorized Nr. 3");
        setUser(3);
        localStorage.setItem("userlevel", "3");
        break;
      case "0000":
        console.log("Logged out!");
        setUser(0);
        localStorage.setItem("userlevel", "0");
        break;

      default:
        break;
    }
  };

  return (
    <div className="App">
      <div className="roadtrip-img">
        <img src={roadtrip} onDoubleClick={() => setShowInput(!showInput)} />
      </div>
      {showInput && (
        <div className="login">
          <input
            type={"tel"}
            autoFocus={true}
            maxLength={4}
            placeholder="Passwort"
            onChange={(e) => validate(e.target.value)}
          />
          <p>Willkommen lvl. {user}</p>
        </div>
      )}
      <Timer />
      {user >= 1 && <Photos />}
      {user >= 2 && <Cost />}
      <Plans />
      {user >= 2 && <List />}
      <Map />
      {user == 3 && <Admin />}
      <div className="footer" />
    </div>
  );
}

export default App;
