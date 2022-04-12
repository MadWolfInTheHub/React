import React, { Component } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFareinheitChange = this.handleFareinheitChange.bind(this);
    this.state = {
      temperature: '',
      scale: 'c',
    };
  };

  handleCelsiusChange(temperature) {
    this.setState({
      scale: 'c',
      temperature
    });
  };

  handleFareinheitChange(temperature) {
    this.setState({
      scale: 'f',
      temperature
    });
  };

  toCelsius(farenheit)  {
    return (farenheit - 32) * 5 / 9;
  }
  
  toFarenheit(celsius) {
    return (celsius * 9 / 5) + 32;

  }
  
  tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
      return ''
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) /1000;
    return rounded.toString();
  };

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
    const farenheit = scale === 'c' ? this.tryConvert(temperature, this.toFarenheit) : temperature;
    return (
      <div>
        <TemperatureInput 
          scale="c"
          temperature={celsius}
          onTemperautreChange={this.handleCelsiusChange}
        />
        <TemperatureInput 
          scale="f"
          temperature={farenheit}
          onTemperautreChange={this.handleFareinheitChange}
        />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  };
};

export default Calculator;