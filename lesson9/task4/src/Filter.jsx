import React, { Component } from 'react';
import User from './User';
import UsersList from './UsersList';

class Filter extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.users)
  }

  state = {
    checkedUsers: this.props.users,
    value: '',
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
    console.log(this.state.value)
  };
  


  render() {
    let sortedUsers;
    let sorting;
    if(this.state.value.toLowerCase() !== this.state.value.toUpperCase()) {
      sorting = this.state.value;
      sortedUsers = this.state.checkedUsers
      .slice()
      .filter(user => user.name.toLowerCase().split(``).includes(sorting.toLowerCase().split('').toString()));
      console.log(sorting.split(''))
      console.log(sortedUsers)
    } else {
      sortedUsers = this.state.checkedUsers;
    }
    return(
      <div>
        <div className="filter">
          <span className="filter__count">{sortedUsers.length}</span>
          <input type="text" className="filter__input" onChange={this.handleChange} value={this.state.value} />
        </div>
        <UsersList users={sortedUsers}/>
      </div>
    )
  };
};

export default Filter;