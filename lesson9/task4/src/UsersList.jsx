import React, { Component } from "react";
import Filter from "./Filter";
import User from './User';

class UsersList extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.users)
  }

  state = {
    checkedUsers: this.props.users,
    value: '',
  };
  
  render() {  
    return (
      <div>
        <Filter filteredText={this.state.value} count={this.props.users.length} users={this.props.users}/>

      </div>
    );
  };
};


export default UsersList;