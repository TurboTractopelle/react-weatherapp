import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function WeatherApp() {
  return (
    <div className="AWeatherApp">
      WeatherApp
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<WeatherApp />, rootElement);
