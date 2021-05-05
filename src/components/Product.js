import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {useDetail, useCart, useModal} from '../state';
import AddToCartBtn from './AddToCartBtn';


const Product = (props) => {
  // access to state Context
  const CartValue = useCart();
  const DetailValue = useDetail();
  const ModalValue = useModal();

  // destructured product passed on from parent
  const product = props.product;
  const {image_link, price, name} = product;

  // props to be passed to addToCartBtn
  const state = {CartValue, ModalValue, product};

  return (
    <ProductWrapper className='col-9 mx-auto col-md-5 col-lg-3 my-3'>
      <div className="card animate-bottom">
        <div className="img-container p-4" onClick={() => DetailValue.setDetail(product)}>
          <Link to='/details'>
            <img src={image_link} alt="product" className='card-img-top'/>
          </Link>
        </div>
        {/* footer */}
        <div className="card-footer text-center ">
          <p>{name}</p>
          <p className="h5 text-dark font-italic">
            £{price}
          </p>
        </div>
        {/* end of footer */}
        <div className='mb-2'>
          <AddToCartBtn options={state}/>
        </div>
      </div>
    </ProductWrapper>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    price: PropTypes.string,
    title: PropTypes.string
  }).isRequired
}

export const ProductWrapper = styled.div`
.card{
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: transparent;
  transition:all 0.5s linear;
  min-height: 25rem;
  max-height: 25rem;
  background: var(--mainBackground) !important;
}

.card-footer{
  background:transparent;
  border-top: transparent;
  transition:all 0.5s linear;
}

&:hover{
  .card{
    border: 0.04rem solid rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2)
  }
}
.img-container {
  margin: auto ;
  position: relative;
  overflow: hidden;
}

.card-img-top{
  transition: all 0.5s linear;
}
.img-container:hover .card-img-top {
  transform: scale(1.1);
}

.animate-bottom {
  position: relative;
  -webkit-animation-name: animatebottom;
  -webkit-animation-duration: 2s;
  animation-name: animatebottom;
  animation-duration: 2s
}

@-webkit-keyframes animatebottom {
  from { bottom:-50px; opacity:0 } 
  to { bottom:0px; opacity:1 }
}
@keyframes animatebottom { 
  from{ bottom:-50px; opacity:0 } 
  to{ bottom:0; opacity:1 }
}
`

export default Product;