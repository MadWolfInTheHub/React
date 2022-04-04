import React, { Component } from "react";

class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      toggler: 'off',
    }

  }

  switcher = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
    console.log(this.state.counter)
    this.state.counter % 2 === 0 ? this.state.toggler = 'on' : this.state.toggler = 'off'
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