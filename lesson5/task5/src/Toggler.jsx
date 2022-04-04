import React, { Component } from "react";

class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: false,
      toggler: 'Off',
    }

  }

  switcher = () => {
    this.state.counter === false
    ? 
    this.setState({
      counter: true
    })
    :
    this.setState({
      counter: false
    })
    this.state.counter === true ? this.state.toggler = 'On' : this.state.toggler = 'Off'
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