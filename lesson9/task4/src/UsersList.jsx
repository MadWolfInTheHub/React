import React, { Component } from "react";
import User from './User';

class UsersList extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }
  
  render() {  
    let usersList = this.props.users.slice();
    return (
      <ul className="users">{usersList.map(user => (
        <User key={user.id} name={user.name} age={user.age}/>
        ))}
      </ul>
    
    );
  }
}


export default UsersList;