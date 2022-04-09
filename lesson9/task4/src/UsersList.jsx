import React, { Component } from "react";
import User from './User';

class UsersList extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.users)
  }
  
  render() {  
    let usersList = this.props.users
    return (
      <ul className="users">{usersList.map(user => (
        <User key={user.id} name={user.name} age={user.age}/>
        ))}
      </ul>
    
    );
  }
}


export default UsersList;