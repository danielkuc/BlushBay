import React from 'react';
import styled from 'styled-components';

const AddToCartBtn = (props) => {
  // destructured state context passed on from Product parent
  const {CartValue, ModalValue, product} = props.options;

  // updates cart, sets product property if inCart to true and updates count to 1 and opens modal.
  const handleCart = () => {
    CartValue.setCart(prev => [...prev, product]);
    product.inCart = true;
    product.count = 1;
    ModalValue.setModal({modalItem: product, modalOpen: true});
};

// CONDITIONAL RENDER
if(product.inCart) {
  return (
    <>
      <Button disabled={true}>
      <i className="fas fa-check"/> Item added
      </Button>
    </>
  )
} else {
  return (
    <>
      <Button onClick={handleCart}>
      <i className="fas fa-cart-plus"/> Add to cart
      </Button>
    </>
  )
}
}

const Button = styled.button`
  margin: auto 0;
  padding: 0.2rem 0.4rem;
  border: none;
  border-radius:3px;
  font-size: 1.4rem;
  background-color:white;


  &: hover {
    ${props => props.disabled} {
      cursor: pointer;
    }
  transition:all 0.3s linear;
  }

`


export default AddToCartBtn;