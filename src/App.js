import React, { Component } from 'react'
import './App.css';
import WeatherDisplay from "./components/WeatherDisplay";

class App extends Component {

  
  render() {
    return (
      <div className="App">
      <WeatherDisplay/>
      </div>
    );
  }
}

export default App;
