import React, { useState } from "react";
import { Home } from "./components/Pages/Home/Home";

export function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
}