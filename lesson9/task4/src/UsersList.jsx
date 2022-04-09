import React, { Component } from "react";
import Filter from "./Filter";
import User from './User';

class UsersList extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.users)
  }
  
  state = {
    value: '',
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  render() {  
    const usersList = this.props.users;
 
    return (
      <div>
        <div className="filter">
          <span className="filter__count">5</span>
          <input type="text" className="filter__input" onChange={this.handleChange} value={this.state.value} />
        </div>
        <ul className="users">
          <Filter usersList={this.props.users} count={this.state}/>
        </ul>
      </div>
    
    );
  }
}


export default UsersList;