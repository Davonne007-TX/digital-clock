import { useState, useEffect } from "react";
import React from "react";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setCurrentTime(date.toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className="time">{currentTime}</div>;
}
