import React, { Component } from 'react';

const  Product = ({ match }) => {
  return (
    <div className='page__content'>
      {`Product is a ${match.params.productId}`}
    </div>
  );
 
};

export default Product;
