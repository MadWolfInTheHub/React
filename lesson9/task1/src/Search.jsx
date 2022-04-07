import React, { Component } from 'react';

class Search extends Component {
  state ={
    value: 'good restaurant'
  };

  handleChange = (event) => {
    event.persist();
    this.setState({
      value: event.target.value
    });
  };

  search = (event) => {
    event.preventDefault();
    alert(`Search text: ${this.state.value}`)
  };

  render() {
    return (
      <form onSubmit={this.search} className="search">
        <input onChange={this.handleChange} value={this.state.value} type="text" className="search__input" />
        <button className="search__button" type='submit'>Search</button>
      </form>
    );
  };
};

export default Search;