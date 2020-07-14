import React, { Component } from 'react'
import shortid from 'shortid'
import './WeatherForm.css'

export default class WeatherForm extends Component {
    state = ({
        searchLocation: ""
    })

    handleChange = (event) => {
        this.setState({
            searchLocation: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        (this.state.searchLocation.trim() !== "") ?
            (this.props.onSubmit({
                searchLocation: this.state.searchLocation,
                id: shortid.generate()
            }))
            : (alert("Invalid Input"))
    }

    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit}>

                    <div className="search-bar-container">
                        <input
                            value={this.state.searchLocation}
                            name="searchLocation"
                            onChange={this.handleChange}
                            placeholder="Location..."
                            autoComplete="off"
                        />
                    </div>

                    <div className="buttons-container">
                        <button type="button" className="cancel-button" onClick={this.props.onCancel}>Cancel</button>

                        <button type="submit" className="search-button" onClick={this.handleSubmit}>Search</button>
                    </div>


                </form>
            </div>
        )
    }
}
