import React from 'react';
import propTypes from "prop-types";

const Expand = ({ handleDialog, isOpen, children, title }) => {
  let arrow;
  if (!isOpen) {
    children =  null;
    arrow = <i className="fas fa-chevron-down" ></i>
  } else {
    arrow = <i className="fas fa-chevron-up" ></i>
  }

  return (
  <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={handleDialog}>
          {arrow}
        </button>
      </div>
      <div className="expand__content">
        {children}
      </div>
    </div>
  );
};

Expand.propTypes = {
  isOpen: propTypes.bool,
  children: propTypes.element,
  title: propTypes.string,
  handleDialog: propTypes.func.isRequired
}

Expand.defaultProps = {
  isOpen: false,
  title: '',
}

export default Expand;