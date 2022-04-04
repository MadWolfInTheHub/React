import React, { Component } from "react";

class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      toggler: 'Off',
    }

  }

  switcher = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
    this.state.counter % 2 === 0 ? this.state.toggler = 'On' : this.state.toggler = 'Off'
  }

  render() {
    return (
      <button 
        className="toggler"
        onClick={this.switcher}
      >
      {this.state.toggler}
      </button>
    )
  }
}

export default Toggler;