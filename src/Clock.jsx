import { useState } from "react";
import React from "react";

export default function Clock() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  return (
    <>
      <h1>{currentTime}</h1>
    </>
  );
}
