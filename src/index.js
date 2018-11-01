import React, { Component } from "react";
import ReactDOM from "react-dom";
import WeatherList from "./components/WeatherList";
import store from "./Store";
//const key = "081559a775fda980764c67ca0d45dd1f";

import "./styles.css";

class WeatherApp extends Component {
  state = { data: store };

  render() {
    console.log(this.state.data);

    return (
      <div className="WeatherApp">
        Weather App
        <WeatherList />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<WeatherApp />, rootElement);
