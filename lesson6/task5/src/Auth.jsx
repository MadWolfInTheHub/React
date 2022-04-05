import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component{
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      showSpinner: false
    };
  }
  handleLogin = () => {
    this.setState({
      showSpinner: true
    })
    setTimeout(() => {
      this.setState({
        showSpinner: false,
        isLoggedIn: true,
      })
    }, 2000);
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    })
  }

  render() {
    return (
      <>
        {this.state.showSpinner ? (
        <Spinner size={'50px'} style={'inline-block'}/>
      ) : (
        <Spinner size={'50px'} style={'none'}/>
      )}
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