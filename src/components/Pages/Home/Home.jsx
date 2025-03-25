import React from "react";
import {ModeDark} from "../../Layouts/ModeDark/ModeDark.jsx";
import {LikeDislike} from "../../Layouts/LikeDisLike/LikeDisLike.jsx";
import {ColorChanger} from "../../Layouts/ColorChanger/ColorChanger.jsx";
import {Time} from "../../Layouts/Time/Time.jsx";

export function Home({ isDarkMode, setIsDarkMode }) {
  return (
    <div className="container">
      <div className="inicio"><h1>Ejercicio UseState</h1></div>
      <ModeDark isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <LikeDislike />
      <ColorChanger />
      <Time />
    </div>
  );
}
