import './WeatherInfo.css'
import React, { Component } from 'react'

const API_KEY = process.env.REACT_APP_WEATHER_KEY;

export default class WeatherInfo extends Component {

    state = ({
        weatherData: {}
    })

    currentDate() {
        const d = new Date();
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        let day = d.getDate();
        let month = d.getMonth();
        let year = d.getFullYear();
        return (day + " " + months[month] + " " + year);
    }

    getApiInformation = async (location) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`);
        const json = await response.json();
        console.log(json);
        this.setState({
            weatherData: json
        })
    }

    async componentDidMount() {
        try {
            await this.getApiInformation(this.props.inLocation.searchLocation);
        } catch (err) {
            console.log(`Cannot GET API.`, err)
        }
    }

    render() {
        return (
            <div className={typeof this.state.weatherData.main == "undefined" ? 'weather-info-container-0' :
                Math.round(this.state.weatherData.main.temp <= 0) ? 'weather-info-container-0' :
                    Math.round(this.state.weatherData.main.temp) > 0 && Math.round(this.state.weatherData.main.temp) <= 20 ? 'weather-info-container-0-20' :
                        Math.round(this.state.weatherData.main.temp) > 20 ? 'weather-info-container-20' : 'weather-info-container-0'}>

                {(typeof this.state.weatherData.main != "undefined") ? (
                    <div className="text-container">
                        <div className="location">{this.state.weatherData.name}, {this.state.weatherData.sys.country}</div>
                        <div className="main-temp">{Math.round(this.state.weatherData.main.temp)}°C</div>
                        <div className="sub-temp">Min: {Math.round(this.state.weatherData.main.temp_min)}°C, Max: {Math.round(this.state.weatherData.main.temp_max)}°C</div>
                        <div>{this.state.weatherData.weather[0].main}</div>
                        <div>{this.currentDate()}</div>
                    </div>)
                    : (this.state.weatherData.cod === "404") ? (
                        <div className="error-container">
                            <div>Invalid location: {this.props.inLocation.searchLocation}</div>
                        </div>
                    )
                        : <div>Loading...</div>
                }
                <button
                    onClick={this.props.onDelete}
                    className="delete-button">Delete</button>
            </div>
        )
    }
}