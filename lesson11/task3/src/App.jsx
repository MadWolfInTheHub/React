import React, { Component } from "react";
import Expend from "./Expend";

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
      <div className="expand__content">
        <p>Hooks are a new addition in React 16.8. They let you use state and other React features
        without writing a class.
        </p>
      </div>
    )
    return (
      <div className="app">
        <Expend isOpen={this.state.isOpen} handleDialog={this.handleDialog} title="Some title">
          {elem}
        </Expend>
      </div>
    );
  };
};
export default App;