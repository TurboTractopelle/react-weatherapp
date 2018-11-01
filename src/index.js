import React from "react";
import ReactDOM from "react-dom";
import WeatherList from "./components/WeatherList";

import "./styles.css";

function WeatherApp() {
  return (
    <div className="WeatherApp">
      Weather App
      <WeatherList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<WeatherApp />, rootElement);
