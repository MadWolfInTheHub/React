import React, { Component } from "react";
import Filter from "./Filter";

class UsersList extends Component {
  constructor(props) {
    super(props);
  };

  state = {
    checkedUsers: this.props.users,
    value: '',
  };
  
  render() {  
    return (
      <div>
        <Filter filteredText={this.state.value} count={this.props.users.length} users={this.props.users}/>
        <ul></ul>
      </div>
    );
  };
};


export default UsersList;