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
  };
  


  render() {
    let sortedUsers;
    let sorting;
/*     if(this.props.count.value.toLowerCase() !== this.props.count.value.toUpperCase()) {
      sorting = this.props.count.value;
      sortedUsers = this.props.filterText
      .slice()
      .filter(user => user.name.toLowerCase().split(``).includes(sorting.toLowerCase().split('').toString()));
      console.log(sorting.split(''))
      console.log(sortedUsers)
    } else {
      sortedUsers = this.props.filterText;
    } */
    return(
      <div>
        <div className="filter">
          <span className="filter__count">{this.props.count}</span>
          <input type="text" className="filter__input" onChange={this.handleChange} value={this.state.value} />
        </div>
        <UsersList users={this.state.checkedUsers}/>
      </div>
    )
  };
};

export default Filter;