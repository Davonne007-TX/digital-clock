import { useState, useEffect } from "react";
import React from "react";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState();
  const [currentDate, setCurrentDate] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setCurrentTime(date.toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const dateInterval = setInterval(() => {
      const todaysDate = new Date();
      setCurrentDate(todaysDate.toDateString());
    }, 1000);
  }, []);

  return (
    <div className="time">
      {currentTime}
      <br />
      {currentDate}
      <div>
        <img src="/images/jack.jpg" className="jackOLantern" />
      </div>
    </div>
  );
}
