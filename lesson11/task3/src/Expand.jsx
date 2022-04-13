import React, { Component } from 'react';
import propTypes from "prop-types";
import { render } from 'react-dom';

class Expand extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }
  
  handleDialog = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  
  render() {
    let arrow;
    let children;
    if (!this.state.isOpen) {
      children =  null;
      arrow = <i className="fas fa-chevron-down" ></i>
    } else {
      children = this.props.children;
      arrow = <i className="fas fa-chevron-up" ></i>
    }
    return (
    <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.handleDialog}>
            {arrow}
          </button>
        </div>
        <div className="expand__content">
          {children}
        </div>
      </div>
    );
  };
};

Expand.propTypes = {
  children: propTypes.element,
  title: propTypes.string,
}

Expand.defaultProps = {
  title: '',
}

export default Expand;