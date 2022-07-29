import React from "react";
import "./App.css";
import List from "./components/List";
import Timer from "./components/Timer";
import Map from "./components/Map";
import Cost from "./components/Cost";

import roadtrip from "./roadtrip.svg";
import Plans from "./components/Plans";

function App() {
  return (
    <div className="App">
      <div className="roadtrip-img">
        <img src={roadtrip} />
      </div>
      <Timer />
      <Cost />
      <Plans />
      <List />
      <Map />
    </div>
  );
}

export default App;
