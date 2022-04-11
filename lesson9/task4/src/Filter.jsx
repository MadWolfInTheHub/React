import React, { Component } from 'react';
class Filter extends Component {
  constructor(props) {
    super(props);
  };
  state = {
    text: this.props.filter
  }

  render() {
    return(
      <>
        <span className="filter__count">{this.props.count}</span>
        <input type="text" className="filter__input" onChange={this.props.onChange} value={this.state.text} />
      </>
    );
  };
};

export default Filter;