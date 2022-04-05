import React, { Component } from 'react';
import Greeting from './Greeting';

class Auth extends Component {
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
    let button;
    if(this.state.isLoggedIn) {
      button = <button className='btn logout'  onClick={this.handleLogout}>Logout</button>
    } else {
      button = <button className='btn logout' onClick={this.handleLogin}>Login</button>
    }
    return (
      <div className='panel'>
        <Greeting isLoggedIn={this.state.isLoggedIn}/>
        <div>
          <div>{button}</div>
        </div>
      </div>
    )
  }
}

export default Auth;