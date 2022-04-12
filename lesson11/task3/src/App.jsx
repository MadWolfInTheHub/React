import React, { Component } from "react";
import Expand from "./Expand";

class App extends Component {
  state = {
    isOpen: false,
  }
  
  handleDialog = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
    console.log(this.state)
  }

  render() {
    const elem = (
      <p>
        Hooks are a new addition in React 16.8. They let you use state and other React features
        without writing a class.
      </p>
    )
    return (
      <div className="app">
        <Expand isOpen={this.state.isOpen} handleDialog={this.handleDialog} title="Some title">
          {elem}
        </Expand>
      </div>
    );
  };
};
export default App;