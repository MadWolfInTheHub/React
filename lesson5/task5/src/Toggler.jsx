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
      counter: this.state.counter === false ? this.state.counter = true : this.state.counter = false ,
    })
    this.setState({
      toggler: this.state.counter === false ? this.state.toggler = 'On' : this.state.toggler = 'Off'

    })
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