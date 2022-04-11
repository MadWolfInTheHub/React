import React, { Component } from "react";
import CartTitle from "./CartTitle";
import ProductsList from "./ProductsList";

class ShoppingCart extends Component {
  state = {
    cartIteams: [
      {
        id: '1',
        name: 'Iphone 11',
        price: 999,
      },
      {
        id: '2',
        name: 'iPad Pro',
        price: 799,
      },
    ],
  };

  render() {
    const count = this.state.cartIteams.length;
    return (
      <div className="column"> 
        <CartTitle userName={this.props.userData.firstName} count={count}/>
        <ProductsList cartIteams={this.state.cartIteams}/>
      </div>
    );
  };
};

export default ShoppingCart;