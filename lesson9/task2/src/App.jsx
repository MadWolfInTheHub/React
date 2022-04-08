import React, { Component } from 'react';
import UserForm from './UserForm';

const user = {
  name: 'Serhii',
  student: true,
  occupation: 'coconut',
  about: 'I\'m learning React',
}

class App extends Component {
  render() {
    return (
      <UserForm createUser={user}/>
    );
  };
};

export default App;