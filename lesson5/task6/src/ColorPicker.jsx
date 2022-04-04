import React, { Component } from "react";


const COLAR = 'Coral'
const AQUA = 'Aqua'
const BISQUE = 'Bisque'

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '',
    }
  }
  setColorName = text => {
    this.setState({
      color: text
    })
  }
  cleanTitle = () => {
    this.setState({
      color: ''
    })
  }

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button className="picker__button picker__button_coral"
          onMouseEnter={() => this.setColorName(COLAR)}
          onMouseLeave={() => this.cleanTitle()}
          ></button>
          <button className="picker__button picker__button_aqua"
          onMouseEnter={() => this.setColorName(AQUA)}
          onMouseLeave={() => this.cleanTitle()}
          ></button>
          <button className="picker__button picker__button_bisque"
          onMouseEnter={() => this.setColorName(BISQUE)}
          onMouseLeave={() => this.cleanTitle()}
          ></button>
        </div>
      </div>
    )
  }
}

export default ColorPicker;