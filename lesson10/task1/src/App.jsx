import React, { Component } from "react";
import UserProfile from './UserProfile';
import UserMenu from "./UserMenu";

class App extends Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    this.fetchUser(this.props.userId)
  }
  
  fetchUser = userId => {
    fetch(`https://api.github.com/users/${userId}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        userData: data,
      })
    });
  }

  render() {
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData}/>
        </header>
        <UserProfile userData={this.state.userData}/>
      </div>
    );
  };
};

export default App;