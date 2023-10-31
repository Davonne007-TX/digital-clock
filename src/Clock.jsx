import { useState, useEffect } from "react";
import React from "react";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setCurrentTime(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return <div className="time">{currentTime}</div>;
}
