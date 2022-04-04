import React, { Component } from "react";


const COLAR = 'Coral'
const AQUA = 'Aqua'
const BISQUE = 'Bisque'

class ColorPicker extends Component {
  setColorName = text => {
    const color = document.querySelector('.picker__title');
    color.textContent = text;
  }

  render() {
    return (
      <div>
        <div className="picker__title"></div>
        <div>
          <button className="picker__button picker__button_coral"
          onMouseEnter={() => this.setColorName(COLAR)}></button>
          <button className="picker__button picker__button_aqua"
          onMouseEnter={() => this.setColorName(AQUA)}></button>
          <button className="picker__button picker__button_bisque"
          onMouseEnter={() => this.setColorName(BISQUE)}></button>
        </div>
      </div>
    )
  }
}

export default ColorPicker;