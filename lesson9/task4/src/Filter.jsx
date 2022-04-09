import React, { Component } from 'react';
import User from './User';

class Filter extends Component {
  constructor(props) {
    super(props)
  }
  
  
  
  render() {
    let sortedUsers;
    let sorting;
    
    if(this.props.count.value.toLowerCase() !== this.props.count.value.toUpperCase()) {
      sorting = this.props.count.value;
      sortedUsers = this.props.filterText
      .slice()
      .filter(user => user.name.split(``).includes(sorting.split('').toString()));
      console.log(sorting.split('').toString())
      console.log(sortedUsers)
    } else {
      sortedUsers = this.props.filterText;
      /* onsole.log(sorting.split('').toString()) */

    }
    return(
      <>
        {sortedUsers.map(user => (
          <User key={user.id} {...user}/>
          ))}
      </>
    )
  };
};

export default Filter;