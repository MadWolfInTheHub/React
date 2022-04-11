import React, { Component } from "react";
import UserProfile from './UserProfile';
import UserMenu from "./UserMenu";

class App extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.fetchUser(this.props.userId)
  }
  
  fetchUser = userId => {
    fetch(`https://api.github.com/users/${userId}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        user: data,
      })
    });
  }

  render() {
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.user}/>
        </header>
        <UserProfile userData={this.state.user}/>
      </div>
    );
  };
};

export default App;