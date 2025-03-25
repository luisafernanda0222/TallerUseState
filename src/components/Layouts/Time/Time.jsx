import React, { useState, useEffect } from "react";

export function Time() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, seconds]);

  return (
    <div className="time-counter">
      <h1>Tiempo: {seconds} segundos</h1>
      <button onClick={() => setIsRunning(true)}>Iniciar</button>
      <button onClick={() => {
        setIsRunning(false);
        setSeconds(0);
      }}>Parar</button>
    </div>
  );
}