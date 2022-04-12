import React from 'react';
import propTypes from "prop-types"

const Dialog = ({ isOpen, onClose, children, title }) => {
  if(!isOpen) {
    return null;
  }
  return (
    <div className="dialog">
    <div className="dialog__heading">
    <h4 className="dialog__title">{title}</h4>
      <button className="dialog__close-btn" onClick={onClose}>+</button>
    </div>
    <div className="dialog__content">
      {children}
    </div>
  </div>
  );
};

Dialog.propTypes = {
  isOpen: propTypes.bool,
  children: propTypes.element,
  title: propTypes.string,
  onClose:propTypes.func.isRequired
}

Dialog.defaultProps = {
  isOpen: false,
  title: '',
}

export default Dialog;