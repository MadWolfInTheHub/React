import React, { Component } from "react";
import Filter from "./Filter";
import User from './User';

class UsersList extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    usersList: this.props.users,
    filter: '',
  };

  handleChange = (event) => {
    this.setState({
      filter: event.target.value
    });
  };
  
  render() {
    let sortedUsers;
    let sorting;
    if(this.state.filter.toLowerCase() !== this.state.filter.toUpperCase()) {
      sorting = this.state.filter;
      sortedUsers = this.state.usersList
      .slice()
      .filter(user => user.name.toLowerCase().split(``).includes(sorting.toLowerCase().split('').toString()));
    } else {
      sortedUsers = this.state.usersList;
    }
    return (
      <div>
        <div className="filter">
          <Filter filterText={this.state.filter} 
          count={sortedUsers.length} 
          onChange={this.handleChange}
          />
        </div>
        <ul className="users">{sortedUsers.map(user => (
          <User key={user.id} name={user.name} age={user.age}/>
          ))}
        </ul>
      </div>
    
    );
  }
}


export default UsersList;