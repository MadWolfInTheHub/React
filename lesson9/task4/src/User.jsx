import React, {Component} from 'react';


class User extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }

  render() {
    return (
        <li className="user">
          <span className="user__name">{this.name}</span>
          <span className="user__age">{this.age}</span>
        </li>
    );
  };
};


export default User;