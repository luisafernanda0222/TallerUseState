import React, { useState } from "react";

const coloresAbsolutos = [
  "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF",
  "#000000", "#FFFFFF", "#808080", "#800000", "#808000", "#800080",
  "#008080", "#C0C0C0", "#FFA500", "#A52A2A"
];

export function ColorChanger({ isDarkMode }) {
  const [color, setColor] = useState("#FFFFFF");

  return (
    <div className={`color-container ${isDarkMode ? "dark-container" : ""}`}>
      <div className="color-box" style={{ backgroundColor: color }}>
        <p>Color actual</p>
      </div>
      <button onClick={() => {
        const randomColor = coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)];
        setColor(randomColor);
      }}>
        Color general
      </button>
    </div>
  );
}