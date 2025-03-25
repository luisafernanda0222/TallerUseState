import React, { useState } from "react";

export function ModeDark({ isDarkMode, setIsDarkMode }) {
  return (
    <div className="mode-container">
      <h1>{isDarkMode ? "Modo Oscuro" : "Modo Claro"}</h1>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Cambiar a {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
      </button>
    </div>
  );
}
