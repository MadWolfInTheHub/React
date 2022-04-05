import React, { Component } from "react";
import Online from "./Online";
import Offline from "./Offline";

class Status extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOline: true,
      isOffline: false
    }
  }
  render() {
    return (
    <div className="status">
      {this.state.isOline === true && this.state.isOffline === false ? ( 
      <Online/> 
      ) : (
      <Offline/>
      )}
    </div>
    );
  };
}

export default Status;