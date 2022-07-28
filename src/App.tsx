import React from "react";
import "./App.css";
import Timer from "./components/Timer";

import roadtrip from "./roadtrip.svg";

function App() {
  return (
    <div className="App">
      <div className="roadtrip-img">
        <img src={roadtrip} />
      </div>
      <Timer />
    </div>
  );
}

export default App;
