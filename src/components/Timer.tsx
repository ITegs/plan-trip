import React, { useEffect, useState } from "react";
import "./Timer.css";

export default function Timer() {
  const date = new Date("2022-08-15");

  const [remDays, setRemDays] = useState<number>(0);
  const [remHours, setRemHours] = useState<number>(0);
  const [remMinutes, setRemMinutes] = useState<number>(0);
  const [remSeconds, setRemSeconds] = useState<number>(0);

  useEffect(() => {
    calcTime();
  });

  const calcTime = () => {
    const now = new Date();
    // set the time difference
    const diff = date.getTime() - now.getTime();

    // calculate the days, hours, minutes and seconds
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = (Math.floor(diff / (1000 * 60 * 60)) % 24) - 2;
    const m = Math.floor(diff / (1000 * 60)) % 60;
    const s = Math.floor(diff / 1000) % 60;

    // set the state with the new values
    setRemDays(d);
    setRemHours(h);
    setRemMinutes(m);
    setRemSeconds(s);

    // set the interval to call the function again in 1 second
    setTimeout(calcTime, 1000);
  };

  return (
    <div className="container">
      <div className="time">
        <div className="days">
          <u className="num">{remDays}</u> Tage
        </div>
        <div className="hours">
          <u className="num">{remHours}</u> Stunden
        </div>
        <div className="minutes">
          <u className="num">{remMinutes}</u> Minuten
        </div>
        <div className="seconds">
          <u className="num">{remSeconds}</u> Sekunden
        </div>
      </div>
    </div>
  );
}
