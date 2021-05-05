import React from 'react';
import { StyledMyCart } from './MyCart.styled';

const MyCart = ({length}) => {
  return (
    <StyledMyCart>
      <span>My Cart</span>
      <i className="fas fa-shopping-cart"/>
      <span className="cart-basket d-flex  align-items-center justify-content-center">
        {length}
      </span>
    </StyledMyCart>
  )
}

export default MyCart;
