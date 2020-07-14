import React, { Component } from 'react';
import './WeatherDisplay.css';
import WeatherInfo from "./WeatherInfo";
import WeatherForm from './WeatherForm';

export default class weatherDisplay extends Component {
    state = ({
        weather: [],
        display: 'weather'
    });

    displayWeather = () => {
        this.setState({
            display: 'weather'
        });
    };

    displayForm = () => {
        this.setState({
            display: 'form'
        });
    };

    addLocation = (location) => {
        this.setState({
            weather: [...this.state.weather, location]
        });
        this.displayWeather();
    };

    handleDelete = (id) => {
        this.setState({
            weather: this.state.weather.filter(location => location.id !== id)
        });
    };


    render() {
        return (
            <div className="display">
                {(this.state.display === "weather" && this.state.weather.length < 1) ?
                    <div className="add-new-container">
                        <button className="add-new-button" onClick={this.displayForm}>Add New</button>
                    </div>
                    : (this.state.display === "weather") ?
                        <div>
                            <div className="weather-box-container">

                                {this.state.weather.map(inLocation =>
                                    (<WeatherInfo
                                        key={inLocation.id}
                                        inLocation={inLocation}
                                        onDelete={() => this.handleDelete(inLocation.id)}
                                    />))}
                                <button className="add-new-button" onClick={this.displayForm}>Add New</button>
                            </div>
                        </div>
                        : <div>
                            <WeatherForm
                                onCancel={() => this.displayWeather()}
                                onSubmit={this.addLocation}
                            />
                        </div>
                }
            </div>
        )
    }
}
