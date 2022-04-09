import React, { Component } from 'react';
import User from './User';

class Filter extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    checkedUsers: this.props.users,
    count: this.count,
    value: '',
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };
  


  render() {
    let sorting;
    let sortedUsers;
    if(this.state.value.toLowerCase() !== this.state.value.toUpperCase()) {
      sorting = this.state.value;
      sortedUsers = this.state.checkedUsers
      .slice()
      .filter(user => user.name.toLowerCase().split(``).includes(sorting.toLowerCase().split('').toString()));
    } else {
      sortedUsers = this.state.checkedUsers;
    };
    return(
      <div>
        <div className="filter">
          <span className="filter__count">{sortedUsers.length}</span>
          <input type="text" className="filter__input" onChange={this.handleChange} value={this.state.value}/>
        </div>
        <ul className="users">
          {sortedUsers.map(user => (
          <User key={user.id} name={user.name} age={user.age}/>
          ))}
        </ul>
      </div>
    );
  };
};

export default Filter;