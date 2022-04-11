import React, { Component } from "react";

class CartTitle extends Component {
  render() {
    return (
      <div className="cart-title">{`${this.props.userName}, you added ${this.props.count} items`}</div>
    )
  }
}

export default CartTitle;