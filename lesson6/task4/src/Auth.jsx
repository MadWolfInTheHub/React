import React, { Component } from "react";
import Status from "./Status";

class Auth extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOline: false
    }
  }
  render() {
    return (
    <div className="status">
      <Status/>
    </div>
    );
  };
}

export default Auth;