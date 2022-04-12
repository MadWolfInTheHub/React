import React, { Component } from "react";

const scaleNames = {
  c: 'Celsius',
  f: 'Farenheit',
};

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperautreChange(e.target.value)
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fildset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
          onChange={this.handleChange}
        />
      </fildset>
    );
  };
};

export default TemperatureInput;