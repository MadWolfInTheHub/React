import React, { Component } from 'react';

class Search extends Component {
  state ={
    value: ''
  };

  handleChange = (e) => {
    e.persist();
    console.log(e.target.value)
    this.setState({
      value: e.target.value
    });
  };

  search = (event) => {
    event.preventDefault()
    alert(`Search text: ${this.state.value}`)
  }
  render() {
    return (
      <form className="search">
        <input onChange={this.handleChange} value={this.state.value} type="text" className="search__input" />
        <button onClick={this.search} className="search__button" type='submit'>Search</button>
      </form>
    );
  };
};

export default Search;