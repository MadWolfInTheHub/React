import React, { Component } from 'react';
class Filter extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  };

  render() {
    return(
      <>
        <span className="filter__count">{this.props.count}</span>
        <input type="text" className="filter__input" onChange={this.props.onChange} value={this.props.filterText}/>
      </>
    );
  };
};

export default Filter;