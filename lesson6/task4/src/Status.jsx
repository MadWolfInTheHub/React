import React, { Component } from "react";
import Online from "./Online";
import Offline from "./Offline";

class Status extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOline: false
    }
  }
  render() {
    return (
    <div className="status">
      {this.state.isOline === true ? ( 
      <Online/> 
      ) : (
      <Offline/>
      )}
    </div>
    );
  };
}

export default Status;