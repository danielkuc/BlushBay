import React from 'react';
import { Link } from 'react-router-dom';
// import PayPalButton from './PayPalButton';


const CartTotals = (props) => {
  const {cartSubTotal, cartTax, cartTotal} = props.total.cartDetails;
  const clearCart = props.clear;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right">
            <Link to='/'>
              <button className="btn btn-outline-danger mb-3 px-5 text-capitalize" type='button' onClick={() => clearCart()}>
                clear cart
              </button>
            </Link>
            <p className="h5">
              <span className="text-title">
                subtotal:</span>
                <strong>£{cartSubTotal}</strong>
            </p>
            <p className="h5">
              <span className="text-title">
                tax:</span>
                <strong>£{cartTax}</strong>
            </p>
            <p className="h5">
              <span className="text-title">
                total:</span>
                <strong>£{cartTotal}</strong>
            </p>
            {/* <PayPalButton total={parseInt(cartTotal)} clearCart={clearCart}/> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default CartTotals;
