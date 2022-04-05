import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component{
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    })
  }


  render() {
    return (
      <>
      {this.state.isLoggedIn ? (
        <Logout onLogout={() => this.handleLogout()} />
      ) : (
        <Login onLogin={() => this.handleLogin()}/>
      )}
      </>
    )
  }
}

export default Auth;